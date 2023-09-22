<?php
$startYear = 2013;
$thisYear = date('Y')
if ($thisYear > $startYear) {
	$thisYear = date('y');
	$dates = "$startYear&ndash;$thisYear';
} else {
	$dates = $startYear;
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Syntax Errors</title>
<link href="../../styles/exercises.css" rel="stylesheet" type="text/css">
</head>

<body>
<h1>Tracking Down Parse Errors</h1>
<p>This page contains a number of common PHP syntax messages. The most common problems are:</p>
<ul>
    <li>Forgetting the semicolon at the end of a statement</li>
	<li>Mismatched quotes</li>
	<li>A missing curly brace or parenthesis</li>
</ul>
<p>The content of this page won't be displayed until the syntax errors in the PHP code are fixed.</p>
<p>© <?php echo $dates; ?> Hansel and Petal</p>
</body>
</html>