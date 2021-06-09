<?php
include "./datas.php";
$username=$_POST["username"];
$pwd=$_POST["pwd"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$sql1="SELECT * FROM userdatas WHERE username='$username'";
$sql2="INSERT INTO userdatas(username,pass,email,phone) VALUES('$username','$pwd','$email','$phone')";
$result=mysqli_query($link,$sql1);
if($row=mysqli_fetch_assoc($result)){
    echo "重复";
}else{
    mysqli_query($link,$sql2);
    echo "成功";
    
}
mysqli_close($link);
?>