const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const controllers = require('./controllers');

const app = express();
const PORT = process.env.PORT || 7777
const hbs = exphs.create({ helpers });

const http = require('http').Server(app);

const sess = {
    secret: "Not 100% sure how to use secrets, secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", middleware.getRequests);

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
    http.listen(PORT, () => console.log(`Listening on the coolest PORT ${PORT}`));
})