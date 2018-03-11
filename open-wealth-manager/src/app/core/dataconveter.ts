import { Stock } from "../modal/stock";

export class DataConveter {

    public static createRecommendationStockObject(data: any, value: any): Stock {
        var recStock: Stock = new Stock();
        recStock.setMarketPrice(value.quoteSummary.result[0].price.regularMarketPrice.raw);
        recStock.setName(value.quoteSummary.result[0].price.longName);
        recStock.setRecomendationData(data);
        recStock.setTodayGain(value.quoteSummary.result[0].price.regularMarketChangePercent.raw);
        return recStock;
    }

    public static createInvestmentStockObject(data: Stock, investData: any): Stock {
        let invStock: Stock = new Stock();
        invStock.setMarketPrice(data.marketPrice);
        invStock.setName(data.name);
        invStock.setRecomendationData(data);
        invStock.setProfolioData(investData);
        return invStock;
    }
}