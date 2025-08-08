import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Sobre Mim
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformando <span className="gradient-text">Ideias</span> em Código
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Foto de perfil */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl rotate-6 opacity-20"></div>
              <img 
                src={profilePhoto} 
                alt="Foto de perfil profissional"
                className="relative w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-bold text-foreground">
              Olá, meu nome é Pedro Henrique, também conhecido como Chedid. 
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor backend autodidata, com grande interesse por
              tecnologia e constante busca por aprendizado. Tenho experiência 
              sólida com Python e Golang, atuando no desenvolvimento de APIs, 
              aplicações web, automações, integração com serviços externos, além
              de processos de tratamento e organização de dados (ETL). 
              Possuo também conhecimentos complementares em infraestrutura, o que me 
              permite compreender e contribuir com o ciclo completo das aplicações.
              Já utilizei ferramentas como o Docker, para facilitar a criação de
              ambientes portáveis e reprodutíveis, e o Selenium, para automações
              web complexas.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Acredito que código limpo, testes abrangentes e documentação clara 
              são fundamentais para o sucesso de qualquer projeto. Meu perfil é 
              focado em resolver problemas de forma eficiente e estruturada, com
              atenção à qualidade do código, à escalabilidade e à clareza das 
              soluções desenvolvidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
