export { Gallery };

function Gallery() {
  return (
    <div className="row gap-5 justify-content-center text-center mx-auto">
      <div className="col-xl-3 col-lg-5">
        <div className="row gap-5 justify-content-evenly mx-auto">
          <div className="col-11 about">
            <h6 className="m-0">
              <i className="fa-solid fa-id-card"></i> Redux dashboard
            </h6>
          </div>
          <div className="row justify-content-evenly gap-4">
            <div className="col-5">
              <img className="img-thumbnail" alt="Redux app screenshot" src="res/images/redux.webp" />
            </div>
            <div className="col-5" style={{ display: "grid", placeItems: "center", alignContent: "center" }}>
              <h6 className="mb-3">CRUD app with Redux Toolkit and Firebase</h6>
              <a href="redux" className="btn btn-sm" target="_blank" aria-label="Redux dashboard">
                Test it
              </a>
            </div>
            <div className="col mt-4">
              <a
                className="btn"
                style={{ fontSize: "0.8rem" }}
                href="https://github.com/cornejobarraza/redux"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-code-branch" style={{ color: "var(--active)" }}></i> Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-5">
        <div className="row gap-5 justify-content-center mx-auto">
          <div className="col-11 about">
            <h6 className="m-0">
              <i className="fa-solid fa-spell-check"></i> English dictionary
            </h6>
          </div>
          <div className="row justify-content-evenly gap-4">
            <div className="col-5">
              <img className="img-thumbnail" alt="Dictionary app screenshot" src="res/images/dictionary.webp" />
            </div>
            <div className="col-5" style={{ display: "grid", placeItems: "center", alignContent: "center" }}>
              <h6 className="mb-3">Dictionary based on a public API</h6>
              <a href="dictionary" className="btn btn-sm" target="_blank" aria-label="Redux dashboard">
                Try it
              </a>
            </div>
            <div className="col mt-4">
              <a
                className="btn"
                style={{ fontSize: "0.8rem" }}
                href="https://github.com/cornejobarraza/dictionary"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-code-branch" style={{ color: "var(--active)" }}></i> Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-5">
        <div className="row gap-5 justify-content-center mx-auto">
          <div className="col-11 about">
            <h6 className="m-0">
              <i className="fa-solid fa-chart-simple"></i> Expenses chart
            </h6>
          </div>
          <div className="row justify-content-evenly gap-4">
            <div className="col-5">
              <img className="img-thumbnail" alt="Expenses app screenshot" src="res/images/expenses.webp" />
            </div>
            <div className="col-5" style={{ display: "grid", placeItems: "center", alignContent: "center" }}>
              <h6 className="mb-3">Dynamic weekly expenses chart</h6>
              <a href="expenses" className="btn btn-sm" target="_blank" aria-label="Redux dashboard">
                Check it
              </a>
            </div>
            <div className="col mt-4">
              <a
                className="btn"
                style={{ fontSize: "0.8rem" }}
                href="https://github.com/cornejobarraza/expenses"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-code-branch" style={{ color: "var(--active)" }}></i> Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
