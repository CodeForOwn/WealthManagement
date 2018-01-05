export class Stock {

  script: string;
  name: string;
  investPrice: number;
  targetPrice: number;
  rcomPrice: number;
  marketPrice: number;
  rcomDate: number;
  rcomTimeScale: string;
  rcomBy: string;
  targetPercentage: number;
  achivedPercentage: number;
  achivedPercentageClass: string;
  achivedPercentageWidth: number;
  days: number;

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
    this.targetPercentage = (((this.targetPrice - this.rcomPrice) / this.rcomPrice) * 100);
    if (this.marketPrice !== undefined && this.marketPrice !== 0) {
      this.achivedPercentage = (((this.marketPrice - this.rcomPrice) / this.rcomPrice) * 100);
      this.achivedPercentageWidth = Math.abs(this.achivedPercentage);
      console.log('achivedPercentage: ', this.achivedPercentage);
      this.achivedPercentageClass = (this.achivedPercentage) > 0 ? 'success' : 'danger';
      console.log('achivedPercentageClass: ', this.achivedPercentageClass);
    }

    this.rcomDate = new Date(data.rcomDate).getTime();
    this.days = Math.round(Math.abs((firstDate.valueOf() - secondDate.valueOf()) / (24 * 60 * 60 * 1000)));

    this.rcomTimeScale = data.rcomTimeScale;
    this.rcomBy = data.rcomBy;

  }
}
