export { About };

function About() {
  return (
    <div className="row justify-content-center justify-content-lg-evenly justify-content-xl-center align-items-center text-center mx-auto">
      <div className="col-lg-3 col-md-5 justify-content-center">
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
          <p className="mb-2">Jr. React developer</p>
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
      <div className="col-xl-6 col-lg-7 col-md-11 text-xl-justify mt-5 mt-lg-0">
        <h4 className="fw-bold">What is this?</h4>
        <p>
          Great question! So I've always been interested in computers and tech overall, in understanding how things work
          and in learning about new stuff. <br className="d-sm-none" />
          <span className="d-block mt-3 d-sm-inline mt-sm-0">
            I had the opportunity to study an associate's degree on networks and security, a degree which I had always
            seen as my dream career path.
          </span>
          <span className="d-block my-3 d-sm-none">
            However as time went on, I realized some of my career goals had shifted and I started thinking about what I
            wanted to achieve next.
          </span>
          <span className="d-block my-3 d-sm-none">
            Fast forward a couple of months and I'm catching up with a good friend, whom during our conversation
            mentions his new job and what he does as a developer now.
          </span>
        </p>
        <p className="d-none d-sm-block">
          However as time went on, I realized some of my career goals had shifted and I started thinking about what I
          wanted to achieve next. Fast forward a couple of months and I'm catching up with a good friend, whom during
          our conversation mentions his new job and what he does as a developer now.
        </p>
        <p className="mb-0">
          I was definitely drawn and felt what he said resonated a lot with my interests, so once home I went online and
          started reading more about it.{" "}
          <span className="d-block mt-3 d-sm-inline mt-sm-0">
            My journey to become a web developer started since, and this website is a way to show myself and others what
            I've accomplished so far.
          </span>
        </p>
      </div>
    </div>
  );
}
