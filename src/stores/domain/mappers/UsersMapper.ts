import {User} from "../User";
import {UserItem} from "../../../models/contracts/users.contracts";

export class UsersMapper {

  public static map(user: User, item: UserItem) {
    user.setId(item.id)
    .setName(item.name)
    .setNumber(item.number)
    .setAvatarUrl(item.avatarUrl)
    .setIsFriend(item.friend)
    .setIsOnline(item.online)
    .setPlay(item.play)
  }
}