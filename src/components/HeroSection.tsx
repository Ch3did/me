import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              Disponível para novos projetos
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pedro Henrique Chedid
            <span className="gradient-text block">
              Backend Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialista em <span className="text-python-blue font-semibold">Python</span> e{" "}
            <span className="text-go-cyan font-semibold">Golang</span>, criando soluções robustas e escaláveis para problemas complexos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Entre em Contato
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;