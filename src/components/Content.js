import { Gallery, Profile } from "components";

export { Content };

function Content() {
  return (
    <main className="row gap-5 justify-content-evenly overflow-hidden mx-auto flex-shrink-0 my-5">
      <Profile />
      <Gallery />
    </main>
  );
}
