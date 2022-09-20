import Header from "./header";
import Hero from "./hero";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-lavender flex flex-col min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg"
    >
      <Header />
      <Hero />
    </section>
  );
}
