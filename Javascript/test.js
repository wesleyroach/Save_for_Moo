// testing checkbox to update from pending to approved
$("#update").click(function() {
  $("table")
    .find("input[type=checkbox]")
    .each(function() {
      if ($(this).is(":checked") == true) {
        var txt_value = $("#line-no").val();
        if (txt_value != "") {
          $(this)
            .closest("tr")
            .find("td.cn")
            .text(txt_value);
        }
      }
    });
});
