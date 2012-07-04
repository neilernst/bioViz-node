$(document).ready(function(){
	$('#brain-img').svg({onLoad: drawMixture});
});

function drawMixture(svg) {
	svg.configure({width: '540px', height: '400px'});
	svg.load('images/brain-map.svg');
	nb = svg.getElementById('BA5');
	$('#BA5').attr('fill','green');
	na = $('#na-group').hide();//$('#brain-svg').hide();
	alert($.svg.isSVGElem(nb)	);
	//$('#BA7').setAttribute("fill", "red");
}