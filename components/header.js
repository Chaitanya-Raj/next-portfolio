export default function Header() {
  return (
    <header className="md:flex flex-row items-center justify-between hidden pt-8">
      <a href="#home">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.svg`}
          alt="Chaitanya Raj Logo"
          layout="fill"
        />
      </a>
      <nav className="font-body md:pt-0 flex items-center pt-4 space-x-4 font-bold">
        <a href="#projects" className="highlight">
          my work
        </a>
        <a href="#about" className="highlight">
          about me
        </a>
        <a href="#contact" className="highlight">
          get in touch
        </a>
      </nav>
    </header>
  );
}
