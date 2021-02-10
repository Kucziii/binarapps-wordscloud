import { observable, action } from "mobx";
import WordsListResponse from "../_mocks/wordsResponseMock";

export class wordsStore {
  @observable wordsList = null;

  @observable fetchWordsList = async () => {
    try {
      this.wordsList = WordsListResponse;
    } catch (error) {
      console.log(error);
    }
  };

  @action getRandomWordItem = async () => {};

  @action clearStore = async () => {
    this.wordsResponse = null;
  };
}

export default new wordsStore();
