import {Server} from "../Server";
import {ServerItem} from "../../../models/contracts/servers.contracts";

export class ServersMapper {

  public static map(server: Server, item: ServerItem) {
    server
      .setName(item.name)
      .setId(item.id)
      .setParticipantsIds(item.participantsIds);
  }
}