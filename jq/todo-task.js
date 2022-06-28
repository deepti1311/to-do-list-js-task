$("#form").submit(function (event) {
  event.preventDefault();

  let name = $("#name").val();

  if ($("#name").val() != "") {
    $("#displayArea").append(
      "<tr><td>" +
        name +
        "</td><td>" +
        ' <button type="button" id="done_btn" class="DONE">DONE</button>  <button type="button" class="rem" id="B1">DELETE</button> <button type="button"  id="undo_btn" class="edit" id="B1">UNDO</button>' +
        "</td><td class='mark'></td></tr>"
    );
  }

  $(".DONE").click(function () {
    $(this).parent().siblings(".mark").html("&#9989");

    $(this).siblings(".rem").prop("disabled", true);
  });

  $(".edit").click(function () {
    $(this).parent().siblings(".mark").html("&#10060");

    $(this).siblings(".rem").prop("disabled", false);

    $(".rem").click(function () {
      var row_count = list.rows.length;
      if (row_count > 2) {
        $(this).parent().parent().remove();
      }
    });
  });
});
