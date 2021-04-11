<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../tables/users.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->username) && !empty($data->password)
    && !empty($data->email) && !empty($data->phone) && !empty($data->address) ){

    $user->username = $data->username; 
    $user->password = $data->password;
    $user->email = $data->email; 
    $user->phone = $data->phone; 
    $user->address = $data->address;

    if($user->create()){
        http_response_code(200);
        echo json_encode(array("message" => "User was created successfully."));
    }
    else{
        http_response_code(503); // unavailable service code
        echo json_encode(array("message" => "Unable to create user."));
    }
}
else{
    http_response_code(400); // Bad request code
    echo json_encode(array("message" => "Missing mandatory fields"));
}

?>