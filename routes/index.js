
/*
 * GET home page.
 */

var TITLE = "Confertable"; 

exports.index = function(req, res){
  res.render('index', { title: TITLE });
};

exports.meeting = function(req, res) {
    var model = {
        username: req.body.name,
        language : req.body.language,
        title: TITLE
    };
	res.render('meeting', model);
};

exports.recorder = function(req, res) {
	var name = req.body.name,
		color = req.body.color;
		lang = req.body.lang,
		time = req.body.time;
		

}

