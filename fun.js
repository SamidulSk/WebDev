var sanctify = require('sanctify');

var unholy = "property of the landover baptist church IT department";
var holy = sanctify(unholy);

console.log(holy);