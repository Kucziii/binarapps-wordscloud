import { observable, action } from "mobx";

export class userStore {
  @observable userName = null;

  @observable assignUser = (name) => {
    this.userName = name;
  };

  @action clearStore = async () => {
    this.userName = null;
  };
}

export default new userStore();
