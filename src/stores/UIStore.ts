import {makeAutoObservable} from "mobx";
import {ApplicationModal} from "../models/contracts/ui.contracts";

export class UIStore {

  openedModal: ApplicationModal = ApplicationModal.None;

  constructor() {
    makeAutoObservable(this, storeConfigurationOverrides)
  }

  setOpenedModal(value: ApplicationModal) {
    this.openedModal = value;
  }
}

const storeConfigurationOverrides = {};