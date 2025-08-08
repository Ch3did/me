import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import pt  from "../../locales/pt"
import en  from "../../locales/en"

type Props = {
  language: "pt" | "en";
};

const profilePhoto = "assets/profile-photo.jpg";
const AboutSection= ({ language }: Props) => {
  const texts = language === "pt" ? pt : en;
  return (
    <section id="about" className="py-24 px-4 bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {texts.about.tab_name}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {texts.about.intro_begin} <span className="gradient-text">{texts.about.intro_highlight}</span> {texts.about.intro_end}
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
              {texts.about.head}
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {texts.about.body}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {texts.about.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
