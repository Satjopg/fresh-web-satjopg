import { Head } from "$fresh/runtime.ts";
import { ProfileContents } from "../components/profile/ProfileContents.tsx";
import { Footer } from "../components/shared/Footer.tsx";
import { Header } from "../components/shared/Header.tsx";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Satjopg | Profile</title>
      </Head>
      <Header />
      <ProfileContents />
      <Footer />
    </>
  );
}
