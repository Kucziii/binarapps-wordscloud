import { observable, action } from "mobx";
import WordsListResponse from "../_mocks/wordsResponseMock";

export class wordsStore {
  @observable wordsList = [];

  @observable selectedWords = [];

  @observable selectedGroup = null;

  @observable check = false;

  @observable score = null;

  @observable finished = false;

  @action handleFinish = () => {
    this.finished = true;
    const { good_words: goodWords } = this.selectedGroup || {};
    const correctAnswers = this.selectedWords.filter((item) =>
      goodWords.includes(item)
    ).length;
    const wrongAnswers = this.selectedWords.filter(
      (item) => !goodWords.includes(item)
    ).length;
    const missingAnswers = goodWords.filter(
      (item) => !this.selectedWords.includes(item)
    ).length;
    this.score = correctAnswers * 2 - (wrongAnswers + missingAnswers);
  };

  @action setCheck = () => {
    this.check = true;
  };

  @action setSelectedWords = (item) => {
    if (this.selectedWords.includes(item)) {
      this.selectedWords = this.selectedWords.filter((val) => val !== item);
    } else {
      this.selectedWords.push(item);
    }
  };

  @action fetchWordsList = async () => {
    try {
      this.wordsList = WordsListResponse;
    } catch (error) {
      console.log(error);
    }
  };

  @action getRandomGroupItem = () => {
    const randomItem = this.wordsList[
      Math.floor(Math.random() * this.wordsList.length)
    ];
    this.selectedGroup = randomItem;
    return randomItem;
  };

  @action clearStore = async () => {
    this.wordsList = [];
    this.selectedWords = [];
    this.check = false;
    this.finished = false;
    this.score = null;
  };
}

export default new wordsStore();
