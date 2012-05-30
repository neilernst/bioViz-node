CREATE TABLE experiments (
  id INTEGER NOT NULL PRIMARY KEY,
  platform varchar(255) DEFAULT NULL,
  date date DEFAULT NULL
);
CREATE TABLE experiments_genes (
  gene_id INTEGER NOT NULL ,
  experiment_id INTEGER NOT NULL ,
  --KEY fk_ge_experiments (experiment_id)
  PRIMARY KEY (gene_id, experiment_id)
);
CREATE TABLE genes (
  id INTEGER NOT NULL PRIMARY KEY,
  chip_id INTEGER NOT NULL DEFAULT '0',
  fragment_id varchar(255) NOT NULL DEFAULT '',
  fragment_name varchar(255) NOT NULL DEFAULT '',
  sequence_title varchar(255) NOT NULL DEFAULT '',
  known_gene_symbol varchar(8) NOT NULL DEFAULT ''
);
CREATE TABLE regions (
  id INTEGER NOT NULL PRIMARY KEY,
  common_name varchar(255) DEFAULT NULL,
  brodmann_code varchar(45) NOT NULL DEFAULT ''
);
CREATE TABLE samples (
  id INTEGER NOT NULL PRIMARY KEY,
  region_id INTEGER NOT NULL DEFAULT '0',
  gene_id INTEGER NOT NULL DEFAULT '0',
  experiment_id INTEGER NOT NULL,
  num_subjects INTEGER NOT NULL DEFAULT '0',
  percent_present float NOT NULL DEFAULT '0',
  mean_expression_level float NOT NULL DEFAULT '0',
  sd_mean float NOT NULL DEFAULT '0'
  -- KEY region_id (region_id),
  --   KEY fk_sam_gene (gene_id),
  --   KEY experiment_id (experiment_id),
  --   CONSTRAINT samples_ibfk_3 FOREIGN KEY (region_id) REFERENCES regions (id),
  --   CONSTRAINT samples_ibfk_4 FOREIGN KEY (gene_id) REFERENCES genes (id),
  --   CONSTRAINT samples_ibfk_5 FOREIGN KEY (experiment_id) REFERENCES experiments (id)