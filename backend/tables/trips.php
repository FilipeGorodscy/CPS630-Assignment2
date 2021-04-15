<?php
class Trips{
  
    // database connection and table name
    private $conn;
    private $table_name = "trips";
  
    // columns
    public $id;
    public $source;
    public $destination;
    public $distance;
    public $price;
    public $date;
    public $car_id;
    public $user_id;
  
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

    function sanitize_and_bind(&$stmt){
        // sanitize
        $this->source=htmlspecialchars(strip_tags($this->source));
        $this->destination=htmlspecialchars(strip_tags($this->destination));
        $this->distance=htmlspecialchars(strip_tags($this->distance));
        $this->price=htmlspecialchars(strip_tags($this->price));
        $this->car_id=htmlspecialchars(strip_tags($this->car_id));
        $this->user_id=htmlspecialchars(strip_tags($this->user_id));
        $this->date=htmlspecialchars(strip_tags($this->date));
      
        // bind values
        $stmt->bindParam(":source", $this->source);
        $stmt->bindParam(":destination", $this->destination);
        $stmt->bindParam(":distance", $this->distance);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":car_id", $this->car_id);
        $stmt->bindParam(":user_id", $this->user_id);
        $stmt->bindParam(":date", $this->date);
    }

    function create(){
        // query to insert record
        $query = "INSERT INTO " . $this->table_name . " SET 
                source=:source, destination=:destination, distance=:distance, 
                price=:price, car_id=:car_id, user_id=:user_id, date=FROM_UNIXTIME(:date)";
      
        // prepare query
        $stmt = $this->conn->prepare($query);
        $this->sanitize_and_bind($stmt);

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
            return;
        }
      
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
      
        // set values to object properties
        $this->source = $row['source'];
        $this->destination = $row['destination'];
        $this->distance = $row['distance'];
        $this->price = $row['price'];
        $this->car_id = $row['car_id'];
        $this->user_id = $row['user_id'];
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

    function getUserTrips($user_id){
        $query = "SELECT trips.date, trips.source, trips.destination, trips.distance, trips.price, 
                        users.username, users.email, cars.name, cars.model
                FROM trips
                INNER JOIN users ON users.id=trips.user_id
                INNER JOIN cars ON cars.id=trips.car_id
                WHERE users.id = ?
                ORDER BY trips.date";
        
        // prepare query
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->id=htmlspecialchars(strip_tags($user_id));
      
        // bind id of record to delete
        $stmt->bindParam(1, $user_id);
      
        // execute query
        $stmt->execute();
        return $stmt;
    }
}
?>