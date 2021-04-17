var fs = require('fs');
var fetch = require('node-fetch');

function userData(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) { 
        fs.mkdir('result', function(err){
            if (err) throw err;
            console.log('Directory successfully created');
            fs.writeFile('./result/posts.json', JSON.stringify(data), function(err){
                if (err) throw err;
                console.log('File saved');
            });
        });
    });
}
userData()