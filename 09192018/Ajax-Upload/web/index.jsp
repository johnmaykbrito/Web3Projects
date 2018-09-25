<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="UTF-8" />
        <title>Desenvolvimento de Sistemas Web III</title>
        <link rel="stylesheet" type="text/css" href="index.css" />
        <script type="text/javascript" src="index.js"></script>
    </head>
    <body>
        <div id="main">
            <h1>Upload Your Images</h1> 
            <form action="Exemplo8" method="post" enctype="multipart/form-data" accept-charset="UTF-8">
                <label>File:</label> <input name="images" id="images" type="file" multiple="multiple"/>
                <input type="submit" id="btn" value="Upload" />
            </form>
            <div id="response"></div>
            <progress style="color: blue;" id="progress" value="0" max="100"></progress>
            <ul id="image-list">  

            </ul>
        </div>
    </body>
</html>