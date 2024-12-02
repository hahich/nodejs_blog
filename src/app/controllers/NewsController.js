class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    // [GET] /news/:show
    show(req, res){
        res.send('News details')
    }
}

export default NewsController;