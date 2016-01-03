var restrict =
[
"Honey Singh",
"Badshah",
"Prank"
];

jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});


var base_selector = "ul li";
var restrict_str = "";

for (var i=0; i<restrict.length; i++) {
	var word = restrict[i];
	restrict_str = restrict_str + base_selector + ':Contains("' + word + '")';
	if(i!==restrict.length-1){
		restrict_str = restrict_str + ","
	}
}

function markNotInterested(ele){
	 console.log(ele.text());
	 $(ele).find("span:Contains('Not interested')").each(function(i){
	 	$(this).click();
	 console.log("Marked NI: +" + ele.text());
	 })
	
}

function process(ele){
		$(ele).find(restrict_str).each(function(i)
		{
			if($(this).find(restrict_str).length > 0){
				process($(this));
			}else{
		 		console.log("removed")
		 		$(this).remove();
			}
		});
}

$(function() {
	process(document);
});

