import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Fullstack Web Developer and UI/UX Designer based in New Delhi."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, webdev, react, vue, nuxt, next, nuxtjs, nextjs"
        />
        <meta name="author" content="Chaitanya" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
