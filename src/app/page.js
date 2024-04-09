import Navbar from "./Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Spongebob Squarepants Profiles</h1>
      <Image src="/spongebob.jpg" alt="spongebob" width={300} height={400} />
    </main>
  );
}
