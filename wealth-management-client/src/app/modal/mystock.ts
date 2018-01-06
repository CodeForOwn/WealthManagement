export class MyStock {

    script: string;
    name: string;
    buyPrice: number;
    quality: number;
    buyDate: number;
    myPercentage: number;
    myPercentageClass: string;
    myPercentageWidth: number;
    days: number;

    constructor() {

    }

    setData(data: any): void {
        var firstDate = new Date(data.buyDate);
        var secondDate = new Date();
        this.script = data.script;
        this.buyPrice = data.buyPrice;
        this.quality = data.buyQuantity;
        this.buyDate = new Date(data.buyDate).getTime();
        this.days = Math.round(Math.abs((firstDate.valueOf() - secondDate.valueOf()) / (24 * 60 * 60 * 1000)));

    }
}
