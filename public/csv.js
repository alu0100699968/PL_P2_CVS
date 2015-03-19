"use strict";


$(document).ready(function() {

  var template = document.getElementById("template").src;
  var table;
  $.get(template, table, function (t) {
    table = t;
  });

   $("#buttona").click(function() {
      if (window.localStorage) localStorage.original = document.getElementById("original").value;
      $.get("/commaSeparated", { input: document.getElementById("original").value }, function (data) {
         $("#finaltable").html(_.template(table, { rows: data.rows }));
      }, 'json');
   });
 });

window.onload = function() {
  if (window.localStorage && localStorage.original) {
    document.getElementById("original").value = localStorage.original;
  }
};
