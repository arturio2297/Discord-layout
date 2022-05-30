import ProfileModal from "./common/modals/ProfileModal/ProfileModal";
import {observer} from "mobx-react-lite";

function ModalsHandler(): JSX.Element {

  return (
    <>
      <ProfileModal />
    </>
  )
}

export default observer(ModalsHandler);