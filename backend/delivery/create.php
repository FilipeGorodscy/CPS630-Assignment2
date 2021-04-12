<?php
/* API documentation 

This is a sample JSON that this API accepts:

{
    "date_issued": "April 11, 2021 14:00",
    "date_done": "April 11, 2021 14:30",
    "total_price": 20.99,
    "car_id": 2,
    "user_id": 1,
    "flower_id": 1
}

RETURN:
    HttpCode: <code>
    
    JSON:
    {
        "message": "<message text>"
    }
*/


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../tables/delivery.php';

$database = new Database();
$db = $database->getConnection();

$delivery = new Delivery($db);

// acquire the posted data
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->date_issued) && !empty($data->date_done)
    && !empty($data->total_price) && !empty($data->car_id)
    && !empty($data->user_id) && !empty($data->flower_id)){

    $delivery->date_issued = strtotime($data->date_issued .' America/Toronto');
    $delivery->date_done = strtotime($data->date_done .' America/Toronto');
    $delivery->total_price = $data->total_price;
    $delivery->payment_code = 1; // hard coded value for now
    $delivery->car_id = $data->car_id;
    $delivery->user_id = $data->user_id;
    $delivery->flower_id = $data->flower_id;

    try {
        if($delivery->create()){
            http_response_code(200);
            echo json_encode(array("message" => "Delivery was created successfully."));
        }
        else{
            http_response_code(503); // unavailable service code
            echo json_encode(array("message" => "Unable to create delivery record."));
        }
    }
    catch (Exception $e){
        http_response_code(503); // unavailable service code
        echo json_encode(array("message" => $e->getMessage()));
    }
    
}
else{
    http_response_code(400); // Bad request code
    echo json_encode(array("message" => "Unable to create delivery record. Data is incomplete."));
}

?>