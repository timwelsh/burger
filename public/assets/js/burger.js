// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", function (event) {
      event.preventDefault();
      const newBurger = $("#burger").val().trim();
      console.log(newBurger)
      const newBurgerData = {
          burger_name: newBurger
      };
      $.ajax("/", {
          type: "POST",
          data: newBurgerData,
      }).then(function () {
          console.log("Added a burger");
          location.reload();
      });
   });
  
    // $(".delete-burger").on("click", function(event) {
    //   const id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "DELETE"
    //   }).then(() => {
    //     console.log("deleted burger ", id);
    //     // Reload the page to get the updated list
    //     location.reload();
    //   });
    // });
  });
  