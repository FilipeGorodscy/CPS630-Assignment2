<?php
/* API Documentation

Method: POST
Required parameter: "car_id" - (a valid car id)
Required parameter: "car_name" - (new car name value)
Required parameter: "car_model" - (new car model value)

RETURN:
    HttpCode: <code>

    JSON:
    {
        "message": "<message text>"
    }
*/

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../tables/cars.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
$car = new Car($db);

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->car_id)){
    $car->id = $data->car_id;
    $car->name = $data->car_name;
    $car->model =$data->car_model;
    $car->price =$data->car_price;
    $car->year = $data->car_year;

    if($car->update()){
        http_response_code(200); // 200 ok
        echo json_encode(array("message" => "Car was updated."));
    }
    else{
        http_response_code(503); // 503 service unavailable
        echo json_encode(array("message" => "Unable to update car."));
    }
}
else{
    http_response_code(400); // Bad request code
    echo json_encode(array("message" => "Missing mandatory fields"));
}

  

?>