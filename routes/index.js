
/*
 * GET home page.
 */

var TITLE = "Confertablb";

exports.index = function(req, res){
  res.render('index', { title: TITLE });
};

exports.meeting = function(req, res) {
    var name = req.body.name,
        color = req.body.language;
    console.log(name);
	res.render('meeting', {title: TITLE});
};

