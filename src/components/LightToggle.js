export { LightToggle };

function LightToggle({ toggleRef, toggleIcon, handleTheme }) {
  return (
    <button
      className="lightToggle btn btn-sm"
      aria-label="Dark/light mode toggle"
      ref={toggleRef}
      onClick={handleTheme}
    >
      <i className={`fa-solid fa-${toggleIcon}`}></i>
    </button>
  );
}
