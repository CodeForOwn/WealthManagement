export class Stock {
  script: string;
  name: string;
  buyPrice: number;
  targetPrice: number;
  rcomPrice: number;
  rcomDate: Date;
  rcomTimeScale: string;
  rcomBy: string;

  constructor() {

  }

  setData(data: any) : void {
    this.script = data.script;
    this.name = data.name;
    this.buyPrice = data.buyPrice;
    this.targetPrice = data.targetPrice;
    this.rcomPrice = data.rcomPrice;
    this.rcomDate = data.rcomDate;
    this.rcomTimeScale = data.rcomTimeScale;
    this.rcomBy = data.rcomBy;
  }
}
