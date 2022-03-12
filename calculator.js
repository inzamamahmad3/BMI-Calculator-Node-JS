const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html")
})

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html")
})
app.post("/bmiCalculator", function(req, res){
  var numb1 = Number(req.body.nu1)
  var numb2 = Number(req.body.nu2)
  var result = numb1 / (numb2 * 2)
  res.send("Your BMI is " + String(result))
})

app.post("/", function(req, res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2

  res.send(String(result));

//  res.send(result)
})

app.listen(3000, function(){
    console.log("Node server is started")
  })
