import {MessageBodyType} from "../../models/contracts/messages.contracts";
import {makeAutoObservable} from "mobx";
import {User} from "./User";
import {NULL} from "../../models/contracts/common";

export class Message {

  userId: number = 0;
  channelId: number | NULL = null;
  body: string = '';
  bodyType: MessageBodyType = MessageBodyType.Text;
  date: string = '';
  user: User | NULL = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUserId(value: number) {
    this.userId = value;
    return this;
  }

  setChannelId(value: number | NULL) {
    this.channelId = value;
    return this;
  }

  setBody(value: string) {
    this.body = value;
    return this;
  }

  setBodyType(value: MessageBodyType) {
    this.bodyType = value;
    return this;
  }

  setDate(value: string) {
    this.date = value;
    return this;
  }

  setUser(user: User | NULL) {
    this.user = user;
    return this;
  }

}