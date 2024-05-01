import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
      <div className="container mx-auto px-4">
        <h1>Hello world</h1>
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus corporis, esse rem excepturi, nemo voluptates nostrum laboriosam laborum quas eius dolorem voluptate illo pariatur aspernatur facere iste consectetur, eligendi dolor.</div>
      </div>
    </>
  );
}
