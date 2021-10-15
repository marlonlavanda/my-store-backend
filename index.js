const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;

// Query Params
// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     })
//   } else {
//     res.send('No hay parámetros');
//   }
// })

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId} = req.params;
//   res.json({
//     categoryId,
//     productId
//   })
// })

routerApi(app)
app.listen(port, () => {
  console.log('Mi port' + port);
})
