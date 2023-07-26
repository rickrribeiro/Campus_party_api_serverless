export const handler = async (event) => {
    // TODO implement
    const response =  {
              statusCode:  200,
              body: JSON.stringify( [{
        name: 'testen',
        description: 'testd',
        status: true,
        updated: '31/03/1999',
        id: '123312312'
      }]),
              headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*'
              }
          };
      
    return response;
  };
  