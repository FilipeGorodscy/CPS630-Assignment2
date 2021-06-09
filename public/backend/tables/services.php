<?php
class Services{
  
    // database connection and table name
    private $conn;
    private $table_name = "services";
  
    // columns
    public $id;
    public $service_name;
    public $description;
  
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // This function will read all records from the database
    function read(){
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    function readOne(){
        // query to read single record
        $query = "SELECT * FROM " . $this->table_name . " WHERE id = ? LIMIT 0,1";
      
        // prepare query statement
        $stmt = $this->conn->prepare( $query );
      
        // bind id of product to be updated
        $stmt->bindParam(1, $this->id);
      
        // execute query
        $stmt->execute();

        if($stmt->rowCount() == 0){
            return false;
        }
      
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
      
        // set values to object properties
        $this->service_name = $row['service_name'];
        $this->description = $row['description'];
        return true;
    }

    function search($key_word){
        $query = "SELECT * FROM " . $this->table_name . " WHERE service_name LIKE ?";
        
        $stmt = $this->conn->prepare($query);

        // sanitize
        $key_word = htmlspecialchars(strip_tags($key_word));
        $key_word = "%{$key_word}%";
        $stmt->bindParam(1, $key_word);
        $stmt->execute();
        return $stmt;
    }
}
?>