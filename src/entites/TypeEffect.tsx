import { TypeAnimation } from 'react-type-animation';
import i18n from '../i18n';
import { useLanguage } from '../LanguageContext';


interface TypeEffectProps {
  sequence: (string | number)[];
}

const TypeEffect = ({ sequence }: TypeEffectProps) => {  
  const { language } = useLanguage();  


  const translate = (key: string) => {
    return i18n.t(key);  
  };


  const translatedSequence = sequence.map((item) => {
    if (typeof item === 'string') {
      switch (item) {
        case "achieve my goals":
          return translate("achieve_my_goals");
        case "doing my best":
          return translate("doing_my_best");
        default:
          return item;
      }
    }
    return item; 
  });
  return (
    <TypeAnimation
      sequence={translatedSequence}
      wrapper="p"
      speed={50} 
      repeat={Infinity} 
      className="text-blue-300 text-sm inline-block overflow-hidden whitespace-nowrap max-sm:text-xs"
    />
  );
};

export default TypeEffect;



