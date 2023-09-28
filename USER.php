<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">
    </head>
    <style>
        .Banned {
            color: red
        }
        body{
            font-size: 20px
        }
    </style>
    <body style="font-family: 'Poppins'">
        <form method="post">
            <input type="text" name="USERNAME" autocomplete="off" placeholder="Username">
            <input type="submit" value="Check">
            <button onclick="location.reload()">Refresh</button>
            <a href=chat.openai.com>CHATGPT</a>
        </form>
        <?php
            if ($_GET['ACCESSTOKEN'] == "ACCESSTRUE") {

            } else {
                echo "<span class='Banned'>you're not allowed here dumbass!</span><br>";
            }

            echo "";
        ?>
    </body>
</html>