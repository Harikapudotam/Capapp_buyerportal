const cds = require('@sap/cds');
 
module.exports = cds.service.impl(async function (srv) {
 
    const prod_api = await cds.connect.to('OP_API_PRODUCT_SRV_0001');
  const { materials } = srv.entities;
  srv.on("READ" , materials, async (req)=>{
        req.query.where("Product <> '' ");
        req.query.SELECT.count = false;
        return prod_api.run(req.query);
       
  });
});