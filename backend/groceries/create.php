<?php
/* API documentation 

This is a sample JSON that this API accepts:

{
    "date_issued": "April 11, 2021 14:00",
    "date_done": "April 11, 2021 14:30",
    "total_price": 20.99,
    "user_id": 1,
    "items": [
        <grocery_item_id>,
        <grocery_item_id>,
        ...
    ]
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
include_once '../tables/grocery_details.php';
include_once '../tables/grocery_order.php';

$database = new Database();
$db = $database->getConnection();

$grocery_order = new Grocery_Order($db);

// acquire the posted data
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->user_id) && !empty($data->items) ){

    $grocery_order->date_issued = strtotime($data->date_issued .' America/Toronto');
    $grocery_order->date_done = strtotime($data->date_done .' America/Toronto');
    $grocery_order->total_price = $data->total_price;
    $grocery_order->user_id = $data->user_id;

    try {
        $order_id = $grocery_order->create();
        if($order_id != -1 ){
            $grocery_details = new Grocery_Details($db);

            foreach($data->items as $item_id) {
                $grocery_details->grocery_order_id = $order_id;
                $grocery_details->grocery_item_id = $item_id;
                $grocery_details->create();
            }

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