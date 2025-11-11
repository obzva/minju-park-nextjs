import Artwall from "./components/art-wall";

export default function Home() {
  return (
    <section>
      <div className="sm:hidden mt-12">
        <Artwall row={4} col={3} />
      </div>
      <div className="hidden sm:block lg:hidden mt-6 lg:mt-0">
        <Artwall row={6} col={5} />
      </div>
      <div className="hidden lg:block">
        <Artwall row={4} col={8} />
      </div>
    </section>
  );
}
