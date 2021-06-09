<?php

/* API documentation 

GET method. Required parameter:
    user_id - {a valid user id from user table}


Sample return JSON:
{
    "groceries": [
        {
            "date_issued": "2021-04-11 14:00:00",
            "date_done": "2021-04-11 14:30:00",
            "total_price": "20.99",
            "username": "test",
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
                },
                {
                    "id": "2",
                    "name": "Milk",
                    "img_path": "images/groceries/milk.jpg",
                    "price": "4.99"
                }
            ]
        },
        {
            "date_issued": "2021-04-11 14:00:00",
            "date_done": "2021-04-11 14:30:00",
            "total_price": "20.99",
            "username": "test",
            "items": [
                {
                    "id": "3",
                    "name": "Bread",
                    "img_path": "images/groceries/bread.jpg",
                    "price": "5.99"
                }
            ]
        }
    ]
}

*/

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../tables/grocery_details.php';
include_once '../tables/grocery_order.php';

$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : die("No user id provided");

$database = new Database();
$db = $database->getConnection();

$grocery_order = new Grocery_Order($db);
$grocery_details = new Grocery_Details($db);

$stmt = $grocery_order->read_user_orders($user_id);

$result = array();
$result["groceries"] = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    extract($row);

    $res_item=array(
        "date_issued" => $date_issued,
        "date_done" => $date_done,
        "total_price" => $total_price,
        "username" => $username,
        "items" => $grocery_details->get_items($id)
    );
    array_push($result["groceries"], $res_item);
}

// set response code - 200 OK
http_response_code(200);
  
// encode data in a json format
echo json_encode($result);

?>