import { FeaturedProjects } from "@/components/sections/featured-projects/featured-projects";
import { Hello } from "@/components/sections/hello/hello";
import { Hero } from "@/components/sections/hero/hero";
import { Pipeline } from "@/components/sections/pipeline/pipeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pipeline />
      <Hello />
      <FeaturedProjects />
    </main>
  );
}
