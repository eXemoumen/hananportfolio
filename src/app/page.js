import Image from "next/image";
import Welcome from "./components/welcom";
import Hero from "./components/hero";
import ParticlesComponent from "./components/partical";

export default function Home() {
  return (
    <>
    <ParticlesComponent id='partical'>
      
    </ParticlesComponent>
      <Hero/>
    </>
  );
}
