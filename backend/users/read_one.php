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

$found = false;
  
// Check if user_id was requested 
if(isset($_GET['id'])){
    $user->id = $_GET['id'];
    if($user->readOne()){
        $found = true;
    }
}
// Check if username was requested
else if(isset($_GET['username'])){
    $user->username = $_GET['username'];
    if($user->username_exists()){
        $found = true;
    }
}

if($found){
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
    echo json_encode(array("message" => "Unable to find requested user."));
}
?>