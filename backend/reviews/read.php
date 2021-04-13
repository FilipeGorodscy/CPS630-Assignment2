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
                "name": "Matthew",
                "rating": 5,
                "description": "It was awesome!",
                "created_at": "01/01/2021"
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
include_once '../tables/reviews.php';

$database = new Database();
$db = $database->getConnection();

$review = new Review($db);

// query all reviews
$stmt = $review->read();
$num = $stmt->rowCount();
  
// check if more than 0 record found
if($num > 0){

    $reviews_arr=array();
    $reviews_arr["records"]=array();
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        // this will make $row['name'] to just $name only
        extract($row);
  
        $review_item=array(
            "id" => $id,
            "name" => $name,
            "rating" => $rating,
            "description" => $description,
            "created_at" => $created_at
        );
  
        array_push($reviews_arr["records"], $review_item);
    }
  
    // set response code - 200 OK
    http_response_code(200);
  
    // encode data in a json format
    echo json_encode($reviews_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no reviews found
    echo json_encode(array("message" => "No reviews found."));
}

?>