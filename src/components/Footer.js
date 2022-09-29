export { Footer };

function Footer() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-auto">
        <span className="fw-bold text-light" style={{ fontSize: "0.9rem" }}>
          Made with React and Bootstrap{" "}
          <a
            href="https://github.com/cornejobarraza/cornejobarraza.github.io"
            target="_blank"
            rel="noreferrer"
            aria-label="Portfolio repository"
          >
            <i className="fa-solid fa-code-branch text-info"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
