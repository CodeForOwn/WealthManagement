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
  targetPercentage: string;
  achivedPercentage: string;
  achivedPercentageClass: string;
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
    this.targetPercentage = (((this.targetPrice - this.rcomPrice) / this.rcomPrice) * 100).toFixed(2);
    if (this.marketPrice !== undefined && this.marketPrice != 0) {
      this.achivedPercentage = (((this.marketPrice - this.rcomPrice) / this.rcomPrice) * 100).toFixed(2);
      console.log('achivedPercentage: ', this.achivedPercentage)
      this.achivedPercentageClass = parseFloat(this.achivedPercentage) > 0 ? 'success' : 'danger';
      if (parseFloat(this.achivedPercentage) < 0) {
        this.achivedPercentage = (parseFloat(this.achivedPercentage) * -1).toFixed(2);
      }
    }

    this.rcomDate = new Date(data.rcomDate).getTime();
    this.days = Math.abs((firstDate.valueOf() - secondDate.valueOf()) / (24 * 60 * 60 * 1000)).toFixed(0);

    this.rcomTimeScale = data.rcomTimeScale;
    this.rcomBy = data.rcomBy;

  }
}
