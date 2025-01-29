function togglemenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function toggleside(event) {
  const listItem = event.target.closest("li");
  const subMenu = listItem.querySelector("ul");
  if (subMenu) {
    subMenu.classList.toggle("active");
  }
}
// -----------------------------------------for open profile box--------------------------------------------------
$(document).ready(function () {
  const $profileBtn = $("#profile_btn");
  const $proSub = $("#pro-sub");

  if ($profileBtn.length && $proSub.length) {
    // Toggle visibility when the profile button is clicked
    $profileBtn.on("click", function (event) {
      event.stopPropagation(); // Prevent the click from bubbling to the document
      if (
        $proSub.css("visibility") === "hidden" ||
        $proSub.css("visibility") === ""
      ) {
        $proSub.css("visibility", "visible");
      } else {
        $proSub.css("visibility", "hidden");
      }
    });

    // Hide #pro-sub when clicking anywhere else
    $(document).on("click", function () {
      $proSub.css("visibility", "hidden");
    });

    // Prevent hiding when clicking inside #pro-sub
    $proSub.on("click", function (event) {
      event.stopPropagation();
    });
  } else {
    console.error("Element with id 'profile_btn' or 'pro-sub' not found.");
  }
});

// $('.hd1').on('click', function(){
//     $(this).closest('.Q1').css('display:visibility')
// })

// Toggle the corresponding `.Q1` on `.hd1` click
$(".hd1").on("click", function (e) {
  e.preventDefault(); // Prevent default link behavior
  $(this).next(".Q1").slideToggle(); // Toggle visibility of the next `.Q1`
});
