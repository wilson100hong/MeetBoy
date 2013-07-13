
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.conf = function(req, res) {
    res.render('conf', { title: 'Express' });
}