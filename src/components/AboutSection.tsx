import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Sobre Mim
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformando <span className="gradient-text">Ideias</span> em Código
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl rotate-6 opacity-20"></div>
              <img 
                src={profilePhoto} 
                alt="Foto de perfil profissional"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Desenvolvedor Full-Stack especializado em Python & Golang
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de 5 anos de experiência no desenvolvimento de software, 
              tenho paixão por criar soluções elegantes e eficientes. Minha 
              especialidade está em Python para desenvolvimento web, análise de 
              dados e automação, e Golang para sistemas distribuídos e APIs de 
              alta performance.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Acredito que código limpo, testes abrangentes e documentação clara 
              são fundamentais para o sucesso de qualquer projeto. Sempre busco 
              estar atualizado com as melhores práticas e tecnologias emergentes 
              do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;