<?php

/* API documentation 

GET method. Required parameter:
    user_id - {a valid user id from user table}


Sample return JSON:
{
    "deliveries": [
        {
            "date_issued": "2021-04-11 00:00:00",
            "date_done": "2021-04-11 00:00:00",
            "total_price": "20.99",
            "username": "ssorra",
            "email": "seit-sorra@hotmail.com",
            "carName": "Audi update",
            "carModel": "Audi-RS3",
            "flowerName": "Spring Flower"
        },
        {
            "date_issued": "2021-04-11 14:00:00",
            "date_done": "2021-04-11 14:30:00",
            "total_price": "20.99",
            "username": "ssorra",
            "email": "seit-sorra@hotmail.com",
            "carName": "Audi update",
            "carModel": "Audi-RS3",
            "flowerName": "Spring Flower"
        }
    ]
}

*/

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../tables/delivery.php';

$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : die("No user id provided");

$database = new Database();
$db = $database->getConnection();

$delivery = new Delivery($db);

$stmt = $delivery->getUserDeliveries($user_id);

$result = array();
$result["deliveries"]=array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    extract($row);
    $res_item=array(
        "date_issued" => $date_issued,
        "date_done" => $date_done,
        "total_price" => $total_price,
        "username" => $username,
        "email" => $email,
        "carName" => $carName,
        "carModel" => $carModel,
        "flowerName" => $flowerName
    );
    array_push($result["deliveries"], $res_item);
}

// set response code - 200 OK
http_response_code(200);
  
// encode data in a json format
echo json_encode($result);

?>