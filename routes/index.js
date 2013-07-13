
/*
 * GET home page.
 */

var TITLE = "Confertablb";

exports.index = function(req, res){
  res.render('index', { title: TITLE });
};

exports.meeting = function(req, res) {
	res.render('meeting', {title: TITLE});
};

