const express = require('express');
const Router = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = Router();
const port = process.env.PORT || 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(_, res) {
  res.status(200).json({
    status: 'success',
    message: 'welcome to my first AWS node application',
  });
});

router.get('*', function(_, res) {
  res.status(404).json({
    status: 'error',
    message: 'resource not found on this server',
  });
});

app.use('/', router);

app.listen(port, function() {
  console.log(`server running on port ${port}`);
});
