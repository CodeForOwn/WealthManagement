import web
import json
from nsetools import Nse

urls = (
    '/quote/(.*)', 'get_quote',
)

app = web.application(urls, globals())

class get_quote:
    def GET(self, nseids):
        print(nseids)
        ids = nseids.split(',')
        nse = Nse()
        pricelist = []
        for nseid in ids:
            details = nse.get_quote(nseid)
            name = details.get('companyName')
            price = details.get('lastPrice')
            pricelist.append({  'nseid': nseid,
                                'Company Name':name,
                                'Price':price })
        return json.dumps(pricelist)

if __name__ == "__main__":
    app.run()
