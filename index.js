var express = require('express');
var app = express();
var port = 3000;
app.get('/', function(request, response){
    response.send('<h1>hello ae</h1>');
});
app.get('/hung', function(request, response){
    response.send('<h1>hello hung</h1>');
});
app.listen(port, function(){
    console.log('server' + port);
});