# Wealth Management
Application to manage portfolio and wish-lists and track recommendations

## Feature under implementation
    - US12 : Recommendation and MyInvestment data should be moved to data server.
    - US6 : User should be able view multiple buy\sell for the same script @coderhindu
        Should include common 3 common fields (script, exchange & suggested by)
        Should include array for buy and sell items.
        Should support imgration scripts for my-investment.json. Or should be backward compatible.
    - US11 : User should be able to view graph with 3 below bars based on suggestions
        Target, Acived, My Income.

####    TODO
    * Sort the data in the bar chart based on income.
####    Planned items
    - US5 : User should be able to see the name on Company as a tooltip onhover the script
    - US7 : New Recomendation added (or less than 2 weeks old) should be show in a different color or some kind of notification
    - US8 : If do dont get the CMP for a give script, we should still be able to display availabled statis data.
    


[![travis](https://img.shields.io/travis/chartjs/Chart.js.svg?style=flat-square&maxAge=60)](https://travis-ci.org/chartjs/Chart.js) [![coveralls](https://img.shields.io/coveralls/chartjs/Chart.js.svg?style=flat-square&maxAge=600)](https://coveralls.io/github/chartjs/Chart.js?branch=master)
## Feature completed
####    Version 1
    - US1 : User shall be able to view the suggestion
    - US2 : User shall be able to view the CMP of the suggestion and Target achived.
    - US3 : User shall be able to check out the code and run the application in local system and launch the application.
    - US4 : User should be able to see this investment along with suggestion and returns. @bsmaheshkumar
    - US9 : Support for BSE stocks

### Bugs
    - Tooltip is not working

## WishList
    - User portfolio, should handle multiple suggestion on the same script.
    - User should be able to login
    - User should be able to add/select the stock in when he has invested.
    - User should be able to view how much percent of the Corpus is being invested
    - User should be able to add/edit/view this Corpus
    - User should be able to view the version of the components
    - Create a User called Uncel Bob, who will stricly follow Stock Axis Suggestions, with X Corpus amount, and based on the same display the actuall profit/loss and display virtual profit/loss
    - Create a User called Ramana, who will stricly follow Wealth Suggestions, with X Corpus amount, and based on the same display the actuall profit/loss and display virtual profit/loss


## Installation and set-up
```
git clone https://github.com/CodeForOwn/WealthManagement
cd data-server
npm install
cd ../open-wealth-manager
npm install
cd ..
sh sh start-application.sh
```
> Install a CORS add on the browser and turn it on. This is required to make queries to yahoo server.

##  Invocation
### Launch 
`http://localhost:4n00/` in the browser

### My Portfolio View

To view your own data in **My Portfolio** tab. Please enter details in your local copy of [my-investment.json](https://github.com/CodeForOwn/WealthManagement/blob/master/wealth-management-client/src/app/data/my-investment.json)
        
Sample Json format
    ```json
        {
        "buyPrice": 350,
        "buyQuantity": 1,
        "buyDate": "1-Jan-2018",
        "script": "WELENT"
        }
    ```

> my-investment.json is added to .gitignore, so that your data is commited.


# And Enjoy Creating Wealth for yourself and others.
