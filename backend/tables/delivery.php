<?php
class Delivery{
  
    // database connection and table name
    private $conn;
    private $table_name = "delivery";
  
    // columns
    public $id;
    public $date_issued;
    public $date_done;
    public $total_price;
    public $payment_code;
    public $car_id;
    public $user_id;
    public $flower_id;
  
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
        $this->date_issued=htmlspecialchars(strip_tags($this->date_issued));
        $this->date_done=htmlspecialchars(strip_tags($this->date_done));
        $this->total_price=htmlspecialchars(strip_tags($this->total_price));
        $this->payment_code=htmlspecialchars(strip_tags($this->payment_code));
        $this->car_id=htmlspecialchars(strip_tags($this->car_id));
        $this->user_id=htmlspecialchars(strip_tags($this->user_id));
        $this->flower_id=htmlspecialchars(strip_tags($this->flower_id));
      
        // bind values
        $stmt->bindParam(":date_issued", $this->date_issued);
        $stmt->bindParam(":date_done", $this->date_done);
        $stmt->bindParam(":total_price", $this->total_price);
        $stmt->bindParam(":payment_code", $this->payment_code);
        $stmt->bindParam(":car_id", $this->car_id);
        $stmt->bindParam(":user_id", $this->user_id);
        $stmt->bindParam(":flower_id", $this->flower_id);
    }

    function create(){
        // query to insert record
        $query = "INSERT INTO " . $this->table_name . " SET 
                date_issued=FROM_UNIXTIME(:date_issued), date_done=FROM_UNIXTIME(:date_done), total_price=:total_price, 
                payment_code=:payment_code, car_id=:car_id, user_id=:user_id, flower_id=:flower_id";
      
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
        $this->date_issued = $row['date_issued'];
        $this->date_done = $row['date_done'];
        $this->total_price = $row['total_price'];
        $this->payment_code = $row['payment_code'];
        $this->car_id = $row['car_id'];
        $this->user_id = $row['user_id'];
        $this->flower_id = $row['flower_id'];

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

    function getUserDeliveries($user_id){
        $query = "SELECT delivery.date_issued, delivery.date_done, delivery.total_price, 
                        users.username, users.email, cars.name as carName, cars.model as carModel, flowers.name as flowerName
                FROM delivery 
                INNER JOIN users ON users.id=delivery.user_id
                INNER JOIN cars ON cars.id=delivery.car_id
                INNER JOIN flowers ON flowers.id=delivery.flower_id
                WHERE users.id = ?
                ORDER BY delivery.date_issued";
        
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