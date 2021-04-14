<?php

/* API Documentation

This api endpoint expects the following:

POST Form data with the following parameters:

"name" <text>
"review" <number>
"description" <text>

RETURN:
    HttpCode: <code>
    
    JSON:
    {
        "message": "<message text>"
    }
*/

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../tables/reviews.php';

$database = new Database();
$db = $database->getConnection();

$review = new Review($db);

$description = "";
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->name) && !empty($data->rating)){
    $review->name = $data->name;
    $review->rating =$data->rating;

    if(!empty($data->description))
    {
        $review->description = $data->description;
    }
    else
    {
        $review->description = $description;
    }

    if($review->create()){
        http_response_code(200);
        echo json_encode(array("message" => "Review was created successfully."));
    }
    else{
        http_response_code(503); // unavailable service code
        echo json_encode(array("message" => "Unable to create review."));
    }
}
else{
    http_response_code(400); // Bad request code
    echo json_encode(array("message" => "Missing mandatory fields"));
}

?>