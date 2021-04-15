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
                "name": "banana",
                "img_path": "images/grocery_item/banana.jpg",
                "price": "1.99"
            },
            ...
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
include_once '../tables/grocery_item.php';

$database = new Database();
$db = $database->getConnection();

$item = new Grocery_Item($db);

// query all cars
$stmt = $item->read();
$num = $stmt->rowCount();
  
// check if more than 0 record found
if($num > 0){

    $items_arr=array();
    $items_arr["records"]=array();
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        // this will make $row['name'] to just $name only
        extract($row);
  
        $item=array(
            "id" => $id,
            "name" => $name,
            "img_path" => $img_path,
            "price" => $price
        );
  
        array_push($items_arr["records"], $item);
    }
  
    // set response code - 200 OK
    http_response_code(200);
  
    // encode data in a json format
    echo json_encode($items_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);
  
    echo json_encode(array("message" => "No grocery items found."));
}

?>