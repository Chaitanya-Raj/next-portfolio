export default function Project({ project }) {
  return (
    <div className="lg:flex-row lg:px-32 lg:space-x-10 md:px-10 flex flex-col px-4 m-4 space-y-8 even:flex-col lg:even:flex-row-reverse lg:even:space-x-reverse">
      <div className="flex items-center justify-center max-w-4xl">
        <a href={project.deployed}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${project.preview}`}
            alt="Project Preview"
            className="hover:shadow-xl hover:scale-110 lg:scale-100 lg:hover:scale-105 transition-all scale-105 shadow-lg"
          />
        </a>
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="font-body font-bold text-gray-400 uppercase">concept</p>
        <a href={project.source} className="highlight">
          <h2 className="font-display md:text-5xl mt-2 text-4xl">
            {project.title}
          </h2>
        </a>
        {/* <!-- TODO: write better descriptions --> */}
        <p className="font-body md:text-xl mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti
          nam magni, doloremque dignissimos qui, aperiam sapiente voluptatibus,
          ratione quia fugit! Earum, consectetur. Sunt eius, voluptas voluptatum
          odio minima cum.
        </p>
        <p className="font-body md:text-xl mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
          nemo. Commodi, quidem officiis laudantium qui adipisci placeat amet
          quas culpa reiciendis ipsam eaque suscipit velit maiores hic eveniet
          rerum animi.
        </p>
      </div>
    </div>
  );
}
