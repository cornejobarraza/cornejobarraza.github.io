export { mainObserver };

function mainObserver(toggle, element) {
  const ro = new ResizeObserver(() => {
    // Checks if scrollbar is visible and removes full height so background isn't cropped
    const hasScroll = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    if (hasScroll) {
      document.documentElement.classList.remove("h-100");
      toggle.style.marginBottom = "";
    } else {
      document.documentElement.classList.add("h-100");
      toggle.style.marginBottom = "40px";
    }
  });

  ro.observe(element);
}
