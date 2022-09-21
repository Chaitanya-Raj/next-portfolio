import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-lavender flex min-h-[calc(100vh-32px)] lg:px-32 m-4 px-10 shadow-lg items-center justify-center"
    >
      <div className="flex flex-col items-center flex-1">
        <h1 className="font-display md:text-5xl mb-3 text-3xl">Get In Touch</h1>
        <p className="font-body md:text-xl max-w-sm mb-8 text-lg text-center">
          Contact me below and I’ll try to get back to you within one business
          day
        </p>
        <form
          action="https://formspree.io/f/xknejgor"
          method="POST"
          className="flex flex-col 2xl:w-[50%] md:w-[80%] w-full pb-10 space-y-4 text-xl border-b border-black"
        >
          <input
            type="text"
            name="name"
            className="form-control bg-clip-padding margin block px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            className="form-control bg-clip-padding block px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded"
            placeholder="Email"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="form-control bg-clip-padding block h-48 px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded resize-none"
          ></textarea>
          <button
            type="submit"
            className="font-button hover:scale-105 hover:shadow-xl px-6 py-4 text-xl text-white transition-all bg-black shadow-lg"
          >
            Send
          </button>
        </form>
        <div className="social md:text-5xl flex justify-end flex-1 mt-8 space-x-4 text-4xl">
          <a
            href="https://github.com/Chaitanya-Raj"
            className="hover:scale-110 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/chaitanya-raj-4b3285187/"
            className="hover:scale-110 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://www.instagram.com/_chaitanya.raj/"
            className="hover:scale-110 transition-all"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://twitter.com/0xClef"
            className="hover:scale-110 transition-all"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            href="mailto:chaitanyarajdixit@gmail.com"
            className="hover:scale-110 transition-all"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a
            href="/Chaitanya-Raj.pdf"
            target="_blank"
            className="hover:scale-110 transition-all"
          >
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
        </div>
      </div>
    </section>
  );
}
