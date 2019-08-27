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
    dataRef.ref("/Elly").push({
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
dataRef.ref("/Elly").on(
  "child_added",
  function(childSnapshot) {
    //  Update the displayed bank balance

    var tryIt = childSnapshot.val().bankBalance;
    $("#routeE").text(tryIt);

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
      $("#ex-tableE").append(content);
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
    dataRef.ref("/William").push({
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
dataRef.ref("/William").on(
  "child_added",
  function(childSnapshot) {
    //  Update the displayed bank balance

    var tryIt = childSnapshot.val().bankBalance;
    $("#routeW").text(tryIt);

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
      $("#ex-tableW").append(content);
    }
  });
});
