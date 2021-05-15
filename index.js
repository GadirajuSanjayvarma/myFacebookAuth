const express = require('express')
const app = express()

const path=require('path')
const port = 3000




app.use('/',express.static(path.join(__dirname,'template')))
/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

/*app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/template/index.html'));
    //__dirname : It will resolve to your project folder.
  });*/

app.listen(process.env.PORT || 8888, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})