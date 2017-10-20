$(function(){
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
