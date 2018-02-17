#start the data server
nohup ./data-server/bin/index.js --watch data-server/datasource.json --port 3030 &

#start the application
cd open-wealth-manager
npm start  
