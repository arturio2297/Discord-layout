import {makeAutoObservable} from "mobx";
import {AppServerName} from "../../models/contracts/servers.contracts";
import {Channel} from "./Channel";
import {ChannelItem, ChannelType} from "../../models/contracts/channels.contracts";
import {ChannelsRepository} from "../../fakeBd/channels-repository";
import {UsersStore} from "../UsersStore";
import {ChannelsMapper} from "./mappers/ChannelsMapper";
import {MessagesStore} from "../MessagesStore";

export class Server {

  name: AppServerName = AppServerName.Main;
  id: number = 0;
  private channels: Channel[] = [];
  selectedChannel: Channel | null = null;
  participantsIds: number[] = [];
  private query: string = '';

  constructor(private usersStore: UsersStore, private messagesStore: MessagesStore) {
    makeAutoObservable(this, storeConfigurationOverrides);
  }

  initChannels() {
    this.channels = ChannelsRepository.getChannelsByServerId(this.id)
      .map(x => this.$createChannelDTO(x));
    this.channels.length && this.setSelectedChannel(this.channels[0]);
  }

  setName(value: AppServerName) {
    this.name = value;
    return this;
  }

  setId(value: number) {
    this.id = value;
    return this;
  }

  setParticipantsIds(value: number[]) {
    this.participantsIds = value;
    return this;
  }

  setSelectedChannel(value: Channel) {
    this.selectedChannel = value;
    value.setQuery('');
  }

  setQuery(value: string) {
    this.query = value;
  }

  get filteredFriendChannels(): Channel[] {
    if (!this.query) return this.channels;
    const q = this.query.toLowerCase();
    return this.friendChannels
      .filter(x => x.friend!.name.toLowerCase().includes(q));
  }

  get channelsByTypes() {
    return {
      textChannels: this.$sortByType(this.channels, ChannelType.Text),
      musicChannels: this.$sortByType(this.channels, ChannelType.Music),
      voiceChannels: this.$sortByType(this.channels, ChannelType.Voice)
    }
  }

  get isMain() {
    return this.name === AppServerName.Main;
  }

  get messagesCount(): number {
    return this.channels.reduce((sum, x) => sum + x.messagesCount, 0);
  }

  get friendChannels(): Channel[] {
    return this.channels.filter(x => x.friend && x.isPrivate);
  }

  private $sortByType(channels: Channel[], type: ChannelType) {
    return channels.filter(x => x.type === type);
  }

  private $createChannelDTO(item: ChannelItem): Channel {
    const channel = new Channel(this.usersStore, this.messagesStore);
    const friend = this.usersStore.getUser(item.participantsIds[0]);
    ChannelsMapper.map(channel, item, friend);
    channel.initMessages();
    return channel;
  }

}

const storeConfigurationOverrides = {};