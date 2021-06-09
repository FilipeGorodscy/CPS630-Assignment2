<?php
/* API Documentation

Method: Get
Required parameter: "keyword" - (representing the flower name)

RETURN:
    HttpCode: <code>

    JSON on success:
    {
        "records": [
            {
                "id": "1",
                "name": "Spring Flower",
                "store_code": "1",
                "img_path": "images/flowers/spring.jpg",
                "price": "12.99"
            },
            ...
        ]
    }

    JSON on failure:
    {
        "message": "<message text>"
    }

*/

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
include_once '../config/database.php';
include_once '../tables/flowers.php';
  
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
$flower = new Flower($db);

$keyword = isset($_GET["keyword"]) ? $_GET["keyword"] : "";

$stmt = $flower->search($keyword);
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){
  
    $flowers_arr=array();
    $flowers_arr["records"]=array();
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        // this will make $row['name'] to just $name only
        extract($row);
  
        $flower_item=array(
            "id" => $id,
            "name" => $name,
            "store_code" => $store_code,
            "img_path" => $img_path,
            "price" => $price
        );
  
        array_push($flowers_arr["records"], $flower_item);
    }

    http_response_code(200);
    echo json_encode($flowers_arr);
}
  
else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no flowers found
    echo json_encode(
        array("message" => "No flowers found.")
    );
}
?>