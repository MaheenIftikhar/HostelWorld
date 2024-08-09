import Image from "next/image";
import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";
import Travel from "@/components/Travel";
// import Hello from "@/components/Hello";

export default function Home() {
  return (
    <>
    <HomePage/>
    {/* <Hello/> */}
    <Travel/>
    <Footer/>
    </>
  );
}
