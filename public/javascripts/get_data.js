//var sqlite3 = require('sqlite3').verbose();
var pg = require('pg');
//var conString = "postgres://nernst@localhost:5432/bioviz";
var conString = process.env.DATABASE_URL;
//var db = new sqlite3.Database('bioviz.db');
// make some assumptions about the data. For now.
var experiment = 1; //'HU 133' or 2 'H6-133_plus2
var chip = 28; //other choice is '29'


function fetchGenes(partial,req, res) {
    pg.connect(conString, function(err, client) {
        var query = "SELECT distinct(known_gene_symbol) FROM genes WHERE genes.known_gene_symbol ILIKE $1";
        //var query = "SELECT known_gene_symbol from genes";
        partial = partial + '%';
        var data = [];
        if (err) {
            console.log(err);
        }
        client.query(query, [partial],  function(err, result) {
            if (err) {
                console.log(err);
            }
            //console.log(result);
            for (i = 0; i < result.rows.length; i++) {
                data.push(result.rows[i].known_gene_symbol);
            }

            json_fmt  = JSON.stringify(data);
            res.send(json_fmt);
        });
    });
}

//for the given gene name, return acceptable gene_fragments.
function getFrag(gene, req, res) {
    pg.connect(conString, function(err, client) {
        var data = [];
        var query = "SELECT DISTINCT(fragment_name) FROM genes WHERE known_gene_symbol ILIKE $1";
        client.query(query, [gene],  function(err, result) {
            if (err) {
                throw err;
            }
            for (i = 0; i < result.rows.length; i++) {
                data.push(result.rows[i].fragment_name);
            }
            res.send(JSON.stringify(data));
        });
    });
}

function findAllExpression(frag, req, res) { //find all expression levels for a given gene id
    pg.connect(conString, function(err, client) {
        var data = {};
        var query = "SELECT regions.brodmann_code, samples.mel_rand FROM genes, samples, regions \
                    WHERE genes.id = samples.gene_id    AND regions.id = samples.region_id \
                    AND genes.fragment_name = $1 AND genes.chip_id = $2 AND samples.experiment_id = $3";
        client.query(query, [frag, 28,  1], function(err, result) {  //platform HU 133
            if (err) {
                throw err;
            }
            //console.log("Found matches: " + size(result.rows));
            for (i = 0; i < result.rows.length; i++) {
                data[(result.rows[i].brodmann_code).toString()] = result.rows[i].mel_rand;
            }
            res.send(JSON.stringify(data));
        });
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