import {makeAutoObservable} from "mobx";
import {ChannelType} from "../../models/contracts/channels.contracts";
import {Message} from "./Message";
import {UsersStore} from "../UsersStore";
import {MessagesStore} from "../MessagesStore";
import {NULL} from "../../models/contracts/common";
import {User} from "./User";

export class Channel {

  id: number = 0;
  serverId: number = 0;
  type: ChannelType = ChannelType.Text;
  name: string = '';
  participantsIds: number[] = [];
  isPrivate: boolean | NULL = null;
  friend: User | NULL = null;

  private messages: Message[] = [];

  query: string = '';

  constructor(private usersStore: UsersStore, private messagesStore: MessagesStore) {
    makeAutoObservable(this, storeConfigurationOverrides);
  }

  initMessages() {
    this.messages = this.messagesStore.getChannelMessages(this.id);
  }

  sendMessage(body: string) {
    this.messagesStore.sendMessage(body, this.id);
    this.initMessages();
  }

  removeMessage(message: Message) {
    this.messagesStore.removeMessage(message);
    this.messages = this.messages.filter(x => x !== message);
  }

  setId(value: number) {
    this.id = value;
    return this;
  }

  setServerId(value: number) {
    this.serverId = value;
    return this;
  }

  setType(value: ChannelType) {
    this.type = value;
    return this;
  }

  setName(value: string) {
    this.name = value;
    return this;
  }

  setParticipantsIds(value: number[]) {
    this.participantsIds = value;
    return this;
  }

  setIsPrivate(value: boolean | NULL) {
    this.isPrivate = value;
    return this;
  }

  setFriend(value: User | NULL) {
    this.friend = value;
    return this;
  }

  setQuery(value: string) {
    this.query = value;
  }

  get messagesCount(): number {
    return this.messages.length;
  }

  get filteredMessages(): Message[] {
    if (!this.query) return this.messages;

    const lowerCaseQuery = this.query.toLowerCase();

    return  this.messages.filter(x => {
      return (
        x.body.toLowerCase().includes(lowerCaseQuery)
        ||
        x.user?.name.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }
}

const storeConfigurationOverrides = {};