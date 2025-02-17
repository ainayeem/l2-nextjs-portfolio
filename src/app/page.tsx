import FeaturedProject from "@/components/featuredProject/FeaturedProject";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <section className="container mx-auto">
      <Hero />
      <Skills />
      <FeaturedProject />
    </section>
  );
}
