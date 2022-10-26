import { Head } from "$fresh/runtime.ts";
import { LinkContents } from "../components/link/LinkContents.tsx";
import { Footer } from "../components/shared/Footer.tsx";
import { Header } from "../components/shared/Header.tsx";

export default function link() {
  return (
    <>
      <Head>
        <title>Satjopg | link</title>
      </Head>
      <Header />
      <LinkContents />
      <Footer />
    </>
  );
}
