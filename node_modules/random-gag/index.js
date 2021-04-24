var axios = require("axios");
var unshort = require("unshorten.it");
var crypto = require('crypto');

var uuid = 'v6-1605760737061-17c8efdf-00ea-42bf-8a09-2dc50b9c417a';
var appid = 'com.ninegag.android.app';
var ts = Date.now().toString();
//var token = crypto.createHash('sha1').update(ts).digest('hex');
var token = process.env["9gt"] || 'Y29tLm5pbmVnYWcuYW5kcm9pZC5hcHAqMmN5czhscXpw';
var sig = crypto.createHash('sha1').update(`*${ts}_._${appid}._.${uuid}9GAG`).digest('hex');

module.exports = async function(gag_id) {
  if (!gag_id) {
    var gag = await unshort("https://9gag.com/shuffle");
    var gag_id = gag.split("/").reverse()[0];
  }
  
  var headers = {
    'Host': 'api.9gag.com',
    'user-agent': '9GAG/6920200 (Xiaomi Redmi Note 7 Pro;Android 10)',
    '9gag-9gag_token': token,
    '9gag-timestamp': ts,
    '9gag-app_id': appid,
    '9gag-device_uuid': uuid,
    '9gag-request-signature': sig,
    'x-package-id': appid,
    'x-package-version': '6920200',
    'x-device-uuid': uuid,
    'accept-encoding': 'gzip'
  };

  var rgag = await axios({
    url: 'https://api.9gag.com/v2/post?entryIds='+gag_id+'&entryTypes=animated%2Cphoto%2Cvideo%2Carticle',
    headers: headers
  });
  return rgag.data.data.posts[0];
}
