export { Footer };

function Footer() {
  return (
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
  );
}
