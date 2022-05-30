import {MessageItem} from "../models/contracts/messages.contracts";
import messages from '../assets/messages.json';

export class MessagesRepository {

  private static readonly appMessages: MessageItem[] = messages as MessageItem[];

  public static getAllMessages(): MessageItem[] {
    return this.appMessages;
  }
}