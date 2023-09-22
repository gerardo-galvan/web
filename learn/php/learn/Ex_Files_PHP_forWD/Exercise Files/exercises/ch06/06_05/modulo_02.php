<?php
$number = 5;
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Modulo Division</title>
<link href="../../styles/exercises.css" rel="stylesheet" type="text/css">
</head>

<body>
<h1>Finding Every Fourth Item</h1>
<p><?php if ($number % 4 === 0) {
	echo "$number is zero or equally divisible by 4";
} else {
	echo "$number is not equally divisible by 4";
} ?></p>
</body>
</html>