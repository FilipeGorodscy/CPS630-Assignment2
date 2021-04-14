<?php

/* API Documentation

This api endpoint expects the following:

POST Form data with the following parameters:

"car_name" <text>
"car_model" <text>
"user_image" <file>

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
include_once '../tables/cars.php';

$database = new Database();
$db = $database->getConnection();

$car = new Car($db);

$car_name = $car_model = "";
$car_price = $car_year = 0;
/* if(isset($_POST["car_name"])){
    $car_name = $_POST["car_name"];
    $car_model = $_POST["car_model"];
    $car_price = $_POST["car_price"];
    $car_year = $_POST["car_year"];
} */
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->car_name) && !empty($data->car_model)){
    $car->name = $data->car_name;
    $car->model =$data->car_model;
    $car->price =$data->car_price;
    $car->year = $data->car_year;

    $file = "";
    if(isset($_FILES["user_image"])){
        $file = $_FILES["user_image"];
        $car->upload_image($file);
        $car->img_path = 'images/cars/' . $file['name'];
    }
    // Hard coded values for now
    $car->code = 1;
    $car->available = 1;

    if($car->create()){
        http_response_code(200);
        echo json_encode(array("message" => "Car was created successfully."));
    }
    else{
        http_response_code(503); // unavailable service code
        echo json_encode(array("message" => "Unable to create car."));
    }
}
else{
    http_response_code(400); // Bad request code
    echo json_encode(array("message" => "Missing mandatory fields"));
}

?>