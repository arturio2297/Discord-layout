import {AppServerName} from "../../../models/contracts/servers.contracts";
import {ReactNode} from "react";
import {FaDiscord, FaEvernote, FaFortAwesome} from "react-icons/fa";

export interface ServerImageProps {
  fontSize: number;
  serverName: AppServerName;
}

function ServerImage(props: ServerImageProps):JSX.Element {

  const defineServerImage = (): ReactNode => {
    switch (props.serverName) {
      case AppServerName.Elephants:
        return <FaEvernote fontSize={props.fontSize}/>;
      case AppServerName.Kingdom:
        return <FaFortAwesome fontSize={props.fontSize}/>;
      default:
        return <FaDiscord fontSize={props.fontSize}/>;
    }
  }

  return (
    <>
      {defineServerImage()}
    </>
  )

}

export default ServerImage;