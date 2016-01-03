var restrict =
[
"Honey Singh",
"Badshah"
];

var base_selector = "ul li";
var restrict_str = "";

for (var i=0; i<restrict.length; i++) {
	var word = restrict[i];
	restrict_str = restrict_str + base_selector + ':contains("' + word + '")';
	if(i!==restrict.length-1){
		restrict_str = restrict_str + ","
	}
}

$(function() {
	$(restrict_str).each(function(i)
	{
	   $(this).remove(); // This is your rel value
	});
});