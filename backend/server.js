const mongoose = require('mongoose');
const app = require('./index');

mongoose
  .connect('mongodb://localhost:27017/storeDB', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connections successful'));

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
