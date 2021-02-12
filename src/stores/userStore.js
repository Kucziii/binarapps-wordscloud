import { observable, action } from "mobx";

export class userStore {
  @observable userName = null;

  @action assignUser = (name) => {
    this.userName = name;
    localStorage.setItem("user", name);
  };

  @action checkUserStatus = () => {
    this.userName = localStorage.getItem("user");
    return this.userName;
  };

  @action logout = () => {
    this.userName = null;
    localStorage.setItem("user", "");
  };
}

export default new userStore();
