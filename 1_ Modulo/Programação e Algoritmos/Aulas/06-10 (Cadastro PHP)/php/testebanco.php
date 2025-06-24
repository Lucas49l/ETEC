<?php
$servername = "localhost";
$username = "username";
$password = "password";
$db =

$sql =
$conn = mysqli_connect($servername, $username, $password);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

?>