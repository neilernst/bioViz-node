var paper = Raphael(document.getElementById("brain-img"), 1440, 400);
var region_options = {stroke: "black"}; // fill: "black",
var region_set = paper.set();
var rear_region_set = paper.set();

for(path in regions) {
    var newpath = paper.path(regions[path]);
    newpath.attr(region_options);
    newpath.id = path;
    region_set.push(newpath);
}
for (path in rear_regions) {
  var newpath = paper.path(rear_regions[path]);
  newpath.attr(region_options);
  newpath.id = path;
  rear_region_set.push(newpath);
}

// move the rear brain stuff
rear_region_set.transform("t600,0s1.6,1.6,0,0");
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
// var thisPath = paper.getById('Amygdala');
// thisPath.attr({fill: "rgb(0,0,255)", opacity: .75});


var updateRegions = function(data) {
   var vals = new Array();
   for (area in data) {
       //console.log(area + ": " + data[area]);
       vals.push(data[area]);
   }
   var bins = d3.layout.histogram().bins(5)(vals);
   var colors = ['#6996D3', '#0F4FA8', '#FF7373', '#FF4040', '#A60000' ]; // lt blue, dk blue, lt red, mod red, dark red.
   for (area in data) {
        for (i = 0; i < bins.length; i++) {
            if(jQuery.inArray(data[area], bins[i])) {
                if(area === 'BA89') {
                    area = 'BA8';
                }
                console.log(area);
                var area_obj = paper.getById(area);
                if (area_obj !== null) {
                    area_obj.attr({fill:colors[i]});
                }
            }
        }
   }
}

