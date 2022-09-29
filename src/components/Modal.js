export { Modal };

function Modal({ modalRef, lightsOn, lightsOff }) {
  return (
    <div className="modal fade" ref={modalRef}>
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
              type="button"
              className="btn btn-sm"
              data-bs-dismiss="modal"
              aria-label="Enable light mode"
              onClick={lightsOn}
            >
              Not nice
            </button>
            <button
              type="button"
              className="btn btn-sm"
              data-bs-dismiss="modal"
              aria-label="Keep dark mode"
              onClick={lightsOff}
            >
              Nice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
