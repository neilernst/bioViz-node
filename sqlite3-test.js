var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('bioviz.db');
// make some assumptions about the data. For now.
var experiment = 1 //'HU 133' or 2 'H6-133_plus2
var chip = 28; //other choice is '29'

db.serialize(function() {
 var query = "SELECT genes.known_gene_symbol, genes.fragment_name, samples.mean_expression_level, regions.common_name FROM genes, samples, regions WHERE genes.id = samples.gene_id AND regions.id = samples.region_id AND genes.known_gene_symbol = $symbol AND regions.brodmann_code = $code AND genes.chip_id = $chip AND samples.experiment_id = $exp";
 db.each(query, { $symbol: "CALU", $code: "BA20", $chip: chip, $exp: experiment}, function(err, row) {  
    console.log(row.fragment_name + " - " + row.known_gene_symbol + ": " + row.mean_expression_level);
  });

});

db.close();