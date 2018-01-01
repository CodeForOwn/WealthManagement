export class Stock {
  script: string;
  name: string;
  investPrice: number;
  targetPrice: number;
  rcomPrice: number;
  rcomDate: Date;
  rcomTimeScale: string;
  rcomBy: string;
  rtargetPercentage: string;
  days: string;

  constructor() {

  }

  setData(data: any): void {
    var firstDate = new Date(data.rcomDate);
    var secondDate = new Date();
    this.script = data.script;
    this.name = data.name;
    this.investPrice = data.buyPrice;

    this.rcomPrice = data.rcomPrice;
    this.targetPrice = data.targetPrice;
    this.rtargetPercentage = (((200000 - 10000) / 23) * 100).toFixed(2);

    this.rcomDate = new Date(data.rcomDate);
    this.days = Math.abs((firstDate.valueOf() - secondDate.valueOf()) / (24 * 60 * 60 * 1000)).toFixed(0);

    this.rcomTimeScale = data.rcomTimeScale;
    this.rcomBy = data.rcomBy;

  }
}
