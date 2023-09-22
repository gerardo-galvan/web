<?php
$startYear = 2013;
$thisYear = date('Y');
if ($thisYear > $startYear) {
	$thisYear = date('y');
	$dates = "$startYear&ndash;$thisYear";
} else {
	$dates = $startYear;
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Troubleshooting Errors</title>
<link href="../../styles/exercises.css" rel="stylesheet" type="text/css">
</head>

<body>
<h1>Dealing with PHP Errors</h1>
<p>This chapter deals with common PHP error messages, and how to deal with them. The content of this page will never be displayed because there's a deliberate syntax error in the PHP code.</p>
<p>© <?php echo $dates; ?> Hansel and Petal</p>
</body>
</html>