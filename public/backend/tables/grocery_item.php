<?php

class Grocery_Item{
  
    // database connection and table name
    private $conn;
    private $table_name = "grocery_items";
  
    // columns
    public $id;
    public $name;
    public $img_path;
    public $price;
  
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

    function create(){
        // query to insert record
        $query = "INSERT INTO " . $this->table_name . " SET 
                name=:name, img_path=:img_path, price=:price";
      
        // prepare query
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->img_path=htmlspecialchars(strip_tags($this->img_path));
        $this->price=htmlspecialchars(strip_tags($this->price));
      
        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":img_path", $this->img_path);
        $stmt->bindParam(":price", $this->price);
      
        // execute query
        if($stmt->execute()){
            return true;
        }
        return false;
    }

    function read_one(){
        $query = "SELECT * FROM grocery_items WHERE id = ?";
        
        // prepare query
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->id=htmlspecialchars(strip_tags($this->id));
      
        // bind id of record to delete
        $stmt->bindParam(1, $this->id);
      
        // execute query
        $stmt->execute();


        if($stmt->rowCount() == 0){
            return false;
        }
      
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
      
        // set values to object properties
        $this->name = $row['name'];
        $this->img_path = $row['img_path'];
        $this->price = $row['price'];
        return true;
    }

}
?>