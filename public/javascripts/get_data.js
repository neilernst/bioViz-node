var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('bioviz.db');
// make some assumptions about the data. For now.
var experiment = 1; //'HU 133' or 2 'H6-133_plus2
var chip = 28; //other choice is '29'


function fetchGenes(partial,req, res) {
    var data = new Array();
    var query = "SELECT distinct(known_gene_symbol) FROM genes WHERE genes.known_gene_symbol LIKE $partial";
    db.all(query, { $partial: partial + '%'}, function(err, rows) {
        if (err) {
            throw err;
        }
        for (i = 0; i < rows.length; i++) {
            data.push(rows[i].known_gene_symbol);
        }
    json_fmt  = JSON.stringify(data);
    res.send(json_fmt); });
}

//for the given gene name, return acceptable gene_fragments.
function getFrag(gene, req, res) {
    var data = new Array();
    var query = "SELECT DISTINCT(fragment_name) FROM genes WHERE known_gene_symbol LIKE $gene";
    db.all(query, { $gene: gene}, function(err, rows) {
        if (err) {
            throw err;
        }
        for (i = 0; i < rows.length; i++) {
            data.push(rows[i].fragment_name);
        }
        res.send(JSON.stringify(data));
    });
}

function findAllExpression(frag, req, res) { //find all expression levels for a given gene id
    var data = {};
    var query = "SELECT regions.brodmann_code, samples.mean_expression_level FROM genes, samples, regions \
                WHERE genes.id = samples.gene_id    AND regions.id = samples.region_id \
                AND genes.fragment_name = $frag AND genes.chip_id = $chip AND samples.experiment_id = $exp";
     db.all(query, { $frag: frag, $chip: 28, $exp: 1}, function(err, rows) {  //platform HU 133
        if (err) {
            throw err;
        }
        //console.log("Found matches: " + size(rows));
        for (i = 0; i < rows.length; i++) {
            data[(rows[i].brodmann_code).toString()] = rows[i].mean_expression_level;
        }
        res.send(JSON.stringify(data));
    });
}

function size(to_count) {
    var element_count = 0;
    for(var e in to_count) {
        if(to_count.hasOwnProperty(e)) {
            element_count++;
        }
    }
    return element_count;
}



//      var query = "SELECT genes.known_gene_symbol, genes.fragment_name, samples.mean_expression_level,  \
//                     regions.common_name FROM genes, samples, regions WHERE genes.id = samples.gene_id  \
//                     AND regions.id = samples.region_id AND genes.known_gene_symbol = $symbol AND \
//                     regions.brodmann_code = $code AND genes.chip_id = $chip AND samples.experiment_id = $exp";
//      db.each(query, { $symbol: "CALU", $code: "BA20", $chip: chip, $exp: "HU 133"}, function(err, row) {

exports.size = size;
exports.fetchGenes = fetchGenes;
//exports.findExpression = findExpression;
exports.findAllExpression = findAllExpression;
exports.getFrag = getFrag;