<?php

/* API Documentation

Method: Get
Required parameter: "id" - (a valid flower id)

RETURN:
    HttpCode: <code>

    JSON on success:
    {
        "id": "1",
        "name": "Spring Flower",
        "store_code": "1",
        "img_path": "images/flowers/spring.jpg",
        "price": "12.99"
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
include_once '../tables/flowers.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
$flower = new Flower($db);
  
// set ID property of record to read
$flower->id = isset($_GET['id']) ? $_GET['id'] : die("No id provided");

if($flower->readOne()){
    $flower_array=array(
        "id" => $flower->id,
        "name" => $flower->name,
        "store_code" => $flower->store_code,
        "img_path" => $flower->img_path,
        "price" => $flower->price
    );

    // set response code - 200 OK
    http_response_code(200);
    echo json_encode($flower_array);
}
else{
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user product does not exist
    echo json_encode(array("message" => "flower with id " . $flower->id . " does not exist."));
}
?>