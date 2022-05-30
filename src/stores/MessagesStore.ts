import {makeAutoObservable} from "mobx";
import {Message} from "./domain/Message";
import {MessagesRepository} from "../fakeBd/messages-repository";
import {UsersStore} from "./UsersStore";
import {MessageBodyType, MessageItem} from "../models/contracts/messages.contracts";
import {MessagesMapper} from "./domain/mappers/MessagesMapper";

export class MessagesStore {

  messages: Message[] = [];
  usersStore: UsersStore;

  constructor(usersStore: UsersStore) {
    makeAutoObservable(this, storeConfigurationOverrides);
    this.usersStore = usersStore;
    this.initMessages();
  }

  private initMessages() {
    this.messages = MessagesRepository.getAllMessages()
      .map(x => this.$createMessageDTO(x));
  }

  sendMessage(body: string, channelId: number) {
    const message = this.$createMessageDTO(
      {
        userId: 1,
        body: body,
        date: new Date().toISOString(),
        channelId: channelId,
        bodyType: MessageBodyType.Text
      }
    );
    this.messages.push(message);
  }

  removeMessage(message: Message) {
    this.messages = this.messages.filter(x => x !== message);
  }

  getChannelMessages(channelId: number): Message[] {
    return this.messages.filter(x => x.channelId === channelId);
  }

  private $createMessageDTO(item: MessageItem) {
    const message = new Message();
    const user = this.usersStore.getUser(item.userId);
    MessagesMapper.map(message, item, user);
    return message;
  }
}

const storeConfigurationOverrides = {};