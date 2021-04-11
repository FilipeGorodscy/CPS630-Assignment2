<?php

/* API Documentation

Method: Get

RETURN:
    HttpCode: <code>

    JSON on success:
    {
        "records": [
            {
                "id": "1",
                "service_name": "Ride",
                "description": "With our ride service you can get to where you want faster and safer"
            },
            {
                "id": "2",
                "service_name": "Delivery",
                "description": "With our delivery service you can enjoy our finest choices of flower/coffee"
            },
            {
                "id": "3",
                "service_name": "Ride & Delivery",
                "description": "With ride&delivery you can take a ride as well as pick your choice of items"
            }
        ]
    }
    
    JSON on failure:
    {
        "message": "<message text>"
    }

*/

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../tables/services.php';

$database = new Database();
$db = $database->getConnection();

$service = new Services($db);

// query all cars
$stmt = $service->read();
$num = $stmt->rowCount();
  
// check if more than 0 record found
if($num > 0){

    $services_arr=array();
    $services_arr["records"]=array();
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        // this will make $row['name'] to just $name only
        extract($row);
  
        $service_item=array(
            "id" => $id,
            "service_name" => $service_name,
            "description" => $description
        );
  
        array_push($services_arr["records"], $service_item);
    }
  
    // set response code - 200 OK
    http_response_code(200);
  
    // encode data in a json format
    echo json_encode($services_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);
    echo json_encode(array("message" => "No services found."));
}

?>