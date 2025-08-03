// The Scroll to Top Button
class ToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
      <a href="#" aria-label="Scroll to top" title="Scroll to top">
        <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 15L12 9L18 15" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      `;
  }
}
customElements.define("to-top", ToTop);

const toTop = document
  .querySelector("body")
  .appendChild(document.createElement("to-top"));
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
