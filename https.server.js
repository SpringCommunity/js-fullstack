import https from 'https';
https.get('https://meo.sn4mobile.com/hus-css/register?su=ajaala&la=fi', res => {
   console.log('Response status code: ', res.statusCode);
   res.on('data', chunk => {
      console.log(chunk.toString());
   });
});
