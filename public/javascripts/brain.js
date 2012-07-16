$(document).ready(function(){
	var paper = Raphael(document.getElementById("brain-img"), 540, 400);
	var region_options = {stroke: "black"}; // fill: "black", 
	var region_set = paper.set();
	for(path in regions){
 		var newpath = paper.path(regions[path]);
		newpath.attr(region_options)
 		newpath.id = path;
 		region_set.push(newpath);
	}
	var rectset = paper.set();
	for (i = 0; i < rects.length; i++) {
		var newrect = paper.rect(rects[i][1], rects[i][2], rects[i][3],rects[i][4]);
		newrect.attr({stroke: "black"});
		newrect.id = rects[i][0];
		rectset.push(newrect);
	}
	var labelset = paper.set();
	for (var label in labels) {
		var newlabel = paper.text(labels[label][0], labels[label][1], labels[label][2]);
		labelset.push(newlabel);
		//maybe add id?
	}
	labelset.attr({"font-size": 13, "font-family": "Helvetica"});
	var thisPath = paper.getById('Amygdala');
	fill =  
	thisPath.attr({fill: "rgb(0,0,255)", opacity: .75});
	var re = /Neil/;
});

var get_data = function() {
	// retrieve the MEL
	var data = []
}
var group = function ( values ) {
	// determine 5 bins for given array of values
	//from http://stackoverflow.com/questions/1669190/javascript-min-max-array-values
	var min = Math.min.apply(null, arr),
    	max = Math.max.apply(null, arr);

}