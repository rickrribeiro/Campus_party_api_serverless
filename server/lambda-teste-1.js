
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

    const response =  buildResponse([{
      name: 'testen',
      description: 'testd',
      status: true,
      updated: '31/03/1999',
      id: '123312312'
      }])
      
    return response;
  };
  