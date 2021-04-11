<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../tables/trips.php';

$database = new Database();
$db = $database->getConnection();

$trips = new Trips($db);

// acquire the posted data
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->source) && !empty($data->destination)
    && !empty($data->distance) && !empty($data->price)
    && !empty($data->car_id) && !empty($data->user_id)){
    $trips->source = $data->source;
    $trips->destination = $data->destination;
    $trips->distance = $data->distance;
    $trips->price = $data->price;
    $trips->car_id = $data->car_id;
    $trips->user_id = $data->user_id;
    
    // Extract the date and time into a timestamp
    $timestamp = strtotime($data->date . $data->time .' America/Toronto');
    $trips->date = $timestamp;

    try {
        if($trips->create()){
            http_response_code(200);
            echo json_encode(array("message" => "Trip was created successfully."));
        }
        else{
            http_response_code(503); // unavailable service code
            echo json_encode(array("message" => "Unable to create trip record."));
        }
    }
    catch (Exception $e){
        http_response_code(503); // unavailable service code
        echo json_encode(array("message" => $e->getMessage()));
    }
    
}
else{
    http_response_code(400); // Bad request code
    echo json_encode(array("message" => "Unable to create trip record. Data is incomplete."));
}

?>