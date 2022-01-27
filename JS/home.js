function myFunction() {
  // document.getElementById("myNavbar");
    var x = document.getElementById("myNavbar");
    // if (x.lassName === "navbar") {
    //   x.className += " responsive";
    // } else {
    //   x.className = "navbar";
    // }
    if(x.className == "navbar"){
      x.className = x.className + " " + "responsive";
    }
    else{
      x.className = "navbar";
    }
  }