var express = require('express');
var router = express.Router();
const axios = require('axios')
/* GET users listing. */
router.get('/', function (req, res, next) {

  console.log(req)
  res.send('respond with a resource');
});

const authentication = async (req, res, next) => {

  const result = await axios({
    method:'post',
    url: 'http://idenauthen.market.alicloudapi.com/idenAuthentication',
    headers: {
      'Authorization': 'APPCODE ' ,
      "Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'
    },
    data:JSON.stringify({
      idNo:'130434199502035672',
      name:'李泽泽'
    })

  }).catch((e)=>{
    console.log(e)
  })


  console.log(result.data)
  res.send(result)


}

router.post('/check', authentication)


module.exports = router;
