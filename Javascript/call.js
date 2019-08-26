// on button click, load table of Louise jobs completed
$("#submit-jobs").on("click", function(event) {
    event.preventDefault();
    firebase.initializeApp(firebaseConfig);
    var dataRef = firebase.database();
    
    dataRef.ref('/Louise').on('child_added', function (snapshot) {
      var row = $('<tr>');
  
      var jobPrint = childSnapshot.val().category;
      var datePrint = childSnapshot.val().date;
      var taskStatusPrint = childSnapshot.val().taskStatus;
      var valuePrint=childSnapshot.val().jobValue;
    
  
      // row.html(name + role + start + rate)
      row.append($('<td>' + jobPrint + '</td>'));
      row.append($('<td>' + datePrint + '</td>'));
      row.append($('<td>' + taskStatusPrint + '</td>'));
      row.append($('<td>' + valuePrint + '</td>'));
      // row.append(col);
  ​
      $('#tableBody').append(row);
    });
  });