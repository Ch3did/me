

type Props = {
  language: "pt" | "en";
  setLanguage: React.Dispatch<React.SetStateAction<"pt" | "en">>;
};


const LanguageSwitcher = ({ language, setLanguage }: Props) => {
  const toggleLanguage = () => {
    console.log("Troco")
    setLanguage(prev => (prev === "pt" ? "en" : "pt"));
  };

   return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={toggleLanguage}
        className="relative flex items-center w-20 h-10 rounded-full border border-muted bg-muted/30 backdrop-blur-md shadow-inner overflow-hidden transition-colors duration-300"
      >
        {/* Background indicator */}
        <div
          className={`absolute top-0 h-full w-1/2 bg-primary transition-all duration-300 ${
            language === "pt" ? "left-0" : "left-1/2"
          }`}
        />

        {/* Language labels */}
        <span
          className={`w-1/2 text-center z-10 transition-colors duration-300 ${
            language === "pt" ? "text-white font-semibold" : "text-muted-foreground"
          }`}
        >
          PT
        </span>
        <span
          className={`w-1/2 text-center z-10 transition-colors duration-300 ${
            language === "en" ? "text-white font-semibold" : "text-muted-foreground"
          }`}
        >
          EN
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;