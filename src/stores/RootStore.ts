import {makeAutoObservable} from "mobx";
import {UIStore} from "./UIStore";
import {ServersStore} from "./ServersStore";
import {UsersStore} from "./UsersStore";
import {MessagesStore} from "./MessagesStore";

export class RootStore {

  uiStore: UIStore = new UIStore();
  usersStore: UsersStore = new UsersStore();
  messagesStore: MessagesStore = new MessagesStore(this.usersStore);
  serversStore: ServersStore = new ServersStore(this.usersStore, this.messagesStore);

  constructor() {
    makeAutoObservable(this, storeConfigurationOverrides);
  }
}

const storeConfigurationOverrides = {};