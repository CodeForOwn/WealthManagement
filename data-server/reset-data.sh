echo "Resetting the data"
rm -rf datasource.json
echo "=========== Creating Data for the Server =========== "
echo "{">> datasource.json
echo "\"recommendations\" : " >> datasource.json
cat recommendations.json >> datasource.json
echo ",\"investments\" : " >> datasource.json
cat oldinvestments.json >> datasource.json
echo "}">> datasource.json
echo "=========== Data creation complete =========== "
