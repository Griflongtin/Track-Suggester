function choosing(rubyRails, phpDrupal, javaAndroid, cssDesign, cNet) {
  this.rubyRails = 0;
  this.phpDrupal = 0;
  this.javaAndroid = 0;
  this.cssDesign = 0;
  this.cNet = 0;
}

choosing.prototype.rubyRailsCounter = function() {
  this.rubyRails += 1;
}

choosing.prototype.phpDrupalCounter = function() {
  this.phpDrupal += 1;
}

choosing.prototype.javaAndroidCounter = function() {
  this.javaAndroid += 1;
}

choosing.prototype.cssDesignCounter = function() {
  this.cssDesign += 1;
}

choosing.prototype.cNetCounter = function() {
  this.cNet += 1;
}

$(function(){



  $("form button").click(function(event) {
    event.preventDefault();
    var user1 = new choosing();
    user1.rubyRails = 0;
    user1.phpDrupal = 0;
    user1.javaAndroid = 0;
    user1.cssDesign = 0;
    user1.cNet = 0;

    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var answer4 = parseInt($("#question4").val());
    var answer5 = parseInt($("#question5").val());
    var answer6 = parseInt($("#question6").val());


    if (answer1 === 1){
      user1.phpDrupalCounter();
    } else if (answer1 === 2) {
      user1.cssDesignCounter();
    } else if (answer1 === 3) {
      user1.cNetCounter();
      user1.javaAndroidCounter();
    }
    if (answer2 === 1){
      user1.cssDesignCounter();
    } else if (answer2 === 2) {
      user1.phpDrupalCounter();
    } else if (answer2 === 3) {
      user1.javaAndroidCounter();
      user1.rubyRailsCounter();
    }
    if (answer3 === 1){
      user1.javaAndroidCounter();
    } else if (answer3 === 2) {
      user1.rubyRailsCounter();
      user1.phpDrupalCounter();
    } else if (answer3 === 3) {
      user1.cNetCounter();
    }
    if (answer4 === 1){
      user1.javaAndroidCounter();
      user1.rubyRailsCounter();
    } else if (answer4 === 2) {
      user1.cssDesignCounter();
      user1.cNetCounter();
    } else if (answer4 === 3) {
    }
    if (answer5 === 1){
      user1.phpDrupalCounter();
    } else if (answer5 === 2) {
      user1.rubyRailsCounter();
    } else if (answer5 === 3) {
      user1.cNetCounter();
      user1.javaAndroidCounter();
    }
    if (answer6 === 1){
      user1.phpDrupalCounter();
    } else if (answer6 === 2) {
      user1.cssDesignCounter();
    } else if (answer6 === 3) {
      user1.cNetCounter();
      user1.rubyRailsCounter();
    }
    console.log(user1);

    if (user1.rubyRails > user1.phpDrupal && user1.rubyRails > user1.javaAndroid && user1.rubyRails > user1.cssDesign && user1.rubyRails > user1.cNet) {
      $("#output").text("<p>You should take a Ruby/Rails track!</p>")
    } else if (user1.phpDrupal > user1.rubyRails && user1.phpDrupal > user1.javaAndroid && user1.phpDrupal > user1.cssDesign && user1.phpDrupal > user1.cNet) {
      $("#output").text("<p>You should take a PHP/Drupal track!</p>")
    } else if (user1.javaAndroid > user1.phpDrupal && user1.javaAndroid > user1.rubyRails && user1.javaAndroid > user1.cssDesign && user1.javaAndroid > user1.cNet) {
      $("#output").text("<p>You should take a java/Android track!</p>")
    } else if (user1.cssDesign > user1.phpDrupal && user1.cssDesign > user1.javaAndroid && user1.cssDesign > user1.rubyRails && user1.cssDesign > user1.cNet) {
      $("#output").text("<p>You should take a css/Design track!</p>")
    } else if (user1.cNet > user1.phpDrupal && user1.cNet > user1.javaAndroid && user1.cNet > user1.cssDesign && user1.cNet > user1.rubyRails) {
      $("#output").text("<p>You should take a C#/.NET track!</p>")
    }

  });



  $("button#home-btn").click(function(){
    $("#home-tab").show();
    $("#rubyrails-tab").hide();
    $("#phpdrupal-tab").hide();
    $("#javaandroid-tab").hide();
    $("#cssdesign-tab").hide();
    $("#cnet-tab").hide();
  });
  $("button#rubyrails-btn").click(function(){
    $("#home-tab").hide();
    $("#rubyrails-tab").show();
    $("#phpDrupal-tab").hide();
    $("#javaandroid-tab").hide();
    $("#cssDesign-tab").hide();
    $("#cNet-tab").hide();
  });
  $("button#phpdrupal-btn").click(function(){
    $("#home-tab").hide();
    $("#rubyrails-tab".hide();
    $("#phpdrupal-tab").show();
    $("#javaandroid-tab").hide();
    $("#cssdesign-tab").hide();
    $("#cNet-tab").hide();
  });
  $("button#javaandroid-btn").click(function(){
    $("#home-tab").hide();
    $("#rubyrails-tab").hide();
    $("#phpdrupal-tab").hide();
    $("#javaandroid-tab").show();
    $("#cssdesign-tab").hide();
    $("#cNet-tab").hide();
  });
  $("button#cssdesign-btn").click(function(){
    $("#home-tab").hide();
    $("#rubyrails-tab").hide();
    $("#phpdrupal-tab").hide();
    $("#javaandroid-tab").hide();
    $("#cssDesign-tab").show();
    $("#cNet-tab").hide();
  });
  $("button#cNet-btn").click(function(){
    $("#home-tab").hide();
    $("#rubyRails-tab").hide();
    $("#phpdrupal-tab").hide();
    $("#javaAndroid-tab").hide();
    $("#cssdesign-tab").hide();
    $("#cNet-tab").show();
  });













});
