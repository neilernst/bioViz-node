# Overview
This app will show a brain divided into regions. Each region will display the expression data for the gene the user selected in a form (e.g, PNA32). 

## Technology
* This instance is using Node for the backend. Sqlite will hold the gene expression data, but I hope to make it independent of the storage mechanism eventually.
* SVG is the representation of the brain regions. 
* JS for manipulating the SVG.

## Useful links
* https://github.com/developmentseed/node-sqlite3 - SQLite library https://github.com/developmentseed/node-sqlite3/wiki API
* http://raphaeljs.com/ - JS library for SVG
* https://github.com/felixge/node-mysql - MySQL driver
* http://keith-wood.name/svgRef.html
* http://www.hacksparrow.com/express-js-tutorial.html this is a good site for understanding how Express is laid out.

## Data storage
* Started with MySQL or SQLITE but all the joins seem silly to me. Data started with Excel spreadsheet, so that structure seems reasonable. 

Data is grouped 
* Platform (Hu133/H6-133_plus2)
	* Chip
		* Fragment ID 
		* Fragment Name 
		* Sequence Name
		* Known Gene Symbol
		* Brain Area (this is the brain)
			* N Subjects
			* % Subjects Gene Present
			* Mean Expression Level
			* StdDev of Mean
		
Now what I want to show is, for a gene/fragment, in the given brain area, what is the MEL of that gene? 

Second thoughts. The data is already in MySQL, so a few joins shouldn't be too hard. We have the following SQLITE data

What is the MEL for RPL28 in BA89, chip 28? 
	For Excel spreadsheet it is 81.69
	For MySQL it is
	For SQLITE it is 81.69.
	SQLITE seems to have all the data from my brief check.
	QUERY: 
	select genes.known_gene_symbol, samples.mean_expression_level, regions.common_name from genes,samples, regions where genes.id = samples.gene_id and regions.id = samples.region_id and genes.known_gene_symbol = "DDX48" and regions.brodmann_code = 'Nucleus_accumbens';
	
	# June 18 
	Using Stylus and Jade for output, with Express as web framework. 
	Stylus compiles a .styl file into CSS. You refer to the CSS that gets compiled in the Jade file.
	In Jade the layout.jade file is the 'main' function, that gets the value of variables. Typically 'body' variable gets the value of "page.jade".
	