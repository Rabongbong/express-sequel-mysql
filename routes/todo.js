var models = require('../models');
var express = require('express');
var router = express.Router();


// 조회
router.get('/',  async function(req, res, next) {
  const {title} = req.query;   // query로 받아오기
  var information;
  
  try{
    information = await models.list.findOne({ where: {title: title}});
    res.send(information);
  }catch(err){
    console.log(err);
    res.send(500);
  }
});


// 변경
router.put('/:title',  async function(req, res, next) {
  const comment = req.body.comment;   
  const title = req.params.title;
  try{
    await models.list.update({
      comment
    },{
      where: {title: title}
    })
    res.send('success');
  }catch(err){
    console.log(err);
    res.send(500);
  }
});



//생성
router.post('/', async function(req, res, next) {
  const { title } = req.body;

  try{
    await models.list.create({
      title: title,
    });
    res.send('success');
  }catch(err) {
    console.log(err);
    console.log("fail to access data");
    res.send('fail');
  };
});



//삭제
router.delete('/:title',  async function(req, res, next) {  
  const title = req.params.title;
  
  try{
    await models.list.destroy({
      where: {title: title}
    })
    res.send('success');
  }catch(err){
    console.log(err);
    res.send(500);
  }
});

module.exports = router;
