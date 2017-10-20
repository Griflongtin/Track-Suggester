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
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var answer4 = parseInt($("#question4").val());
    var answer5 = parseInt($("#question5").val());
    var answer6 = parseInt($("#question6").val());


    if (answer1 === 1){
      user1.railsCounter();
    } else if (answer1 === 2) {
      user1.netCounter();
    } else if (answer1 === 3) {
      user1.androidCounter();
      user1.cCounter();
    }
    if (answer2 === 1){
      user1.netCounter();
    } else if (answer2 === 2) {
      user1.railsCounter();
    } else if (answer2 === 3) {
      user1.cCounter();
      user1.rubyCounter();
    }
    if (answer3 === 1){
      user1.cCounter();
    } else if (answer3 === 2) {
      user1.rubyCounter();
      user1.railsCounter();
    } else if (answer3 === 3) {
      user1.androidCounter();
    }
    if (answer4 === 1){
      user1.cCounter();
      user1.rubyCounter();
    } else if (answer4 === 2) {
      user1.netCounter();
      user1.androidCounter();
    } else if (answer4 === 3) {
    }
    if (answer5 === 1){
      user1.railsCounter();
    } else if (answer5 === 2) {
      user1.rubyCounter();
    } else if (answer5 === 3) {
      user1.androidCounter();
      user1.cCounter();
    }
    if (answer6 === 1){
      user1.railsCounter();
    } else if (answer6 === 2) {
      user1.netCounter();
    } else if (answer6 === 3) {
      user1.androidCounter();
      user1.rubyCounter();
    }
    console.log(user1)
  });



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
