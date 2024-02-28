const express = require('express');
const path = require('path');
const port = 8000;


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') );

var contactList = [
    {
        name : "Arpan",
        phone : "1234567890"
    },
    {
        name : "Arpan2",
        phone : "1234567890"
    },
    {
        name : "Arpan3",
        phone : "1234567890"
    },
]

app.get('/', function(req, res){
     return res.render('home',{
        title: "My contact list",
        contact_list : contactList
    });
});


app.get('/practice', function(req, res){
    return res.render('practice', {title: "Playgrround"});
});


app.listen(port, function(err){
    if(err) { console.log('Error in running server', err);}

    console.log('Server is running on port : ', port);
});