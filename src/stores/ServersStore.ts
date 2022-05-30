import {makeAutoObservable} from "mobx";
import {Server} from "./domain/Server";
import {ServerItem} from "../models/contracts/servers.contracts";
import {ServersRepository} from "../fakeBd/servers-repository";
import {UsersStore} from "./UsersStore";
import {isInside} from "../fakeBd/utils";
import {ServersMapper} from "./domain/mappers/ServersMapper";
import {MessagesStore} from "./MessagesStore";

export class ServersStore {

  servers: Server[] = [];
  selectedServer: Server | null = null;

  constructor(private usersStore: UsersStore, private messagesStore: MessagesStore) {
    makeAutoObservable(this, storeConfigurationOverrides);
    this.initServers();
  }

  sendMessageToFriend(body: string, friendId: number) {
    const main = this.servers.find(x => x.isMain);
    if (!main) return;
    const channel = main.friendChannels.find(x => x.friend!.id === friendId);
    if (!channel) return;
    channel.sendMessage(body);
    if (this.selectedServer !== main) this.setSelectedServer(main);
    if (main.selectedChannel !== channel) main.setSelectedChannel(channel);
  }

  setSelectedServer(value: Server) {
    this.selectedServer = value;
    value.setQuery('');
  }

  generalServers(userId: number): Server[] {
    return this.servers.filter(x => isInside(x.participantsIds, userId) && !x.isMain);
  }

  private initServers() {
    this.servers = ServersRepository.getAllServers()
      .map(x => this.$createServerDTO(x));
    this.setSelectedServer(this.servers[0]);
  }

  private $createServerDTO(item: ServerItem): Server {
    const server = new Server(this.usersStore, this.messagesStore);
    ServersMapper.map(server, item);
    server.initChannels();
    return server;
  }
}

const storeConfigurationOverrides = {};