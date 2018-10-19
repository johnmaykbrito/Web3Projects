<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="index.js"></script>
        <link rel="stylesheet" type="text/css" href="index.css" />
        <title>Damas</title>
    </head>
    <body onResize="drawGame()">
        <canvas id="board">
            <span id="no_html5">Your Browser Does Not Support HTML5's Canvas Feature. Please Try Again Using Either Chrome Or Safari.</span>
        </canvas>
        <div id="score_card"></div>
        <footer></footer>
        <script type="text/javascript">
            initializeGame();
        </script>
    </body>
</html>