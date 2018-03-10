echo "Starting Wealth Builder Data Server"
echo "Prerequisites:"
echo "node and npm installations should be available"
echo "=========== Creating Data for the Server =========== "
if [ ! -e data-server/datasource.json ]
then
    echo "{">> data-server/datasource.json
    echo "\"recommendations\" : " >> data-server/datasource.json
    cat data-server/recommendations.json >> data-server/datasource.json
    echo ",\"investments\" : " >> data-server/datasource.json
    cat data-server/investments.json >> data-server/datasource.json
    echo "}">> data-server/datasource.json
fi
echo "=========== Data creation complete =========== "
nohup ./data-server/bin/index.js --watch data-server/datasource.json --port 3030 &
echo "*********** Wealth Builder Data Server Started *********** "

echo "*********** Starting Wealth Builder Application *********** "
cd open-wealth-manager
npm start  
echo "*********** Wealth Builder Application Started *********** "