<?php
class Car{
  
    // database connection and table name
    private $conn;
    private $table_name = "car";
  
    // columns
    public $id;
    public $name;
    public $model;
    public $img_path;
    public $code;
    public $available;
    public $price;
    public $year;
  
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
                name=:name, model=:model, img_path=:img_path, code=:code, available=:available, price=:price, year=:year";
      
        // prepare query
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->model=htmlspecialchars(strip_tags($this->model));
        $this->img_path=htmlspecialchars(strip_tags($this->img_path));
        $this->code=htmlspecialchars(strip_tags($this->code));
        $this->available=htmlspecialchars(strip_tags($this->available));
        $this->price=htmlspecialchars(strip_tags($this->price));
        $this->year=htmlspecialchars(strip_tags($this->year));
      
        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":model", $this->model);
        $stmt->bindParam(":img_path", $this->img_path);
        $stmt->bindParam(":code", $this->code);
        $stmt->bindParam(":available", $this->available);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":year", $this->year);
      
        // execute query
        if($stmt->execute()){
            return true;
        }
        return false;
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
        $this->name = $row['name'];
        $this->model = $row['model'];
        $this->img_path = $row['img_path'];
        $this->code = $row['code'];
        $this->available = $row['available'];
        $this->price = $row['price'];
        $this->year = $row['year'];
        return true;
    }

    function update(){
        // For now support update of name and model only
        $query = "UPDATE " . $this->table_name . "
                SET
                    name = :name,
                    model = :model
                WHERE
                    id = :id";
      
        // prepare query statement
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->model=htmlspecialchars(strip_tags($this->model));
        $this->id=htmlspecialchars(strip_tags($this->id));
      
        // bind new values
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':model', $this->model);
        $stmt->bindParam(':id', $this->id);
      
        // execute the query
        if($stmt->execute()){
            return true;
        }
      
        return false;
    }

    function delete(){
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
      
        // prepare query
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->id=htmlspecialchars(strip_tags($this->id));
      
        // bind id of record to delete
        $stmt->bindParam(1, $this->id);
      
        // execute query
        if($stmt->execute()){
            return true;
        }
      
        return false;
    }

    function search($key_word){
        $query = "SELECT * FROM " . $this->table_name . 
                 " WHERE name LIKE ? OR model LIKE ?";
        
        $stmt = $this->conn->prepare($query);

        // sanitize
        $key_word = htmlspecialchars(strip_tags($key_word));
        $key_word = "%{$key_word}%";
        $stmt->bindParam(1, $key_word);
        $stmt->bindParam(2, $key_word);
        $stmt->execute();
        return $stmt;
    }

    function upload_image($file){
        if(isset($file)){
            $destination = '../../images/cars/' . $file['name'];
            move_uploaded_file($file['tmp_name'], $destination);
            return true;
        }
        return false;
    }
}
?>