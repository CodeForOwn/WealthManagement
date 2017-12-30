# How to use this from command line.
# python stockValue.py sbin infy

print "Starting to get Stock value!!!"

import json
import sys
from nsetools import Nse

nse = Nse()
print nse

if(len(sys.argv) > 1) :

    for i in range(1, len(sys.argv)) :
        script = sys.argv[i]
        print('\n' * 2)
        print "Input script : ", script

        q = nse.get_quote(code)

        #For Debugging
        #from pprint import pprint
        #pprint (q)

        if not (q is None):
            json_str = json.dumps(q)
            response = json.loads(json_str)
            print "Name : ", response['companyName']
            print "Code : ", response['symbol']
            print "CMP  : ", response['lastPrice']
            print('\n' * 2)
        else :
            print "Connection Error or Invalid code : ", script
else :
    print "Please provide alteast one script."