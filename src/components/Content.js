export { Content };

function Content() {
  const projects = [
    {
      id: 1,
      icon: "fa-address-card",
      name: "User dashboard",
      alt: "Redux app screenshot",
      description: "CRUD app with Redux and Firebase",
      repo: "redux",
    },
    {
      id: 2,
      icon: "fa-spell-check",
      name: "English dictionary",
      alt: "Dictionary app screenshot",
      description: "Dictionary based on a public API",
      repo: "dictionary",
    },
    {
      id: 3,
      icon: "fa-chart-simple",
      name: "Expenses chart",
      alt: "Expenses app screenshot",
      description: "Weekly expenses chart",
      repo: "expenses",
    },
  ];

  return (
    <>
      <main className="row gap-5 justify-content-evenly overflow-hidden mx-auto flex-shrink-0 my-5">
        <div className="row gap-5 justify-content-center justify-content-lg-evenly justify-content-xl-center align-items-center text-center mx-auto">
          <div className="col-lg-2 col-md-5 justify-content-center">
            <img
              src="res/images/pfp.webp"
              className="img-thumbnail rounded-circle pfp mx-auto"
              alt=""
              aria-label="My profile picture"
              width="125px"
              height="125px"
            />
            <div className="socials">
              <h5 className="fw-bold mt-4 mb-0">David Cornejo</h5>
              <span className="stack">
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3-alt"></i>
                <i className="fa-brands fa-square-js"></i>
                <i className="fa-brands fa-react"></i>
                <i className="fa-brands fa-github"></i>
              </span>
              <p className="mb-2">React developer</p>
              <p className="m-0">
                <a
                  href="https://linktr.ee/cornejobarraza"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="David's Linktree"
                  style={{ color: "var(--text)", fontWeight: "bold", textDecoration: "none" }}
                >
                  <i className="fa-solid fa-link" style={{ color: "var(--text)" }}></i> Linktree
                </a>
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-11 text-xl-justify px-4 px-xl-2">
            <h4 className="fw-bold">What is this?</h4>
            <p>
              Great question! So I've always been interested in computers and tech overall, in understanding how things
              work and learning new stuff. <br className="d-sm-none" />
              <span className="d-block mt-3 d-sm-inline mt-sm-0">
                I had the chance to study an associate's degree on networks and security, a degree which I had always
                seen as my dream career path.
              </span>
              <span className="d-block my-3 d-sm-none">
                However as time went on, I realized some of my career goals had shifted and I started thinking about
                what I wanted to achieve next.
              </span>
              <span className="d-block my-3 d-sm-none">
                Fast forward a couple of months and I'm catching up with a good friend, whom during our conversation
                mentions his new job and what he does as a developer now.
              </span>
            </p>
            <p className="d-none d-sm-block">
              However as time went on, I realized some of my career goals had shifted and I started thinking about what
              I wanted to achieve next. Fast forward a couple of months and I'm catching up with a good friend, whom
              during our conversation mentions his new job and what he does as a developer now.
            </p>
            <p className="mb-0">
              I was definitely drawn and felt what he said resonated a lot with my interests, so once home I went online
              and started reading more about it.{" "}
              <span className="d-block mt-3 d-sm-inline mt-sm-0">
                My journey to become a web developer started since, and this website is a way to show myself and others
                what I've accomplished so far.
              </span>
            </p>
          </div>
        </div>
        <div className="row gap-5 justify-content-center text-center mx-auto">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </main>
      <footer className="d-flex mt-auto py-2">
        <div className="container d-flex justify-content-center">
          <div className="col-auto">
            <a
              className="text-decoration-none text-white fw-bold"
              style={{ fontSize: "0.9rem" }}
              href="https://github.com/cornejobarraza/cornejobarraza.github.io"
              target="_blank"
              rel="noreferrer"
              aria-label="Portfolio repository"
            >
              See it on GitHub <i className="fa-brands fa-github-alt text-white"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function Project({ id, icon, name, alt, description, repo }) {
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
            <img className="img-thumbnail" alt={alt} src={`res/images/${repo}.webp`} />
          </div>
          <div className="col-5" style={{ display: "grid", placeItems: "center", alignContent: "center" }}>
            <h6 className="mb-3">{description}</h6>
            <a href={repo + (id === 1 ? "/login" : "")} className="btn btn-sm" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: "var(--active)" }}></i>
            </a>
          </div>
          <div className="col">
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
