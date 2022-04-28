function openTab(evt, eventName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(eventName).style.display = "flex";
    document.getElementById(eventName).style.flexDirection = "row";
    document.getElementById(eventName).style.flexWrap = "wrap";
    document.getElementById(eventName).style.justifyContent = "center";
    

    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  //modals
  $(".popup").click(function(event){
    if (event.target == $(".popup")){
      $(".popup").css("display","none")
      document.getElementsByTagName('body').style.filter='blur(0px)';
    }
  })