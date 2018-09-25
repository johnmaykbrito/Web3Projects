<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Desenvolvimento de Sistemas Web III</title>
        <script type="text/javascript" src="index.js"></script>
    </head>
    <body>
        <div id="main">
            <h1>Upload Your Images</h1> 
            <form action="Exemplo8" method="post" enctype="multipart/form-data" accept-charset="UTF-8">
                <label>File:</label> <input name="images" id="images" type="file" multiple="multiple"/>
                <input type="submit" id="btn" value="Upload" />
                <div id="response"></div>
            <progress id="progress" value="0" max="100"></progress>
            <ul id="image-list">  

            </ul>
            </form>
        </div>
    </body>
</html>
