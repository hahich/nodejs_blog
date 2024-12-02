import express from 'express';
import { engine, create } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url';
import route from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const hbs = create({
  helpers: {
    hea() { return 'HEA!'; },
    foo() { return 'FOO!'; }
  }
})
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});