<?php

/* API documentation 

GET method. Required parameter:
    user_id - {a valid user id from user table}


Sample return JSON:
{
    "records": [
        {
            "date": "2021-03-08 07:20:00",
            "source": "35 Soudan Avenue, Toronto, ON, Canada",
            "destination": "2800 Yonge Street, Toronto, ON, Canada",
            "distance": "1.80",
            "price": "1.80",
            "username": "ssorra",
            "useremail": "seit-sorra@hotmail.com",
            "car_name": "Audi update",
            "car_model": "Audi-RS3"
        },
        {
            "date": "2021-03-09 18:02:00",
            "source": "4000 Yonge Street, North York, ON, Canada",
            "destination": "2300 Yonge Street, Toronto, ON, Canada",
            "distance": "4.10",
            "price": "4.06",
            "username": "ssorra",
            "useremail": "seit-sorra@hotmail.com",
            "car_name": "Audi update",
            "car_model": "Audi-RS3"
        }
    ]
}

*/

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../tables/trips.php';


$database = new Database();
$db = $database->getConnection();

$trip = new Trips($db);

$stmt = $trip->read();
$num = $stmt->rowCount();

$result = array();
$result["records"]=array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    extract($row);
    $res_item=array(
        "date" => $date,
        "source" => $source,
        "destination" => $destination,
        "distance" => $distance,
        "price" => $price,
        "username" => $username,
        "useremail" => $email,
        "car_name" => $name,
        "car_model" => html_entity_decode($model)
    );
    array_push($result["records"], $res_item);
}

// set response code - 200 OK
http_response_code(200);
  
// encode data in a json format
echo json_encode($result);

?>