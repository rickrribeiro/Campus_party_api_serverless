
import {DynamoDBClient, ScanCommand, PutItemCommand} from '@aws-sdk/client-dynamodb'

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
  
    switch(event.httpMethod){
      case 'GET':
        const input = {
            TableName: "todo-item",
        }
        const query = new ScanCommand(input);
        const result = await dynamo.send(query)
        const  items = loadItems(result.Items)
        return buildResponse(items)
      case 'POST':
        const data = JSON.parse(event.body)
        const putCommand = new PutItemCommand({
          TableName: 'todo-item',
          Item: {
            name: {S: data.name},
            description: {S: data.description},
            status: {BOOL: data.status },
            updated: {S: '31/03/1999' },
            id: {S: Math.floor(Math.random() * (9999 - 1 + 1) + 1).toString()}
          }
        })
        await dynamo.send(putCommand)
        return buildResponse(data)
      default:
        return buildResponse('missing httpMethod')
    }
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

