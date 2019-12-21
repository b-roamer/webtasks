<html>
    <head>
        <link rel="stylesheet" href="test.css">
    </head>
    <body>

        <?php
        $books = [["id" => 0, "title" => "Abay Zholy", "author" => "Auezov", "categories" => ["biography", "drama"]],
                ["id" => 1, "title" => "Kokserek", "author" => "Auezov", "categories" => ["drama"]], 
                ["id" => 2, "title" => "Sherlock", "author" => "Doyle", "categories" => ["detective"]]];


        $cat = $_GET["category"];

        if ($cat == "biography")
        {
            echo "<h1>biography</h1><br>";
            echo $books[0]["title"];
            echo " - ";
            echo $books[0]["author"];
        }
        else if ($cat == "drama")
        echo "<h1>drama</h1><br>";
        echo $books[0]["title"];
        echo " - ";
        echo $books[0]["author"];
        echo "<br>";
        echo $books[1]["title"];
        echo " - ";
        echo $books[1]["author"];
        ?>

    </body>
</html>