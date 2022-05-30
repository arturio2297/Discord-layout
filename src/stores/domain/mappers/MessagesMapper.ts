import {MessageItem} from "../../../models/contracts/messages.contracts";
import {Message} from "../Message";
import {User} from "../User";
import {NULL} from "../../../models/contracts/common";

export class MessagesMapper {

  public static map(message: Message, item: MessageItem, user: User | NULL) {
    message.setUserId(item.userId)
      .setChannelId(item.channelId)
      .setBody(item.body)
      .setBodyType(item.bodyType)
      .setDate(item.date)
      .setUser(user);
  }
}