<?php

include_once 'grocery_item.php';

class Grocery_Details{
  
    // database connection and table name
    private $conn;
    private $table_name = "grocery_details";
  
    // columns
    public $id;
    public $grocery_order_id;
    public $grocery_item_id;
  
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    function create(){
        // query to insert record
        $query = "INSERT INTO " . $this->table_name . " SET 
            grocery_order_id=:grocery_order_id, grocery_item_id=:grocery_item_id";
      
        // prepare query
        $stmt = $this->conn->prepare($query);
      
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->grocery_order_id));
        $this->img_path=htmlspecialchars(strip_tags($this->grocery_item_id));
      
        // bind values
        $stmt->bindParam(":grocery_order_id", $this->grocery_order_id);
        $stmt->bindParam(":grocery_item_id", $this->grocery_item_id);
      
        // execute query
        if($stmt->execute()){
            return true;
        }
        return false;
    }

    function read_one(){
        $query = "SELECT * FROM grocery_details WHERE id = ?";
        
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

    function get_items($order_id){
        $res = array();

        $grocery_item = new Grocery_Item($this->conn);

        $query = "SELECT * FROM grocery_details WHERE grocery_order_id = ?";

        $stmt = $this->conn->prepare($query);
        $this->id=htmlspecialchars(strip_tags($order_id));
        $stmt->bindParam(1, $order_id);
        $stmt->execute();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

            extract($row);

            $grocery_item->id = $grocery_item_id;
            $grocery_item->read_one();
            $item=array(
                "id" => $grocery_item->id,
                "name" => $grocery_item->name,
                "img_path" => $grocery_item->img_path,
                "price"=> $grocery_item->price
            );
      
            array_push($res, $item);
        }
        return $res;
    }
}
?>