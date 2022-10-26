import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/shared/Footer.tsx";
import { Header } from "../components/shared/Header.tsx";
import { TopContents } from "../components/top/TopContents.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Satjopg</title>
      </Head>
      <Header />
      <TopContents />
      <Footer />
    </>
  );
}
