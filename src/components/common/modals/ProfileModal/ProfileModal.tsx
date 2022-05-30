import styled, {css} from "styled-components";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import {useStores} from "../../../../context/context";
import {ApplicationModal} from "../../../../models/contracts/ui.contracts";
import UserCardHeader from "../../users/UserCardHeader";
import SendMessage from "./SendMessage";
import UserName from "../../users/UserName";
import GeneralServers from "./GeneralServers";
import Modal from "../../../../ui-elements/Modal";
import {Server} from "../../../../stores/domain/Server";

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Body = styled.div`
  width: 100%;
  padding-top: 80px;

  > div:first-child {
    padding: 0 20px;
  }
`

const PlayIn = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  color: var(--icon-color-h);
`

const InfoSelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  margin-top: 30px;
`

const SelectorItem = styled.div<{ selected: boolean }>`
  margin-left: 20px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  font-weight: bold;
  color: var(--icon-color);
  transition: var(--tr-c-0_1s);

  ${({selected}) => selected && css`
    color: white;
  `}
`

const LineIndicator = styled.div<{ isAboutMe: boolean }>`
  position: absolute;
  background-color: white;
  width: 110px;
  height: 3px;
  bottom: -16px;
  transition: left .2s ease-in-out;
  left: ${({isAboutMe}) => isAboutMe ? 20 : 150}px;
`

const AboutMeInfo = styled.div`
  font-size: 14px;
  padding: 0 20px;
  color: var(--icon-color);
  
  > div {
    margin: 4px 0;
  }
`

const ServersInfo = styled.div`
  font-size: 14px;
  padding: 0 20px;
  color: var(--icon-color)
`

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 16px 0;
`

function ProfileModal(): JSX.Element {

  const [isAboutMe, setIsAboutMe] = useState<boolean>(true);
  const {serversStore, usersStore, uiStore} = useStores();
  const user = usersStore.selectedUser;
  const servers: Server[] = user ? serversStore.generalServers(user.id) : [];

  const closeModal = () => {
    uiStore.setOpenedModal(ApplicationModal.None);
    usersStore.setSelectedUser(null);
  }

  return (
    <>
      {(uiStore.openedModal === ApplicationModal.UserProfile && user) &&
      <Modal
          show
          close={closeModal}
          width={600}
      >
          <Container>
              <UserCardHeader
                  height={120}
                  user={user}
                  onCloseClick={closeModal}
                  avatarSettings={
                    {
                      left: 15,
                      bottom: -65,
                      size: 120,
                      bgColor: 'var(--bg-c-gray)',
                      indicatorSize: 35,
                      indicatorRight: 5,
                      indicatorBottom: 5,
                      showAlertIndicator: true
                    }
                  }
              >
                {!user.isMe && <SendMessage/>}
              </UserCardHeader>
              <Body>
                  <UserName name={user.name} number={user.number} fontSize={20}/>
                {user.isOnline &&
                <PlayIn>
                  {user.play ? `Играет в ${user.play}` : 'Не играет'}
                </PlayIn>}
                {!user.isMe &&
                <InfoSelector>
                    <SelectorItem
                        selected={isAboutMe}
                        onClick={() => setIsAboutMe(true)}
                    >
                        Личные данные
                    </SelectorItem>
                    <SelectorItem
                        selected={!isAboutMe}
                        onClick={() => setIsAboutMe(false)}
                    >
                        Общие серверы
                    </SelectorItem>
                    <LineIndicator isAboutMe={isAboutMe}/>
                </InfoSelector>}
                  <Separator/>
                {!user.isMe &&
                <>
                  {isAboutMe ?
                    <AboutMeInfo>
                      <div>
                        Обо мне
                      </div>
                      <div>
                        Живу в ритме со временем...
                      </div>
                    </AboutMeInfo>
                    :
                    <ServersInfo>
                      <GeneralServers servers={servers} close={closeModal} />
                    </ServersInfo>}
                </>}
              </Body>
          </Container>
      </Modal>}
    </>
  )
}

export default observer(ProfileModal);