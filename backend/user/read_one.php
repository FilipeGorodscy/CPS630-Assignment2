<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
include_once '../config/database.php';
include_once '../tables/users.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
$user = new User($db);
  
// set ID property of record to read
$user->id = isset($_GET['id']) ? $_GET['id'] : die("No id provided");

if($user->readOne()){
    $user_array=array(
        "id" => $user->id,
        "username" => $user->username,
        "password" => $user->password,
        "email" => $user->email,
        "phone" => $user->phone,
        "address" => $user->address,
        "created_at" => $user->created_at
    );

    // set response code - 200 OK
    http_response_code(200);
    echo json_encode($user_array);
}
else{
    // set response code - 404 Not found
    http_response_code(404);
    echo json_encode(array("message" => "User with id " . $user->id . " does not exist."));
}
?>