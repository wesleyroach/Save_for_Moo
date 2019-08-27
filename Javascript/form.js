// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDSn98JjgG6gMfP4lULo69UiPLnS3evuOw",
  authDomain: "holidayjobs-b6609.firebaseapp.com",
  databaseURL: "https://holidayjobs-b6609.firebaseio.com",
  projectId: "holidayjobs-b6609",
  storageBucket: "",
  messagingSenderId: "519296540409",
  appId: "1:519296540409:web:82bc38c737981140"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var dataRef = firebase.database();

// Initial Values
var name = "";
var category = "";
var taskStatus = "";
var date = "";
var jobInput = 0;
var jobValue = parseInt(jobInput);
var bankInput = 0;
var bankBalance = parseInt(bankInput);
var categoryE = "";
var categoryW = "";
var taskStatusE = "";
var taskStatusW = "";
var dateE = "";
var dateW = "";
var jobValueE = 0;
var jobValueW = 0;
var jobChangeW = 0;
var jobChangeW = 0;
var bankBalanceE = 0;
var bankBalanceW = 0;

// Capture Button Click
$(document).ready(function() {
  $("#submitButton").on("click", function(event) {
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    category = $("#category-input")
      .val()
      .trim();
    taskStatus = "Pending";
    date = $("#date-input")
      .val()
      .trim();
    jobChange = $("#jobValue-input")
      .val()
      .trim();
    jobValue = parseInt(jobChange);
    bankBalance = bankBalance + jobValue;

    // Code for the push
    dataRef.ref("/Louise").push({
      category: category,
      taskStatus: taskStatus,
      date: date,
      jobValue: jobValue,
      bankBalance: bankBalance,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });
});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.ref("/Louise").on(
  "child_added",
  function(childSnapshot) {
    //  Update the displayed bank balance

    var tryIt = childSnapshot.val().bankBalance;
    $("#route").text(tryIt);

    // Handle the errors
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
// on button click, load table of Louise jobs completed
$("#submit-jobs").on("click", function(event) {
  event.preventDefault();
  var database = firebase.database();
  database.ref("/Louise").once("value", function(childSnapshot) {
    if (childSnapshot.exists()) {
      var content = "";
      childSnapshot.forEach(function(data) {
        var val = data.val();
        content += "<tr>";
        content += "<td>" + val.category + "</td>";
        content += "<td>" + val.date + "</td>";
        content += "<td>" + val.taskStatus + "</td>";
        content += "<td>" + val.jobValue + "</td>";
        content += "</tr>";
      });
      $("#ex-table").append(content);
    }
  });
});
// ------------- END LOUISE FIREBASE --------------------
//  ---- START ELLY'S FIREBASE ------
// Capture Button Click
$(document).ready(function() {
  $("#submitButtonE").on("click", function(event) {
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    categoryE = $("#category-inputE")
      .val()
      .trim();
    taskStatusE = "Pending";
    dateE = $("#date-inputE")
      .val()
      .trim();
    jobChangeE = $("#jobValue-inputE")
      .val()
      .trim();
    jobValueE = parseInt(jobChangeE);
    bankBalanceE = bankBalanceE + jobValueE;

    // Code for the push
    dataRef.ref("/Elly").push({
      categoryE: categoryE,
      taskStatusE: taskStatusE,
      dateE: dateE,
      jobValueE: jobValueE,
      bankBalanceE: bankBalanceE,
      dateAddedE: firebase.database.ServerValue.TIMESTAMP
    });
  });
});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.ref("/Elly").on(
  "child_added",
  function(childSnapshot) {
    //  Update the displayed bank balance

    var tryItE = childSnapshot.val().bankBalanceE;
    $("#routeE").text(tryItE);

    // Handle the errors
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
// on button click, load table of Elly's jobs completed
$("#submit-jobsE").on("click", function(event) {
  event.preventDefault();
  var database = firebase.database();
  database.ref("/Elly").once("value", function(childSnapshot) {
    if (childSnapshot.exists()) {
      var contentE = "";
      childSnapshot.forEach(function(data) {
        var valE = data.val();
        contentE += "<tr>";
        contentE += "<td>" + valE.categoryE + "</td>";
        contentE += "<td>" + valE.dateE + "</td>";
        contentE += "<td>" + valE.taskStatusE + "</td>";
        contentE += "<td>" + valE.jobValueE + "</td>";
        contentE += "</tr>";
      });
      $("#ex-tableE").append(contentE);
    }
  });
});
// -------- END ELLY's FIREBASE -------------
//  ---- START WILLIAM'S FIREBASE ------
// Capture Button Click
$(document).ready(function() {
  $("#submitButtonW").on("click", function(event) {
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    categoryW = $("#category-inputW")
      .val()
      .trim();
    taskStatusW = "Pending";
    dateW = $("#date-inputW")
      .val()
      .trim();
    jobChangeW = $("#jobValue-inputW")
      .val()
      .trim();
    jobValueW = parseInt(jobChangeW);
    bankBalanceW = bankBalanceW + jobValueW;

    // Code for the push
    dataRef.ref("/William").push({
      categoryW: categoryW,
      taskStatusW: taskStatusW,
      dateW: dateW,
      jobValueW: jobValueW,
      bankBalanceW: bankBalanceW,
      dateAddedW: firebase.database.ServerValue.TIMESTAMP
    });
  });
});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.ref("/William").on(
  "child_added",
  function(childSnapshot) {
    //  Update the displayed bank balance

    var tryItW = childSnapshot.val().bankBalanceW;
    $("#routeW").text(tryItW);

    // Handle the errors
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
// on button click, load table of Williams jobs completed
$("#submit-jobsW").on("click", function(event) {
  event.preventDefault();
  var database = firebase.database();
  database.ref("/William").once("value", function(childSnapshot) {
    if (childSnapshot.exists()) {
      var contentW = "";
      childSnapshot.forEach(function(data) {
        var valW = data.val();
        contentW += "<tr>";
        contentW += "<td>" + valW.categoryW + "</td>";
        contentW += "<td>" + valW.dateW + "</td>";
        contentW += "<td>" + valW.taskStatusW + "</td>";
        contentW += "<td>" + valW.jobValueW + "</td>";
        contentW += "</tr>";
      });
      $("#ex-tableW").append(contentW);
    }
  });
});
