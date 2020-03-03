// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".burger-form").on("submit", function(event) {
    event.preventDefault();
    const BurgerName = document.getElementById("burger-name").value;
    if (BurgerName === "") {
      alert("Type in a Burger!");
    } else {
      $.ajax({
        url: "/api/add",
        method: "POST",
        data: {
          burger_name: $("#burger-name")
            .val()
            .trim()
        }
      })
        .then(function(result) {
          alert("Burger added!");
          location.reload();
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });

  $(".eat-burger").on("click", function(event) {
    event.preventDefault();
    const burgerId = $(this).attr("data-id");
    $.ajax({
      url: "/api/update/" + burgerId,
      method: "PUT"
    })
      .then(function(result) {
        location.reload();
      })
      .catch(function(err) {
        console.log(err);
      });
  });
});
