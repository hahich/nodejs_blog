import newsRouter from './news.js'; 
import siteRouter from './site.js';

export default function route(app) {
    app.use('/news', newsRouter);

    app.get('/search', siteRouter);

    app.get('/home', siteRouter);
    
}