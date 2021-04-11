<?php

/* API documentation 

GET method. Required parameter:
    user_id - {a valid user id from user table}

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