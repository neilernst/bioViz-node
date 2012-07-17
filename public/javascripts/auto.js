$(function() {
    var cache = {}, lastXhr;
    $( "#genes" ).autocomplete({
        minLength: 2,
        source: function( request, response ) {
            var term = request.term;
            if ( term in cache ) {
                response( cache[ term ] );
                return;
            }

            lastXhr = $.getJSON( "gene", request,
                function( data, status, xhr ) {
                    cache[ term ] = data;
                    if ( xhr === lastXhr ) {
                        response( data );
                    }
            });
        }
    });

    $("#btnUpdate").click(function() {
        var frag_data = $.ajax( { 
            type: "POST",
            url: "/color",
            data: {gene: $( "#genes" ).val()},
            success: function(data, textStatus, jqXHR) {
                //remove the existing options descdended from frags
                $('#frags >option').remove();
                data = jQuery.parseJSON(data);
                for(i=0; i< data.length; i++) {
                    $("#frags")
                        .append($("<option></option>")
                        .attr("value",data[i])
                        .text(data[i]));
                }
            }
        });
    });

    $("#frags").change(function() {
        var frag = $("#frags").val();
        var mels = $.ajax({
            type:"POST",
            url: "/mel",
            data: "fragid=" + frag,
            success: function(data, textStatus, jqXHR) {
                data = jQuery.parseJSON(data);
                updateRegions(data);
            }
        });
    });
});