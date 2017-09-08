<?php
 class DB{
   private $host='';
   private $user='';
   private $pass='';
   private $db = '';

   public function __construct($host,$user,$pass,$db){
     $this->host = $host;
     $this->user = $user;
     $this->pass = $pass;
     $this->db = $db;
   }

   public function connect(){
   	 mysql_connect($this->host,$this->user,$this->pass)or die("Could Not Connect To database server"); //to connect to the database

   	 mysql_select_db($this->db)or die("Couldn't select the requested DB");  //to select the relevant database
   }

   public function createTable($table,$params){

   	      $query = 'CREATE TABLE IF NOT EXISTS '.$table.'( ';
   	      $query.=$params;
   	      $query.=')';
   	      $res = $this->exec($query);
   }

   public function dropTable($table){
   	$query = "DROP TABLE ".$table;
   	$res = $this->exec($query);
   }

   public function insertData($table,$data){

   }

   public function exec($query){
   	  $result = mysql_query($query)or die(mysql_error());
   	  return $result;
   }

 }

 $db = new DB('localhost:3306','root','qwerty123','edunet');
 $db->connect();
 $db->createTable('users',"id int(11) NOT NULL AUTO_INCREMENT,scholar int(11) NOT NULL,name varchar(255) NOT NULL,pointer FLOAT(3) NOT NULL,primary key(id)");
 $db->dropTable('users');
?>
