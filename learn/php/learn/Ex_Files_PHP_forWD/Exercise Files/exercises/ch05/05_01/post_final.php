<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>$_POST Array</title>
<link href="../../styles/exercises.css" rel="stylesheet" type="text/css">
</head>

<body>
<h1>Gathering Form Input: POST</h1>
<form method="post">
    <p>
        <label for="textfield">Text Field:</label>
        <input type="text" name="textfield" id="textfield">
    </p>
    <p>
        <label for="quantity">Number:</label>
        <input name="quantity" type="number" id="quantity" min="0" value="0">
    </p>
    <p>
        <label for="color">Color:</label>
        <select name="color" id="color">
            <option value="yellow" selected>Yellow</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
        </select>
    </p>
    <p>
        <input type="submit" name="order" id="order" value="Order">
        <input type="hidden" name="price" id="price" value="3">
    </p>
</form>
<pre>
<?php
if (isset($_POST['order'])) {
	print_r($_POST);
}
?>
</pre>
</body>
</html>