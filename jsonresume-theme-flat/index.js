var fs = require("fs");
var Handlebars = require("handlebars");

module.exports = {
	render: render
};

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.html.hbs", "utf-8");
	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

Handlebars.registerHelper("nl2br", function (value) {
	return (value || "").replace(/\n/g, "</p><p>");
});


Handlebars.registerHelper('splitLines', function (text) {
	const lines = text.split('\n');
	let result = '';
	lines.forEach(line => {
		result += `<p>${Handlebars.escapeExpression(line)}</p>`;
	});
	return new Handlebars.SafeString(result);
});
