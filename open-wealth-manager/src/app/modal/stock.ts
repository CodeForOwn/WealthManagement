export class Stock {

  /* From Recommendations */
  exchange: string;
  script: string;
  targetPrice: number;
  rcomPrice: number;
  rcomDate: number;
  rcomTimeScale: string;
  rcomBy: string;

  /* From My Stocks */
  buyPrice: number;
  buyOuality: number;
  buyDate: number;
  
  /* from Yahoo */
  name: string;
  marketPrice: number;
  todayagain: number;

  /* calculated values */
  days: number;
  targetPercentage: number;
  achivedPercentage: number;
  achivedPercentageClass: string;
  achivedPercentageWidth: number;

  myPercentage: number;
  myPercentageClass: string;
  myPercentageWidth: number;
  mydays: number;
  myProfit: number;


  investPrice: number;

  constructor() {
    this.myProfit = 0;
    this.myPercentage = 0;
  }

  setMarketPrice(marketPrice: number): void {
    this.marketPrice = marketPrice;
  }

  setName(name: string): void {
    this.name = name;
  }

  setTodayGain(gain: number): void {
    this.todayagain = (gain * 100).toPrecision(2);
  }

  setRecomendationData(data: any): void {
    const firstDate = new Date(data.rcomDate);
    const secondDate = new Date();

    this.exchange = data.ex;
    this.script = data.script;
    this.investPrice = data.buyPrice;

    this.rcomPrice = data.rcomPrice;
    this.targetPrice = data.targetPrice;
    this.targetPercentage = (((this.targetPrice - this.rcomPrice) / this.rcomPrice) * 100);
    if (this.marketPrice !== undefined && this.marketPrice !== 0) {
      this.achivedPercentage = (((this.marketPrice - this.rcomPrice) / this.rcomPrice) * 100);
      this.achivedPercentageWidth = Math.abs(this.achivedPercentage);
      this.achivedPercentageClass = (this.achivedPercentage) > 0 ? 'success' : 'danger';
    }

    this.rcomDate = new Date(data.rcomDate).getTime();
    this.days = Math.round(Math.abs((firstDate.valueOf() - secondDate.valueOf()) / (24 * 60 * 60 * 1000)));

    this.rcomTimeScale = data.rcomTimeScale;
    this.rcomBy = data.rcomBy;
  }

  setProfolioData(data: any): void {
    const firstDate = new Date(data.buyDate);
    const secondDate = new Date();

    this.script = data.script;
    this.buyPrice = data.buyPrice;
    this.buyOuality = data.buyQuantity;
    this.buyDate = new Date(data.buyDate).getTime();
    this.mydays = Math.round(Math.abs((firstDate.valueOf() - secondDate.valueOf()) / (24 * 60 * 60 * 1000)));

    if (this.marketPrice !== undefined && this.marketPrice !== 0 && this.buyPrice !== undefined && this.buyPrice !== 0) {
      this.myPercentage = (((this.marketPrice - this.buyPrice) / this.buyPrice) * 100);
      this.myPercentageWidth = Math.abs(this.myPercentage);
      this.myPercentageClass = (this.myPercentage) > 0 ? 'success' : 'danger';
      this.myProfit = Math.round((this.marketPrice - this.buyPrice) * this.buyOuality);
    }

  }
}
