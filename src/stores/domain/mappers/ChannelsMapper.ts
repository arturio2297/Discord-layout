import {ChannelItem} from "../../../models/contracts/channels.contracts";
import {Channel} from "../Channel";
import {User} from "../User";
import {NULL} from "../../../models/contracts/common";

export class ChannelsMapper {

  public static map(channel: Channel, item: ChannelItem, friend: User | NULL) {
    channel
      .setType(item.type)
      .setId(item.id)
      .setName(item.name)
      .setServerId(item.serverId)
      .setParticipantsIds(item.participantsIds)
      .setIsPrivate(item.isPrivate)
      .setFriend(friend)
  }
}