var https = require('https');

var options = {
    hostname: 'api.telegram.org',
    port: '443',
    path: '/bot' + 'AAEHFe3gc8pagdSUmuyK34zHPeYvwRm-hz8' + '/getWebhookInfo',
    method: 'GET'
};
https.request(options, (response) => {

    //console.log('СТАТУС:', response.statusCode);
    // console.log('ЗАГОЛОВКИ:', response.headers);

    response.setEncoding('utf8');
    response.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    response.on('end', () => {
        console.log('No more data in response.');
    });
}).end();