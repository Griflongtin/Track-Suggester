function choosing(ruby, rails, c, net, android) {
  this.ruby = 0;
  this.rails = 0;
  this.c = 0;
  this.net = 0;
  this.android = 0;
}

choosing.prototype.rubyCounter = function() {
  this.ruby += 1;
}

choosing.prototype.railsCounter = function() {
  this.rails += 1;
}

choosing.prototype.cCounter = function() {
  this.c += 1;
}

choosing.prototype.netCounter = function() {
  this.net += 1;
}

choosing.prototype.androidCounter = function() {
  this.android += 1;
}




$(function(){

  var user1 = new choosing();
  user1.ruby = 0;
  user1.rails = 0;
  user1.c = 0;
  user1.net = 0;
  user1.android = 0;

  $("form button").click(function(event) {
    event.preventDefault();
    var answer1 = $("#question1").val();
    var answer2 = $("#question2").val();
    var answer3 = $("#question3").val();
    var answer4 = $("#question4").val();
    var answer4 = $("#question5").val();
    var answer4 = $("#question6").val();


    if (answer1 === 1){
      user1.railsCounter();
    } else if (answer1 === 2) {
      user1.netsCounter();
    } else if (answer1 === 3) {
      user1.androidCounter();
      user1.cCounter();
    }




  $("button#home-btn").click(function(){
    $("#home-tab").show();
    $("#ruby-tab").hide();
    $("#rails-tab").hide();
    $("#c-tab").hide();
    $("#net-tab").hide();
    $("#android-tab").hide();
  });
  $("button#ruby-btn").click(function(){
    $("#home-tab").hide();
    $("#ruby-tab").show();
    $("#rails-tab").hide();
    $("#c-tab").hide();
    $("#net-tab").hide();
    $("#android-tab").hide();
  });
  $("button#rails-btn").click(function(){
    $("#home-tab").hide();
    $("#ruby-tab").hide();
    $("#rails-tab").show();
    $("#c-tab").hide();
    $("#net-tab").hide();
    $("#android-tab").hide();
  });
  $("button#c-btn").click(function(){
    $("#home-tab").hide();
    $("#ruby-tab").hide();
    $("#rails-tab").hide();
    $("#c-tab").show();
    $("#net-tab").hide();
    $("#android-tab").hide();
  });
  $("button#net-btn").click(function(){
    $("#home-tab").hide();
    $("#ruby-tab").hide();
    $("#rails-tab").hide();
    $("#c-tab").hide();
    $("#net-tab").show();
    $("#android-tab").hide();
  });
  $("button#android-btn").click(function(){
    $("#home-tab").hide();
    $("#ruby-tab").hide();
    $("#rails-tab").hide();
    $("#c-tab").hide();
    $("#net-tab").hide();
    $("#android-tab").show();
  });












});
});
