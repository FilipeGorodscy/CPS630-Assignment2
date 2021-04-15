<?php
class Grocery_Order{
  
    // database connection and table name
    private $conn;
    private $table_name = "grocery_order";
  
    // columns
    public $id;
    public $date_issued;
    public $date_done;
    public $total_price;
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

    function read_one(){
        $query = "SELECT grocery_order.date_issued, grocery_order.date_done, grocery_order.total_price, users.username
                FROM grocery_order 
                INNER JOIN users ON users.id=grocery_order.user_id
                WHERE grocery_order.id = ?";
        
        // prepare query
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->id=htmlspecialchars(strip_tags($this->id));
      
        // bind id of record to delete
        $stmt->bindParam(1, $this->id);
      
        // execute query
        $stmt->execute();
        return $stmt;
    }

    function read_user_orders($user_id){
        $query = "SELECT grocery_order.id, grocery_order.date_issued, grocery_order.date_done, grocery_order.total_price, users.username
                FROM grocery_order 
                INNER JOIN users ON users.id=grocery_order.user_id
                WHERE grocery_order.user_id = ?";
        
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

    function sanitize_and_bind(&$stmt){
        // sanitize
        $this->date_issued=htmlspecialchars(strip_tags($this->date_issued));
        $this->date_done=htmlspecialchars(strip_tags($this->date_done));
        $this->total_price=htmlspecialchars(strip_tags($this->total_price));
        $this->user_id=htmlspecialchars(strip_tags($this->user_id));
      
        // bind values
        $stmt->bindParam(":date_issued", $this->date_issued);
        $stmt->bindParam(":date_done", $this->date_done);
        $stmt->bindParam(":total_price", $this->total_price);
        $stmt->bindParam(":user_id", $this->user_id);
    }

    function create(){
        // query to insert record
        $query = "INSERT INTO " . $this->table_name . " SET 
                date_issued=FROM_UNIXTIME(:date_issued), date_done=FROM_UNIXTIME(:date_done), 
                total_price=:total_price, user_id=:user_id";
      
        // prepare query
        $stmt = $this->conn->prepare($query);
        $this->sanitize_and_bind($stmt);

        // execute query
        if($stmt->execute()){
            return $this->conn->lastInsertId();;
        }
        return -1;
    }
}
?>