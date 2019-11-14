
<a href="tz_9_1.php?category=sport">Sport news</a> | <a href="tz_9_1.php?category=politics">Politic news</a><br/><br/>
<a href="tz_9_1.php?category=sport&format=json">Sport news (JSON)</a> | <a href="tz_9_1.php?category=politics&format=json">Politic news (JSON)</a><br/><br/>

<?php
$news = [
	"sport"=>["C. Ronaldo has scored three goals in last five matches","Golovkin has won match for title"],
	"politics"=>["Trump has cancelled his visit to North Corea, because of sanction","N. Nazarbayev has approved new version of alphabet"]
		];




$category = ["sport","politics"];

if(isset($_REQUEST['format'])){
	if($_REQUEST['category']==$category[0]){
			echo (json_encode($news[$category[0]]) ."<hr>");
		
	}

	if($_REQUEST['category']==$category[1]){
			echo json_encode($news[$category[1	]]) ."<hr>";
	}

}

elseif(isset($_REQUEST['category'])){
	if($_REQUEST['category']==$category[0]){
		foreach($news[$category[0]] as $i){
			echo $i."<hr>";
		}
	}

	if($_REQUEST['category']==$category[1]){
		foreach($news[$category[1]] as $i){
			echo $i."<hr>";
		}
	}
}

?>