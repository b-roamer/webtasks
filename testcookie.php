<?php
setcookie("user", "ME", time()+3600, "/");
?>

<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<?php

if(!isset($_COOKIE["user"])) {
    echo "NO COOKIE";
}
else {
    echo "COOKIE IS ".$_COOKIE["user"]; 
}
?>
</body>
</html>

