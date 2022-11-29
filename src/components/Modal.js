export { Modal };

function Modal() {
  const handleLightsOn = () => {
    localStorage.setItem("keepLightMode", "yes");
    document.querySelector(".lightToggle").style.opacity = "1";
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("toggledLight");
    document.querySelector("#myModal").remove();
  };

  const handleLightsOff = () => {
    localStorage.setItem("keepLightMode", "no");
    document.querySelector(".lightToggle").style.opacity = "1";
    document.querySelector("#myModal").remove();
  };

  return (
    <div id="myModal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title fw-bold">Heads up!</h6>
          </div>
          <div className="modal-body">
            <p>Dark mode was applied by default.</p>
            <p className="mb-1">Click "Not nice" to turn light mode on 💡</p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-sm"
              data-bs-dismiss="modal"
              aria-label="Enable light mode"
              onClick={handleLightsOn}
            >
              Not nice
            </button>
            <button
              className="btn btn-sm"
              data-bs-dismiss="modal"
              aria-label="Keep dark mode"
              onClick={handleLightsOff}
            >
              Nice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
