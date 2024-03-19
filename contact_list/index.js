const express = require('express');
const path = require('path');
const port = 8000;


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') );
app.use(express.urlencoded());
app.use(express.static('assets'));

// //middleware 1

// app.use(function(req, res, next){
//     req.myName = "Arpan";
//     next();
// });

// // middleware 2

// app.use(function(req, res, next){
//     console.log('name', req.myName);
//     next();
// });



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
    console.log('name2', req.myName)
     return res.render('home',{
        title: "My contact list",
        contact_list : contactList
    });
});


app.get('/practice', function(req, res){
    return res.render('practice', {title: "Playgrround"});
});

app.post('/create-contact', function(req, res){
    // return res.redirect('/practice');

    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

    contactList.push(req.body);
    return res.redirect('back');
});


app.listen(port, function(err){
    if(err) { console.log('Error in running server', err);}

    console.log('Server is running on port : ', port);
});