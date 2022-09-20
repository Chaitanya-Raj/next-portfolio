export default function Header() {
  return (
    <header class="md:flex flex-row items-center justify-between hidden pt-8">
      <a href="#home">
        <img src="/logo.svg" alt="Chaitanya Raj Logo" layout="fill" />
      </a>
      <nav class="font-body md:pt-0 flex items-center pt-4 space-x-4 font-bold">
        <a href="#projects" class="highlight">
          my work
        </a>
        <a href="#about" class="highlight">
          about me
        </a>
        <a href="#contact" class="highlight">
          get in touch
        </a>
      </nav>
    </header>
  );
}
