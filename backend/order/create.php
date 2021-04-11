<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../tables/order.php';

$database = new Database();
$db = $database->getConnection();

$order = new Order($db);

// acquire the posted data
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->date_issued) && !empty($data->date_done) && !empty($data->total_price) && 
    !empty($data->payment_code) && !empty($data->car_id) && !empty($data->user_id)
    && !empty($data->flower_id)){
    
    ///TODO: Need to handle the date values properly
    $order->date_issued = $data->date_issued;
    $order->date_done = $data->date_done;
    $order->total_price = $data->total_price;
    $order->payment_code = $data->payment_code;
    $order->car_id = $data->car_id;
    $order->user_id = $data->user_id;
    $order->flower_id = $data->flower_id;

    if($order->create()){
        http_response_code(200);
        echo json_encode(array("message" => "Order was created successfully."));
    }
    else{
        http_response_code(503); // unavailable service code
        echo json_encode(array("message" => "Unable to create order record."));
    }
}
else{
    http_response_code(400); // Bad request code
    echo json_encode(array("message" => "Unable to create order record. Data is incomplete."));
}

?>