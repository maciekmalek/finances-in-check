import { makeAutoObservable } from "mobx";

class RecordsStore {
  records = [
    {
      id: 0,
      name: "",
      date: "",
      amount: 0,
      currency: "",
      category: "",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  getnextID() {
    return ++this.records[this.records.length - 1].id;
  }
  addRecord(
    name: string,
    date: string,
    amount: number,
    currency: string,
    category: string
  ) {
    let insertedRecord = {
      id: this.getnextID(),
      name: name,
      date: date,
      amount: amount,
      currency: currency,
      category: category,
    };
    this.records.push(insertedRecord);
  }
  removeRecord(id: number) {
    this.records.find((element) => {
      return element.id == id;
    });
  }
}
export default RecordsStore;
