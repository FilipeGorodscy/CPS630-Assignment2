<?php
class Review{
  
    // database connection and table name
    private $conn;
    private $table_name = "review";
  
    // columns
    public $id;
    public $name;
    public $rating;
    public $description;
    public $created_at;
  
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
                name=:name, rating=:rating, description=:description, created_at=:created_at";
      
        // prepare query
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->name=htmlspecialchars(strip_tags($this->rating));
        $this->model=htmlspecialchars(strip_tags($this->description));
        $this->model=htmlspecialchars(strip_tags($this->created_at));
      
        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":rating", $this->rating);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":created_at", $this->created_at);
      
        // execute query
        if($stmt->execute()){
            return true;
        }
        return false;
    }
}
?>