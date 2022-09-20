export default function Hero() {
  return (
    <div class="lg:py-32 flex flex-col items-start justify-center flex-1 max-w-3xl py-10">
      <h1 class="font-display lg:text-6xl text-4xl">
        Hi, I’m Chaitanya, Web Developer and UI/UX Designer
      </h1>
      <p class="font-body mt-6 mb-16 text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        doloremque aliquid? Provident ab, consequuntur repellendus, incidunt
        voluptatem autem, quod nam molestias ut ipsa facilis? Maiores quos vitae
        harum molestias. Dolorum.
      </p>
      <a
        href="#projects"
        class="hover:scale-105 relative transition-all shadow-lg"
      >
        <button class="font-button relative z-10 px-6 py-4 text-lg text-white bg-black">
          see my work
        </button>
        <div class="-bottom-4 -right-4 font-button absolute px-6 py-4 text-lg text-white border-4 border-white shadow-lg opacity-50">
          see my work
        </div>
      </a>
    </div>
  );
}
