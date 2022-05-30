import {RootStore} from "../stores/RootStore";
import {UIStore} from "../stores/UIStore";
import {ServersStore} from "../stores/ServersStore";
import {UsersStore} from "../stores/UsersStore";
import {MessagesStore} from "../stores/MessagesStore";

export interface IApplicationContext {
  rootStore: RootStore;
  uiStore: UIStore;
  serversStore: ServersStore;
  usersStore: UsersStore;
  messagesStore: MessagesStore;
}