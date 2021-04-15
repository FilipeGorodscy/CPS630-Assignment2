<?php

/* API documentation 

GET method. Required parameter:
    id - {a valid grocery order id}


Sample return JSON:
{
    "date_issued": "2021-04-11 14:00:00",
    "date_done": "2021-04-11 14:30:00",
    "total_price": "20.99",
    "username": "ssorra",
    "items": [
        {
            "id": "1",
            "name": "Eggs",
            "img_path": "images/groceries/eggs.jpg",
            "price": "2.99"
        },
        {
            "id": "2",
            "name": "Milk",
            "img_path": "images/groceries/milk.jpg",
            "price": "4.99"
        }
    ]
}

*/

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../tables/grocery_details.php';
include_once '../tables/grocery_order.php';

$id = isset($_GET['id']) ? $_GET['id'] : die("No grocery order id provided");

$database = new Database();
$db = $database->getConnection();

$grocery_order = new Grocery_Order($db);
$grocery_details = new Grocery_Details($db);


$grocery_order->id = $id;
$stmt= $grocery_order->read_one();

if($stmt->rowCount() > 0){
    $res = array();
    
    extract($stmt->fetch(PDO::FETCH_ASSOC));
    $res["date_issued"] = $date_issued;
    $res["date_done"] = $date_done;
    $res["total_price"] = $total_price;
    $res["username"] = $username;
    $res["items"] = $grocery_details->get_items($id);

    http_response_code(200);
    echo json_encode($res);
}
else{
    http_response_code(404);
    echo json_encode(array("message" => "Unable to read order with id " . $id));
}

?>