$(document).ready(function () {
    if ($("#test_case_auth_headers").val() == "") { $('#header_table').hide(); };
    $("#test_case_auth_headers").change( function () {
        if ($("#test_case_auth_headers").val() == "") { $('#header_table').hide(); }
        else { $('#header_table').show(); };
        var textField = $(this),
          headers = textField.val().split('||'),
          table = $('#header_table tbody'),
          iterator,
          row;
        table.empty();
        for (iterator = 0; iterator < headers.length; iterator += 1) {
              row = $('<tr><td>' + headers[iterator] + '</td></tr>');
              table.append(row);
          }
        });
});