<?php

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
if(isset($_POST["car_name"])){
    $car_name = $_POST["car_name"];
    $car_model = $_POST["car_model"];
}


if(!empty($car_name) && !empty($car_model)){
    $car->name = $car_name;
    $car->model = $car_model;

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