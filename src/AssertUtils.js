/**
 * Created by gvc on 3/1/2016.
 */
module.exports={
  assertTrue:function assertTrue(condition){
      if(!condition){
          throw new Error('assertion failed:' + condition );
      }
  }
};

/*
(function main(){
    AssertUtils.assertTrue(true);
    AssertUtils.assertTrue(1 == 1);
    AssertUtils.assertTrue(1===1);
    AssertUtils.assertTrue(0 == 1);
})();*/
