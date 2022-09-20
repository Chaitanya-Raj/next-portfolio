import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Projects from "../components/projects";

export default function App() {
  return (
    <>
      <Head>
        <title>Chaitanya Raj</title>
      </Head>
      <div>
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}
