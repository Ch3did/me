import { useState } from "react";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import LanguageSwitcher from "@/components/LanguageSwitcherSection"

const Index = () => {

  const [language, setLanguage] = useState<"pt" | "en">("pt");
  return (
    <div className="min-h-screen">
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ProjectsSection language={language} />
      <ContactSection language={language} />
    </div>
  );
};

export default Index;