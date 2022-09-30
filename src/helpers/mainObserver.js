export { mainObserver };

function mainObserver(toggle, element) {
  const ro = new ResizeObserver(() => {
    // Check if scrollbar is visible
    const hasScroll = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    // Remove HTML full height to avoid background cropping during overlay shifts
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
