<?php
class Database{
  
    // database credentials
    private $host = "ba9486e97738c2:fc6a764d@us-cdbr-east-04.cleardb.com";
    private $db_name = "heroku_0f36606acb6602e";
    private $username = "root";
    private $password = "";
    public $conn;
  
    // get the database connection
    public function getConnection(){
  
        $this->conn = null;
  
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            die("Connection error: " . $exception->getMessage());
        }
  
        return $this->conn;
    }
}
?>