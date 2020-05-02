
$(document).ready(function() {
   $('#welcomeMessage').removeAttr('hidden');
  /** Get the text node inside the object with id welcomeMessage */
  var welcomeMessage = $("#welcomeMessage");
  var message = welcomeMessage.text();
  /** Clear the text inside that object */
  $("#welcomeMessage").empty();
  /** Reinsert the text as a list of characters */
  for (var i = 0; i < message.length; i++) {
  	welcomeMessage.append("<li>" + message[i] + "</li>");
  }
  /* Declare the li elements of the welcomeMessage object as being the character variable */
  var character = $("li");

  /** For each li reinserted on welcomeMessage object give it a random start position */
  character.each(function() {
    var height = screen.availHeight;
    var width = screen.availWidth;
  	var x = Math.random() * width - width/2;
  	var y = Math.random() * height - height/2;
  	$(this).hide().css({"transform": "translate(" + x + "px," + y + "px)"});
  });

  /** Define ease transition for all css elements with time of three seconds */
  character.css({"transition":"all 3s ease"});
  /** Set when text should start fading in */
  setTimeout(function() {
    character.each(function() {
    	$(this).fadeIn(1000).css({"transform": "translate(0, 0)"});
    });
  }, 100);
  /** Make welcomeMessage object fade out */
  setTimeout(function() {
    welcomeMessage.fadeOut(1000);
  }, 2000);
  /** Replace current location to the landing page */
  setTimeout(function() {
    window.location.replace("html/landingPage.html");
  }, 2500);
});
