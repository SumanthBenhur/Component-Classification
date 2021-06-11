# Reference:
# https://aws.amazon.com/blogs/machine-learning/call-an-amazon-sagemaker-model-endpoint-using-amazon-api-gateway-and-aws-lambda/
# https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-output-format

import boto3
import math
import dateutil
import json
import os

# grab environment variables
#ENDPOINT_NAME = os.environ['ENDPOINT_NAME']
client = boto3.client(service_name='sagemaker-runtime')

# Raw Data Structure: 
# datetime,season,holiday,workingday,weather,temp,atemp,humidity,windspeed,casual,registered,count
# Model expects data in this format (it was trained with these features):
# season,holiday,workingday,weather,temp,atemp,humidity,windspeed,year,month,day,dayofweek,hour
def transform_data(data):
    try:
        features = data.copy()
        print(features)
        return ','.join([str(feature) for feature in features[0:]])
        
        
    except Exception as err:
        print('Error when transforming: {0},{1}'.format(data,err))
        raise Exception('Error when transforming: {0},{1}'.format(data,err))
        
    
def lambda_handler(event, context):
    try: 
        userOption = event["userOption"]
        length =float(event["length"])
        width = float(event["width"])
        thickness = float(event["thickness"])
        
        trans_event = {'userOption': userOption, 'instances': [{'features': [length, width, thickness]}]}
        #print(event)
        print("Received event: " + json.dumps(trans_event, indent=2))
        
        request = json.loads(json.dumps(trans_event))
        
        algorithm=request["userOption"]
        transformed_data = [transform_data(instance['features']) for instance in request["instances"]]
        print(transformed_data)
        
        if algorithm=="XGBoost":
            ENDPOINT_NAME="xgboost-endpoint"
        elif algorithm=="SVM":
            ENDPOINT_NAME="svm-endpoint"
        elif algorithm=="KNN":
            ENDPOINT_NAME="knn-endpoint"
        else :
            ENDPOINT_NAME="lr-endpoint"
    
        # XGBoost accepts data in CSV. It does not support JSON.
        # So, we need to submit the request in CSV format
        # Prediction for multiple observations in the same call
        result = client.invoke_endpoint(EndpointName=ENDPOINT_NAME, 
                               Body=('\n'.join(transformed_data).encode('utf-8')),
                               ContentType='text/csv')
                               
    
        result = result['Body'].read().decode('utf-8')
    
        print(result)
        
        
        if algorithm=="XGBoost":
            result = float(result)
            if result > 0.5:
                result = 1
                pred = "Vorderachse"
            else:
                result = 0
                pred = "Hinterachse"
        
        
        if algorithm=="LinearLearner":
            if result[66] == "1":
                pred = "Vorderachse"
            else:
                pred = "Hinterachse"
        
        if algorithm=="KNN":
            if result[37] == "1":
                pred = "Vorderachse"
            else:
                pred = "Hinterachse"
        
        if algorithm=="SVM":
            if result[0] == "1":
                pred = "Vorderachse"
            else:
                pred = "Hinterachse"
            
            

        
#       result = result.split(',')
        
        return {
            'statusCode': 200,
            'isBase64Encoded':False,
            'body': json.dumps(pred)
        }

    except Exception as err:
        return {
            'statusCode': 400,
            'isBase64Encoded':False,
            'body': 'Call Failed {0}'.format(err)
        }