import {createContext, ReactNode, useContext} from "react";
import {IApplicationContext} from "./contracts";
import {RootStore} from "../stores/RootStore";

function dummyValue<T extends object>(): T {
  return new Proxy({} as T, {
    get(): never {
      throw new Error('Application context error');
    }
  })
}

const ApplicationContext = createContext<IApplicationContext>(dummyValue());

export function createStores(): IApplicationContext {
  const rootStore = new RootStore();
  const {uiStore, serversStore, usersStore, messagesStore} = rootStore;

  return {
    rootStore,
    uiStore,
    serversStore,
    usersStore,
    messagesStore
  };
}

export function useStores(): IApplicationContext {
  return useContext(ApplicationContext);
}

export interface ApplicationContextProviderProps {
  children: ReactNode;
}

function ApplicationContextProvider({children}: ApplicationContextProviderProps): JSX.Element {
  return (
    <ApplicationContext.Provider value={createStores()}>
      {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationContextProvider;