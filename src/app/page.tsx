import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects"; 
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects /> 
      <Contact /> 
    </Layout>
  );
}
