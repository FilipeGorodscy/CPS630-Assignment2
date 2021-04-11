<?php

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