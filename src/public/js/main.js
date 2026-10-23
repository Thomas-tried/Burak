console.log("Basic frontend javascript file");

const swalBase = Swal.mixin({
  heightAuto: false, // fixes the white area at the bottom of the page
  scrollbarPadding: false, // stops the page from shifting sideways
});

function showError(text, title = "Oops...") {
  return swalBase.fire({ icon: "error", title, text });
}

function showWarning(text, title = "Warning") {
  return swalBase.fire({ icon: "warning", title, text });
}

function showSuccess(title, text = "") {
  return swalBase.fire({
    icon: "success",
    title,
    text,
    timer: 1500,
    showConfirmButton: false,
  });
}

$(document).on("click", ".logout-link", function (e) {
  e.preventDefault(); // stop the link from opening right away
  const url = $(this).attr("href");

  swalBase
    .fire({
      icon: "question",
      title: "Logout",
      text: "Do you really want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
    })
    .then((result) => {
      if (result.isConfirmed) {
        window.location.href = url;
      }
    });
});
