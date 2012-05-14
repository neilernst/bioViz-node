# Overview
This app will show a brain divided into regions. Each region will display the expression data for the gene the user selected in a form (e.g, PNA32). 

## Technology
* This instance is using Node for the backend. Sqlite will hold the gene expression data, but I hope to make it independent of the storage mechanism eventually.
* SVG is the representation of the brain regions. 
* JS for manipulating the SVG.

## Useful links
* https://github.com/developmentseed/node-sqlite3 - SQLite library
* http://raphaeljs.com/ - JS library for SVG
