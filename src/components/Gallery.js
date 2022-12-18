export { Gallery };

function Gallery() {
  return (
    <div className="row gap-5 justify-content-center text-center mx-auto">
      <Project
        icon="fa-address-card"
        name="User dashboard"
        description="CRUD app using Redux Toolkit and Firebase"
        repo="redux"
      />
      <Project
        icon="fa-spell-check"
        name="English dictionary"
        description="Dictionary based on a public API"
        repo="dictionary"
      />
      <Project
        icon="fa-chart-simple"
        name="Expenses chart"
        description="Weekly expenses chart with dynamic data"
        repo="expenses"
      />
    </div>
  );
}

function Project({ icon, name, description, repo }) {
  return (
    <div className="col-xl-3 col-lg-5">
      <div className="row gap-5 justify-content-evenly mx-auto">
        <div className="col-11 about">
          <h6 className="m-0">
            <i className={`fa-solid ${icon}`}></i> {name}
          </h6>
        </div>
        <div className="row justify-content-evenly gap-4">
          <div className="col-5">
            <img className="img-thumbnail" alt="Redux app screenshot" src={`res/images/${repo}.webp`} />
          </div>
          <div className="col-5" style={{ display: "grid", placeItems: "center", alignContent: "center" }}>
            <h6 className="mb-3">{description}</h6>
            <a href={repo} className="btn btn-sm" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: "var(--active)" }}></i>
            </a>
          </div>
          <div className="col mt-4 mb-1">
            <a
              className="btn"
              style={{ fontSize: "0.8rem" }}
              href={`https://github.com/cornejobarraza/${repo}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-code-branch" style={{ color: "var(--active)" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
