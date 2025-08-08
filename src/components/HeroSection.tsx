import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const copyEmailToClipboard = useCallback(() => {
    navigator.clipboard.writeText("phchedidk@gmail.com").then(() => {
      alert("E-mail copiado para a área de transferência!");
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      <div
        className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pedro Henrique Chedid
            <span className="gradient-text block">Backend Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Desenvolvedor com ênfase em{" "}
            <span className="text-python-blue font-semibold">Python</span> e{" "}
            <span className="text-go-cyan font-semibold">Golang</span>,  criando soluções confiáveis e de alta performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group" onClick={scrollToContact}>
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Entre em Contato
            </Button>

            <a
              href="/docs/CV.gif"
              download="CV.gif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Ch3did"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all flex justify-center items-center"
            >
              <Button variant="ghost" size="icon" className="w-full h-full pointer-events-none">
                <Github className="w-6 h-6" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/pedro-henrique-chedid/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all flex justify-center items-center"
            >
              <Button variant="ghost" size="icon" className="w-full h-full pointer-events-none">
                <Linkedin className="w-6 h-6" />
              </Button>
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all"
              onClick={copyEmailToClipboard}
              aria-label="Copiar e-mail"
            >
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
