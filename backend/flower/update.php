<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../tables/flowers.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
$flowers = new Flower($db);

if(isset($_POST["flower_id"])){
    $flowers->id = $_POST["flower_id"];
    $flowers->name = $_POST["flower_name"];
    $flowers->price = $_POST["flower_price"];

    if($flowers->update()){
        http_response_code(200); // 200 ok
        echo json_encode(array("message" => "Flower was updated."));
    }
    else{
        http_response_code(503); // 503 service unavailable
        echo json_encode(array("message" => "Unable to update flower."));
    }
}
else{
    http_response_code(400); // Bad request code
    echo json_encode(array("message" => "Missing mandatory fields"));
}
?>