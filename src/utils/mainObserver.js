export { mainObserver };

function mainObserver() {
  const ro = new ResizeObserver(() => {
    // Check if scrollbar is visible
    const hasScroll = document.documentElement.scrollHeight > document.documentElement.clientHeight;

    // Element variables
    const html = document.documentElement;
    const lightToggle = document.querySelector("#lightToggle");

    // Remove HTML full height to avoid background cropping during overlay shifts
    if (hasScroll) {
      html.classList.remove("h-100");
      lightToggle.style.marginBottom = "";
    } else {
      html.classList.add("h-100");
      lightToggle.style.marginBottom = "40px";
    }
  });

  const main = document.querySelector("main");
  ro.observe(main);
}
