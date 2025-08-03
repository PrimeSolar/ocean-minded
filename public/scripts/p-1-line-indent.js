// This script is designed for conditional formatting of web components.

const p = document.getElementsByTagName("p");
for (let a of p) {
  if (
    !a.classList.contains("card-text") &&
    !a.classList.contains("testimonial") &&
    a.closest(".center") == null
  ) {
    a.innerHTML = "<indent></indent>" + a.innerHTML;
  }
}
