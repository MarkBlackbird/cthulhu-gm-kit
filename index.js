require('dotenv').config();

var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var count_single = true;


var last_page = 0;

var abilities = [
  {
    'name': 'antropology',
    'en_name': 'Antropology',
    'pl_name': 'Antropologia',
    'base_value': 1,
    'required': true
  },
  {
    'name': 'archeology',
    'en_name': 'Archeology',
    'pl_name': 'Archeologia',
    'base_value': 1,
    'required': true
  },
  {
    'name': 'firearms_long',
    'en_name': 'Firearms (Rifle/Shotgun)',
    'pl_name': 'Broń Palna (Karabin/Strzelba)',
    'base_value': 25,
    'required': true
  },
  {
    'name': 'firearms_short',
    'en_name': 'Firearms (Handgun)',
    'pl_name': 'Broń Palna (Krótka)',
    'base_value': 20,
    'required': true
  },
  {
    'name': 'characterization',
    'en_name': 'Characterization',
    'pl_name': 'Charakteryzacja',
    'base_value': 5,
    'required': true
  },
  {
    'name': 'electronics',
    'en_name': 'Electronics',
    'pl_name': 'Elektronika',
    'base_value': 1,
    'required': true
  },
  {
    'name': 'electric_repair',
    'en_name': 'Electric Repair',
    'pl_name': 'Elektryka',
    'base_value': 10,
    'required': true
  },
  {
    'name': 'fast_talk',
    'en_name': 'Fast Talk',
    'pl_name': 'Gadanina',
    'base_value': 5,
    'required': true
  },
  {
    'name': 'history',
    'en_name': 'History',
    'pl_name': 'Historia',
    'base_value': 5,
    'required': true
  },
  {
    'name': 'foreign_language',
    'en_name': 'Foreign Language',
    'pl_name': 'Język Obcy',
    'base_value': 1,
    'required': true
  },
  {
    'name': 'language',
    'en_name': 'Language',
    'pl_name': 'Język Ojczysty',
    'base_value': 'education',
    'required': true
  },
  {
    'name': 'library_use',
    'en_name': 'Library Use',
    'pl_name': 'Korzystanie z Bibliotek',
    'base_value': 20,
    'required': true
  },
  {
    'name': 'computer_use',
    'en_name': 'Computer Use',
    'pl_name': 'Korzystanie z komputerów',
    'base_value': 5,
    'required': true
  },
  {
    'name': 'accounting',
    'en_name': 'Accounting',
    'pl_name': 'Księgowość',
    'base_value': 5,
    'required': true
  },
  {
    'name': 'mechanical_repair',
    'en_name': 'Mechanical Repair',
    'pl_name': 'Mechanika',
    'base_value': 10,
    'required': true
  },
  {
    'name': 'credit_rating',
    'en_name': 'Credit Rating',
    'pl_name': 'Majętność',
    'base_value': 0,
    'required': true
  },
  {
    'name': 'medicine',
    'en_name': 'Medicine',
    'pl_name': 'Medycyna',
    'base_value': 1,
    'required': true
  },
  {
    'name': 'cthulhu_mythos',
    'en_name': 'Cthulhu Mythos',
    'pl_name': 'Mity Cthulhu',
    'base_value': 0,
    'required': true
  },
  {
    'name': 'listening',
    'en_name': 'Listening',
    'pl_name': 'Nasłuchiwanie',
    'base_value': 20,
    'required': true
  }
]

let rawdata = fs.readFileSync('investigator.json');
let investigator = JSON.parse(rawdata);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


// index page
app.get('/', function(req, res) {
  res.render('pages/investigator', {
    "investigator": investigator,
    "abilities": abilities
  });
});

// app.get('/classes', function(req, res) {
//   res.render('pages/classes', database);
// });

// app.get('/rules', function(req, res) {
//   res.render('pages/rules', database);
// });

// app.get('/preview', function(req, res) {
//   res.render('pages/preview', {previewURL: decodeURI(req.query.previewUrl)});
// });

// app.get('/servant/:servantId', function(req, res) {
//   last_page = req.params.servantId;
//   var servant = database["entries"][req.params.servantId];
//   console.log('Servant is ' + servant['name'] +'\n\n');
//   if(typeof servant['alternatives'] !== "undefined")
//     console.log(servant['alternatives']);
//   formatAnswers([servant['name']].concat(servant['answers']));
//   correct_answer = servant['name'];
//   res.render('pages/servant', {
//     entryData: servant,
//     entryId: req.params.servantId,
//     classes: database["classes"],
//     lastId: database["entries"].length - 1
//   });
// });


app.listen(8080);
console.log('Server is listening on port 8080');
