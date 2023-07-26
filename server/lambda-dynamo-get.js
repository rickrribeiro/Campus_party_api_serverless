
import {DynamoDBClient, ScanCommand} from '@aws-sdk/client-dynamodb'

const dynamo = new DynamoDBClient({});


async function buildResponse(data){
    return {
      statusCode:  200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  }
  
  export const handler = async (event) => {
  
  const input = {
      TableName: "todo-item",
  }
  const query = new ScanCommand(input);
    const result = await dynamo.send(query)
    const  items = loadItems(result.Items)
    return buildResponse(items)
  };
    
function loadItems( data, messages) {
    const items = []
    if (data !== undefined) {
       for(const item of data) {
            items.push({
              id: item.id['S'],
              name: item.name['S'],
              description: item.description['S'],
              updated: item.updated['S'],
              status: item.status['BOOL']
            });
        }
        
    }
    return items
}

