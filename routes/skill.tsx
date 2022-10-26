import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/shared/Footer.tsx";
import { Header } from "../components/shared/Header.tsx";
import { SkillContents } from "../components/skill/SkillContents.tsx";

export default function skill() {
  return (
    <>
      <Head>
        <title>Satjopg | skill</title>
      </Head>
      <Header />
      <SkillContents />
      <Footer />
    </>
  );
}
