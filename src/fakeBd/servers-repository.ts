import {ServerItem} from "../models/contracts/servers.contracts";
import servers from '../assets/servers.json';

export class ServersRepository {

  private static readonly appServers: ServerItem[] = servers as ServerItem[];

  public static getAllServers(): ServerItem[] {
    return this.appServers;
  }
}