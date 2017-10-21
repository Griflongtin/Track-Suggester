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
    } else if (answer4 === 3) {
      user1.cNetCounter();
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

    if (user1.rubyRails > user1.phpDrupal && user1.rubyRails > user1.javaAndroid && user1.rubyRails > user1.cssDesign && user1.rubyRails > user1.cNet) {
      $("#output").text("You should take a Ruby/Rails track!")
    } else if (user1.phpDrupal > user1.rubyRails && user1.phpDrupal > user1.javaAndroid && user1.phpDrupal > user1.cssDesign && user1.phpDrupal > user1.cNet) {
      $("#output").text("You should take a PHP/Drupal track!")
    } else if (user1.javaAndroid > user1.phpDrupal && user1.javaAndroid > user1.rubyRails && user1.javaAndroid > user1.cssDesign && user1.javaAndroid > user1.cNet) {
      $("#output").text("You should take a java/Android track!")
    } else if (user1.cssDesign > user1.phpDrupal && user1.cssDesign > user1.javaAndroid && user1.cssDesign > user1.rubyRails && user1.cssDesign > user1.cNet) {
      $("#output").text("You should take a css/Design track!")
    } else if (user1.cNet > user1.phpDrupal && user1.cNet > user1.javaAndroid && user1.cNet > user1.cssDesign && user1.cNet > user1.rubyRails) {
      $("#output").text("You should take a C#/.NET track!")
    }

  });

  $("button#home-btn").click(function(){
    $("#home-tab").show();
    $("#rubyrails-tab").hide();
    $("#php-drupal-tab").hide();
    $("#java-android-tab").hide();
    $("#css-design-tab").hide();
    $("#cnet-tab").hide();
  });
  $("button#rubyrails-btn").click(function(){
    $("#home-tab").hide();
    $("#rubyrails-tab").show();
    $("#php-drupal-tab").hide();
    $("#java-android-tab").hide();
    $("#css-design-tab").hide();
    $("#cnet-tab").hide();
  });
  $("button#php-drupal-btn").click(function(){
    $("#home-tab").hide();
    $("#rubyrails-tab").hide();
    $("#php-drupal-tab").show();
    $("#java-android-tab").hide();
    $("#css-design-tab").hide();
    $("#cnet-tab").hide();
  });
  $("button#java-android-btn").click(function(){
    $("#home-tab").hide();
    $("#rubyrails-tab").hide();
    $("#php-drupal-tab").hide();
    $("#java-android-tab").show();
    $("#css-design-tab").hide();
    $("#cnet-tab").hide();
  });
  $("button#css-design-btn").click(function(){
    $("#home-tab").hide();
    $("#rubyrails-tab").hide();
    $("#php-drupal-tab").hide();
    $("#java-android-tab").hide();
    $("#css-design-tab").show();
    $("#cnet-tab").hide();
  });
  $("button#cnet-btn").click(function(){
    $("#home-tab").hide();
    $("#rubyrails-tab").hide();
    $("#php-drupal-tab").hide();
    $("#java-android-tab").hide();
    $("#css-design-tab").hide();
    $("#cnet-tab").show();
  });
});
