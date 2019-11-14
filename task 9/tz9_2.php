<html>
<head><style>
.cards{
	display:flex;
	flex-direction: row;
	flex-wrap:wrap;
	width:700px;
	margin-left:auto;
	margin-right:auto;
}
.card{
	width:250px;
	border:1px solid red;
	border-radius:5px;
	display:flex;
	margin:10px;
}
.menu {
	display:block;
	width:700px;
	margin-left:auto;
	margin-right:auto;
}
.title{
	font-size:20px;
	font-weight:bold;
}
.price{
	color:green;
}
.description{
	display:flex;
	flex-direction:column;
}
.price{
	flex-grow:1;
}
.year{
	font-weight:bold;
	font-size:18px;
}
</style></head>
<body>

<div class="cards">

</div>
<div class="menu">
<a href="tz9_2.php">Home</a>|<a href="tz9_2.php?maker=Toyota">Toyota</a>|<a href="tz9_2.php?maker=BMW">BMW</a>|<a href="tz9_2.php?maker=Audi">Audi</a>|<a href="tz9_2.php?maker=Lada">Lada</a></div>

<div class="menu">
<a href="tz9_2.php?year=old">Old cars (More than 7 years)</a>|<a href="tz9_2.php?price=expensive">Expensive cars (more than 20.000$)</a></div>

<?php
$cars = [
["maker"=>"Toyota","model"=>"Carina","year"=>2001,"price"=>20000,"image"=>"https://www.auto-data.net/images/f38/Toyota-Carina-E-T19.jpg"],
["maker"=>"Toyota","model"=>"Camry","year"=>2005,"price"=>30000,"image"=>"https://www.cstatic-images.com/car-pictures/xl/usb30toc021c0101.png"],
["maker"=>"Audi","model"=>"A8","year"=>1986,"price"=>12000,"image"=>"http://www.theautohost.com/_contentPages/vehicleContentPages/audi/2017/A8%20L/images/2017-Audi-A8L-exterior-grille.jpg"],

["maker"=>"Audi","model"=>"A6","year"=>2005,"price"=>30000,"image"=>"https://www.cstatic-images.com/car-pictures/xl/USC60AUC021B021001.png"],

["maker"=>"BMW","model"=>"X5","year"=>2007,"price"=>17000,"image"=>"https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/all-models/x-series/x5/2015/at-a-glance/x5_at-a-glance_stagepresentation.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1452864075065.jpg"],
["maker"=>"BMW","model"=>"X5","year"=>2015,"price"=>19000,"image"=>"https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/all-models/x-series/x5/2015/at-a-glance/x5_at-a-glance_stagepresentation.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1452864075065.jpg"],
["maker"=>"BMW","model"=>"Model 7","year"=>2014,"price"=>22000,"image"=>"https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/all-models/x-series/x5/2015/at-a-glance/x5_at-a-glance_stagepresentation.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1452864075065.jpg"],
["maker"=>"Lada","model"=>"Granta","year"=>2017,"price"=>7000,"image"=>"http://www.kolesa.ru/uploads/2017/06/Lada-Granta-restyle-front1-1600x0-c-default.jpg"]
];
if(isset($_REQUEST['maker'])){
if($_REQUEST['maker']=="Toyota"){
	for($x=0;$x<8;$x++){
		if($cars[$x]['maker']=="Toyota"){
		$file=$cars[$x]["image"];
		$title=$cars[$x]["maker"] ." ". $cars[$x]["model"];	
		$gol="";
		$gol=$gol . '<div class="card"><img style="width:100px;height:100px;" src="'.$file.'">.<div style="display: flex;flex-direction: column;"><div class="title">'.$title.'</div> . <div class="price">'.$cars[$x]["price"].'</div><div>'.(2019-$cars[$x]["year"]).'.years</div></div></div>';
			echo '<div class="cards">'.$gol.'</div>';
		}	
	}
}elseif($_REQUEST['maker']=="Audi"){
	for($x=0;$x<8;$x++){
		if($cars[$x]['maker']=="Audi"){
		$file=$cars[$x]["image"];
		$title=$cars[$x]["maker"] ." ". $cars[$x]["model"];
			$gol="";
		$gol=$gol . '<div class="card"><img style="width:100px;height:100px;" src="'.$file.'">.<div style="display: flex;flex-direction: column;"><div class="title">'.$title.'</div>.<div class="price">'.$cars[$x]["price"].'</div><div>'.(2019-$cars[$x]["year"]).'.years</div></div></div>.';
		echo '<div class="cards">'.$gol.'</div>';
		}	
	}
}elseif($_REQUEST['maker']=="BMW"){
	for($x=0;$x<8;$x++){
		if($cars[$x]['maker']=="BMW"){
		$file=$cars[$x]["image"];
		$title=$cars[$x]["maker"] ." ". $cars[$x]["model"];
			$gol="";
		$gol=$gol . '<div class="card"><img style="width:100px;height:100px;" src="'.$file.'">.<div style="display: flex;flex-direction: column;"><div class="title">'.$title.'</div>.<div class="price">'.$cars[$x]["price"].'</div><div>'.(2019-$cars[$x]["year"]).'.years</div></div></div>';
		echo '<div class="cards">'.$gol.'</div>';
			
		}	
	}
}elseif($_REQUEST['maker']=="Lada"){
	for($x=0;$x<8;$x++){
		if($cars[$x]['maker']=="Lada"){
			$file=$cars[$x]["image"];
		$title=$cars[$x]["maker"] ." ". $cars[$x]["model"];
			$gol="";
		$gol=$gol . '<div class="card"><img style="width:100px;height:100px;" src="'.$file.'">.<div style="display: flex;flex-direction: column;"><div class="title">'.$title.'</div>.<div class="price">'.$cars[$x]["price"].'</div><div>'.(2019-$cars[$x]["year"]).'.years</div></div></div>';
		echo '<div class="cards">'.$gol.'</div>';
		}	
	}
}

}
else{
if(isset($_REQUEST['year'])){
	for($x=0;$x<8;$x++){
		if($cars[$x]['year']<2012){
	$gol="";
			$file=$cars[$x]["image"];
		$title=$cars[$x]["maker"] ." ". $cars[$x]["model"];
		$gol=$gol . '<div class="card"><img style="width:100px;height:100px;" src="'.$file.'">.<div style="display: flex;flex-direction: column;"><div class="title">'.$title.'</div>.<div class="price">'.$cars[$x]["price"].'</div><div>'.(2019-$cars[$x]["year"]).'.years</div></div></div>';
		echo '<div class="cards">'.$gol.'</div>';
		}	
	}
}

if(isset($_REQUEST['price'])){
	for($x=0;$x<8;$x++){
		if($cars[$x]['price']>20000){
			$file=$cars[$x]["image"];
		$title=$cars[$x]["maker"] ." ". $cars[$x]["model"];
			$gol="";
		$gol=$gol . '<div class="card"><img style="width:100px;height:100px;" src="'.$file.'">.<div style="display: flex;flex-direction: column;"><div class="title">'.$title.'</div>.<div class="price">'.$cars[$x]["price"].'</div><div>'.(2019-$cars[$x]["year"]).'.years</div></div></div>';
		echo '<div class="cards">'.$gol.'</div>';
		}	
	}
}}

?>