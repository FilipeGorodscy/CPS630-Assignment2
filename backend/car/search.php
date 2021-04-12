<?php

/* API Documentation

Method: Get
Required parameter: "keyword" - (representing the car name)

RETURN:
    HttpCode: <code>

    JSON on success:
    {
        "records": [
            {
                "id": "1",
                "name": "Audi",
                "model": "Audi A6",
                "img_path": "images/cars/audi.jpg",
                "code": 1,
                "available": 1
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
include_once '../tables/cars.php';
  
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
$car = new Car($db);

$keyword = isset($_GET["keyword"]) ? $_GET["keyword"] : "";

$stmt = $car->search($keyword);
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){
  
    $cars_arr=array();
    $cars_arr["records"]=array();
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        // this will make $row['name'] to just $name only
        extract($row);
  
        $car_item=array(
            "id" => $id,
            "name" => $name,
            "model" => html_entity_decode($model),
            "img_path" => $img_path,
            "code" => $code,
            "available" => $available, // 0 => Not Available; 1 => Available
            "price" => $price,
            "year" => $year,
        );
  
        array_push($cars_arr["records"], $car_item);
    }

    http_response_code(200);
    echo json_encode($cars_arr);
}
  
else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no cars found
    echo json_encode(
        array("message" => "No cars found.")
    );
}
?>