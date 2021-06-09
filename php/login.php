<?php
include "./datas.php";
//获取传入的数据
$username=$_POST["username"];
$pwd=$_POST["pwd"];

//编写SQL语句
$sql="select * from userdatas where username='$username' and pass='$pwd'";
//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
//判断当前结果集中是否有数据
if($row=mysqli_fetch_assoc($result)){
    echo "1";
}else{
    echo "0";
}
//关闭数据库连接
mysqli_close($link);
?>