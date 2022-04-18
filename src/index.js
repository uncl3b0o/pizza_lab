const express = require('express');
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser')
const sessionMiddleware = require("./middlewares/sessions.middleware")
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


const route = require('./routes');
const path = require('path');
const app = express();
const port = 2000;
const db = require('./config/db');



//Connect to DB
db.connect();


const hbs = handlebars.create({
  extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(path.join(__dirname, 'public')));
// dcm

app.use(express.json()); // support json encoded bodies
app.use(bodyParser.urlencoded( { extended: true}))
app.use(cookieParser('NhN'))
app.use(sessionMiddleware)
app.use(methodOverride('_method'));

route(app);

app.listen(port, () => {
    console.log(`App listen at http://localhost:${port}`);
})