<?php
$message = '';
$db = new MySQLi('localhost', 'phpwebdes', 'lynda', 'hanselandpetal');
if ($db->connect_error) {
	$message = $db->connect_error;
} else {
	$message = 'Connection is OK';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Mixed Arrangements - Hansel and Petal</title>
<link rel="shortcut icon" href="../images/favicon.ico" type="image/x-icon">
<link href="../styles/handp.css" rel="stylesheet" type="text/css">
</head>

<body class="no_col_2">
<div id="site">
<?php require '../includes/pagetop.php'; ?>
    <div id="content">
        <div id="breadcrumbs" class="reset menu">
            <ul>
                <li><a href="../index.php">Home</a></li>
                <li><a href="../arrangements.php">Arrangements</a></li>
                <li>Mixed Arrangements</li>
            </ul>
        </div>
        <div id="col_1" role="main">
            <h1 class="inline_block">Mixed Arrangements</h1>
            <h2 class="h3 inline_block">Mixed bouquets with the bright colors of Spring</h2>
            <div class="cols lg_margin">
                <div class="col sub">
                    <p class="w210">Hansel &amp; Petal combines the highest quality 
                        flowers in unique, colorful arrangements and bouquets that are sure to 
                        make everyone happy.</p>
                    <p>Choose from our popular arrangements or <a href="../bouquet.php" class="btn alt inconsistent_mt"><span class="normalcase">Create Your Own</span> Custom Bouquet</a></p>
                </div>
                <div class="col main">
                    <div id="feature">
                        <div class="inner">
                            <p class="overlay large">Arrangements for Every Occasion</p>
                            <p class="overlay price">Starting at $39.95</p>
                            <img src="../images/710_arrangement_97881968.jpg" alt="Mixed Arrangement" height="300" width="710"> </div>
                    </div>
                </div>
            </div>
            <?php if ($message) {
				echo "<h2>$message</h2>";
			} ?>
            <div class="page open">
                <div class="section">
                    <ul class="reset tiles">
                        <li> <a href="details.php"> <img src="../images/200_arrangement_yellow_tulip.jpg" alt="Yellow Tulips" height="200" width="200">
                            <h3 class="h4">Burst of Yellow</h3>
                            <p class="reset">From $19.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_arrangement_163066655.jpg" alt="Mixed Mums" height="200" width="200">
                            <h3 class="h4">Polka Dot Pail</h3>
                            <p class="reset">From $25.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_tulips_daffodils_139756476.jpg" alt="Mixed Tulips" height="200" width="200">
                            <h3 class="h4">Green Thumb</h3>
                            <p class="reset">From $22.95 <b class="alert"><span>New!</span></b></p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_bouquet_watering_can_orange_163066621.jpg" alt="Watering Can with Mums" height="200" width="200">
                            <h3 class="h4">It's Raining Flowers</h3>
                            <p class="reset">From $19.95</p>
                            </a> </li>
                    </ul>
                </div>
                <div class="section">
                    <ul class="reset tiles">
                        <li> <a href="details.php"> <img src="../images/200_carnations_basket_92246977.jpg" alt="Basket of Carnations" height="200" width="200">
                            <h3 class="h4">Get Well Soon</h3>
                            <p class="reset">From $19.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_lilacs_tulips_157045915.jpg" alt="Tulips and Lilac" height="200" width="200">
                            <h3 class="h4">Bon Anniversaire!</h3>
                            <p class="reset">From $25.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_sunflowers_146748795.jpg" alt="Sunflowers" height="200" width="200">
                            <h3 class="h4">Brighten Any Day</h3>
                            <p class="reset">From $22.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_white_tulip_163199928.jpg" alt="White Tulips" height="200" width="200">
                            <h3 class="h4">Purely Beautiful</h3>
                            <p class="reset">From $19.95</p>
                            </a> </li>
                    </ul>
                </div>
                <div class="section">
                    <ul class="reset tiles">
                        <li> <a href="details.php"> <img src="../images/200_tulips_daffodils_153986115.jpg" alt="Mixed Tulips" height="200" width="200">
                            <h3 class="h4">Tea for Two</h3>
                            <p class="reset">From $15.95 <b class="alert"><span>New!</span></b></p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_arrangement_94972439.jpg" alt="Mixed Bouquet" height="200" width="200">
                            <h3 class="h4">Thinking of You</h3>
                            <p class="reset">From $35.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_irises_lilies_87478811.jpg" alt="Irises and Lilies" height="200" width="200">
                            <h3 class="h4">Simply Elegant</h3>
                            <p class="reset">From $22.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_pink_white_daisies_146806077.jpg" alt="Pink and White Mums" height="200" width="200">
                            <h3 class="h4">Blush and Bashful</h3>
                            <p class="reset">From $19.95</p>
                            </a> </li>
                    </ul>
                </div>
                <div class="section">
                    <ul class="reset tiles">
                        <li> <a href="details.php"> <img src="../images/200_tulips_watering_can_155465445.jpg" alt="Tulips in Water Can" height="200" width="200">
                            <h3 class="h4">Morning in the Garden</h3>
                            <p class="reset">From $29.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_birthday_163167595.jpg" alt="Orchid Bouquet" height="200" width="200">
                            <h3 class="h4">Orchids for the Table</h3>
                            <p class="reset">From $35.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_red_yellow_roses_119752732.jpg" alt="Red and Yellow Roses" height="200" width="200">
                            <h3 class="h4">Classic Rose Bouqet</h3>
                            <p class="reset">From $49.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_white_lily_pink_daisy_92493508.jpg" alt="Lilies and Roses" height="200" width="200">
                            <h3 class="h4">Evening Surprise</h3>
                            <p class="reset">From $29.95</p>
                            </a> </li>
                    </ul>
                </div>
                <div class="section">
                    <ul class="reset tiles">
                        <li> <a href="details.php"> <img src="../images/200_carnations_daisies_92007328.jpg" alt="Carnations and Daisies" height="200" width="200">
                            <h3 class="h4">Cheer Up!</h3>
                            <p class="reset">From $19.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_purple_daisy_rose104274224.jpg" alt="Daisy Bouquet" height="200" width="200">
                            <h3 class="h4">Purple Galore</h3>
                            <p class="reset">From $21.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_colorful_gerbera_119722776.jpg" alt="Mixed Gerbera Daisies" height="200" width="200">
                            <h3 class="h4">Dotted Daisies</h3>
                            <p class="reset">From $25.95 <b class="alert"><span>New!</span></b></p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_yellow_white_mums_147664285.jpg" alt="Daisy Mix" height="200" width="200">
                            <h3 class="h4">Patio Picnicking</h3>
                            <p class="reset">From $19.95</p>
                            </a> </li>
                    </ul>
                </div>
                <div class="section">
                    <ul class="reset tiles">
                        <li> <a href="details.php"> <img src="../images/200_tulips_daffodils2_153986183.jpg" alt="Mixed Tulips" height="200" width="200">
                            <h3 class="h4">Box of Happiness</h3>
                            <p class="reset">From $29.95 <b class="alert"><span>New!</span></b></p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_butterflies_120624479.jpg" alt="Daisies and Butterflies" height="200" width="200">
                            <h3 class="h4">Bounty of Butterflies</h3>
                            <p class="reset">From $25.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_tulips_irises_121357306.jpg" alt="Irises and Tulips" height="200" width="200">
                            <h3 class="h4">Mardi Gras Mambo</h3>
                            <p class="reset">From $29.95</p>
                            </a> </li>
                        <li> <a href="details.php"> <img src="../images/200_tulips_daffodils4_160232631.jpg" alt="Mixed Bulbs" height="200" width="200">
                            <h3 class="h4">Cascade of Color</h3>
                            <p class="reset">From $32.95</p>
                            </a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
<?php include '../includes/footer.php'; ?>
</div>
<script src="../js/jquery-1.10.2.min.js"></script> 
<script src="../js/scripts.js"></script>
</body>
</html>