const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')
const app = express();
const port = process.env.PORT || 3000;

// Middle ware
app.use(express.json());

const whiteList = ['http://127.0.0.1:5500']
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error('You are not allowed to access to this api'));
    }
  }
}
app.use(cors(options));
routerApi(app)

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' + port);
})
