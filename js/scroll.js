function handleDOMContentLoaded() {
  let links = document.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", handleClick);
  });
}

function handleClick(event) {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
