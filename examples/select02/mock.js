module.exports = {
  "GET /v1/rest/data/:type": function(req, res, next){
    console.log(req.params)
    switch(req.params.type) {
      case "init":
        return res.send({
          data:JSON.stringify([{
            value:1,
            label:'angular'
          },{
            value:2,
            label:'react'
          }])
        })
      case "relate":
        return res.send({
          data:JSON.stringify([{
            value:1,
            label:'ng-model'
          },{
            value:2,
            label:'ng-click'
          }])
        })
    }

  }
}