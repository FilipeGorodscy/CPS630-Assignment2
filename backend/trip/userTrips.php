<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../tables/trips.php';

$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : die("No user id provided");

$database = new Database();
$db = $database->getConnection();

$trip = new Trips($db);

$stmt = $trip->getUserTrips($user_id);

$result = array();
$result["trips"]=array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    extract($row);
    $res_item=array(
        "date" => $date,
        "source" => $source,
        "destination" => $destination,
        "distance" => $distance,
        "price" => $price,
        "username" => $username,
        "useremail" => $email,
        "car_name" => $name,
        "car_model" => html_entity_decode($model)
    );
    array_push($result["trips"], $res_item);
}

// set response code - 200 OK
http_response_code(200);
  
// encode data in a json format
echo json_encode($result);

?>