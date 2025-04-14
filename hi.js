function changeBgColor() { 
    document.body.style.backgroundColor = ""; //change the color to white
    document.body.style.backgroundImage = ""; //change the image to white

    document.body.style.backgroundColor = "lightblue"; 
}
function changeBgColor2() { 
    document.body.style.backgroundColor = ""; //change the color to white
    document.body.style.backgroundImage = ""; //change the image to white

    document.body.style.backgroundColor = "rgba(196, 255, 87, 0.924)"; 
}
function showMessage() { 
    alert("Hello! Welcome to my website."); 
    }
    
    function changeBgColor3() { 
        document.body.style.backgroundColor = ""; 
        document.body.style.backgroundImage = ""; 

        document.body.style.backgroundImage = "url('HAS.jpg')";
        document.body.style.backgroundSize = "cover"; // cover the whole screen
        document.body.style.backgroundRepeat = "no-repeat"; // Prevents many image
        document.body.style.backgroundPosition = "center"; // image go to center
    }

    function hi() { 
        document.body.style.backgroundColor = ""; 
        document.body.style.backgroundImage = ""; 
    }

    
    
    function changeBgColorUser(){
        let color = document.getElementById("colorInput").value.toLowerCase();

        if (color === "yellow") {
            document.body.style.backgroundColor = "rgba(249, 255, 87, 0.92)";
        } 
        else if (color === "green") {
            document.body.style.backgroundColor = "rgba(87, 255, 107, 0.92)";
        } 
        else if (color === "red") {
            document.body.style.backgroundColor = "rgba(255, 87, 87, 0.92)";
        } 
        else if (color === "black") {
            document.body.style.backgroundColor = "rgb(19, 17, 17)";
        } 
        
        else {
            document.body.style.backgroundColor = "white";
            alert("sorry, dont have the color."); 
        }
    }

    function f() { 
        document.getElementById("message").innerText = "you liked this picture";
    }
    
    function d() { 
        document.getElementById("message").innerText = "You disliked this picture";
    }