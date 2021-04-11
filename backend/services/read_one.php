<?php

/* API Documentation

Method: Get
Required parameter: "id" - (a valid service id)

RETURN:
    HttpCode: <code>

    JSON on success:
    {
        "id": "1",
        "service_name": "Ride",
        "description": "With our ride service you can get to where you want faster and safer"
    }
    
    JSON on failure:
    {
        "message": "<message text>"
    }

*/

// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
include_once '../config/database.php';
include_once '../tables/services.php';

// get database connection
$database = new Database();
$db = $database->getConnection();
  
$service = new Services($db);
  
// set ID property of record to read
$service->id = isset($_GET['id']) ? $_GET['id'] : die("No id provided");

if($service->readOne()){
    $service_array=array(
        "id" => $service->id,
        "service_name" => $service->service_name,
        "description" => $service->description
    );

    // set response code - 200 OK
    http_response_code(200);
    echo json_encode($service_array);
}
else{
    // set response code - 404 Not found
    http_response_code(404);
    echo json_encode(array("message" => "Service with id " . $service->id . " does not exist."));
}
?>