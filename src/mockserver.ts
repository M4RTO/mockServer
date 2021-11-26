import { mockServerClient } from 'mockserver-client';

const HOST = 'localhost';
const PORT = 1080;

export function expect(
  verb: string,
  path: string,
  status: number,
  body: any,
  delaySeconds: number
) {
  mockServerClient(HOST, PORT)
    .mockAnyResponse({
      httpRequest: {
        method: verb,
        path: path
        // "queryStringParameters": {
        //     "cartId": ["055CA455-1DF7-45BB-8535-4F83E7266092"]
        // },
        // "cookies": {
        //     "session": "4930456C-C718-476F-971F-CB8E047AB349"
        // }
      },
      httpResponse: {
        delay: {
          timeUnit: 'SECONDS',
          value: delaySeconds
        },
        statusCode: status,
        body: body
      }
    })
    .then(
      function() {
        //console.log(`expectation created: ${verb}, ${path}, ${status.toString()}`);
      },
      function(error) {
        console.log(error);
      }
    );
}

export function reset() {
  mockServerClient(HOST, PORT)
    .reset()
    .then(
      function() {
        console.log('reset all state');
      },
      function(error) {
        console.log(error);
      }
    );
}
