export { Navbar };

function Navbar() {
  return (
    <div className="container justify-content-center">
      <div className="col-auto">
        <a className="navbar-brand d-flex justify-content-center align-items-center" href="/">
          <i className="fa-solid fa-circle-check fs-6 text-light"></i>
          <h6 className="fw-bold my-auto ps-2 text-light">Web portfolio</h6>
        </a>
      </div>
    </div>
  );
}
