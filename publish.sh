rm index.zip
zip -X -r ./lambda.zip ./*
aws lambda update-function-code --function-name medal-times --zip-file fileb://lambda.zip
