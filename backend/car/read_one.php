<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
include_once '../config/database.php';
include_once '../tables/cars.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
$car = new Car($db);
  
// set ID property of record to read
$car->id = isset($_GET['id']) ? $_GET['id'] : die("No id provided");

if($car->readOne()){
    $car_array=array(
        "id" => $car->id,
        "name" => $car->name,
        "model" => html_entity_decode($car->model),
        "img_path" => $car->img_path,
        "code" => $car->code,
        "available" => $car->available // 0 => Not Available; 1 => Available
    );

    // set response code - 200 OK
    http_response_code(200);
    echo json_encode($car_array);
}
else{
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user product does not exist
    echo json_encode(array("message" => "Car with id " . $car->id . " does not exist."));
}
?>