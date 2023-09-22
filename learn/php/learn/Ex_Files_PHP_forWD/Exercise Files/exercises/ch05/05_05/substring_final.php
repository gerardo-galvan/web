<?php
$original = 'color_Calla_Lilies';
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Substring functions</title>
<link href="../../styles/exercises.css" rel="stylesheet" type="text/css">
</head>

<body>
<h1>Finding and Extracting a Substring</h1>
<p>The position of "color" is <?php echo strpos($original, 'color_'); ?>.</p>
<p>The position of "Calla" is <?php echo strpos($original, 'Calla'); ?>.</p>
<?php if (strpos($original, 'color_') === 0) { ?>
<p>The original string begins with "color_".</p>
<?php } else { ?>
<p>The original string does not begin with "color_".</p>
<?php } 
echo substr($original, 6);
?>
</body>
</html>