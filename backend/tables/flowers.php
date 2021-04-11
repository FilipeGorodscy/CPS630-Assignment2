<?php
class Flower{
  
    // database connection and table name
    private $conn;
    private $table_name = "flowers";
  
    // columns
    public $id;
    public $name;
    public $store_code;
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
                name=:name, store_code=:store_code, img_path=:img_path, price=:price";
      
        // prepare query
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->store_code=htmlspecialchars(strip_tags($this->store_code));
        $this->img_path=htmlspecialchars(strip_tags($this->img_path));
        $this->price=htmlspecialchars(strip_tags($this->price));
      
        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":store_code", $this->store_code);
        $stmt->bindParam(":img_path", $this->img_path);
        $stmt->bindParam(":price", $this->price);
      
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
        $this->store_code = $row['store_code'];
        $this->img_path = $row['img_path'];
        $this->price = $row['price'];
        return true;
    }

    function update(){
        $query = "UPDATE " . $this->table_name . "
                SET
                    name = :name,
                    price = :price
                WHERE
                    id = :id";
      
        // prepare query statement
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->price=htmlspecialchars(strip_tags($this->price));
        $this->id=htmlspecialchars(strip_tags($this->id));
      
        // bind new values
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':price', $this->price);
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
        $query = "SELECT * FROM " . $this->table_name . " WHERE name LIKE ?";
        
        $stmt = $this->conn->prepare($query);

        // sanitize
        $key_word = htmlspecialchars(strip_tags($key_word));
        $key_word = "%{$key_word}%";
        $stmt->bindParam(1, $key_word);
        $stmt->execute();
        return $stmt;
    }

    function upload_image($file){
        if(isset($file)){
            $destination = '../../images/flowers/' . $file['name'];
            move_uploaded_file($file['tmp_name'], $destination);
            return true;
        }
        return false;
    }
}
?>