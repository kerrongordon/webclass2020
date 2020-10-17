<?php
if ($_POST) {

    $username = $_POST['username'];
    $usersubject = $_POST['usersubject'];
    $useremail = $_POST['useremail'];
    $usermessage = $_POST['usermessage'];

    $subject = $useremail . $usersubject;

    $to = "keronncharles16@gmail.com";
    // $subject = "My subject";
    // $txt = "Hello world!";
    // $headers = "From: webmaster@example.com" . "\r\n" .
    // "CC: somebodyelse@example.com";

    mail($to,$subject,$usermessage);
}
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> CONTACT US|WELCOME</title>
    <link rel="stylesheet" href="./CSS/contact.css">
    <link rel="stylesheet" href="./CSS/canvas.css">
    <link href="https://fonts.googleapis.com/css?family=Tangerine&display=swap" rel="stylesheet" />
    
</head>
<body>
    <div id="container2">
        <div id="page">
            <header>
                        <div class="container" >
                            <div id="branding">
                                <h1> <span class="highlight"> GRENADA</span> CADET CORPS<h1>
                            </div>
                        
                            <div class="nav">
                                <div class="label">
                                    <label class="header" for="toggle">&#9776;</label>
                                </div>
                                
                            
                                <input type="checkbox" id="toggle"/>
                            
                                <div class="menu">
                            
                                    <a href="index.html">Home</a>
                            
                                    <a href="about.html">About Us</a>
                            
                                    <a href="zones.html">Zones</a>
                            
                                    <a href="level.html">Star Level</a>
                            
                                    <a href="form.html">Can i join</a> 
                            
                                    <a href="contacts.php"><span>contact</span</a>
                            
                                </div>
                        
                            </div>  
                            
                        </div>
            </header>


          
      <main>
            <div class="container3">
    
              <form  id="form" action="contacts.php" method="POST">
    
                <label class="table" for="username">Your Name</label>
                <input class="input" type="text" name="username" id="username">
    
                <label for="usersubject">Subject</label>
                <input class="input" type="text" name="usersubject" id="usersubject">
    
                <label for="useremail">Your Email</label>
                <input class="input" type="email" name="useremail" id="useremail">
    
                <label for="usermessage">Your Message</label>
                <textarea class="input" name="usermessage" id="usermessage"></textarea>
    
                <button class="btn" type="submit" id="submit" >Send</button>
              </form>
              
            </div>
          </main>
        
            <canvas id="canvas2"></canvas>

            <script src="JAVACRIPT/canvas.js"></script>


        </div>
    </div>
</body>    