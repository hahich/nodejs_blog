import express from 'express';
import { engine, create } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const hbs = create({
  helpers: {
    hea(){ return 'HEA!'; },
    foo(){ return 'FOO!'; }
  }
})
const app = express();
const port = 3000;


app.use(morgan('combined'));

app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});