import { SquarePen } from 'lucide-react';
import './App.css';
import Introduce from './components/Introduce';
import { Languages } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import { FlaskConical } from 'lucide-react';
import { PersonStanding } from 'lucide-react';
import Experience from './components/Experience';
import React from 'react';
import Skills from './components/Skills';
import Profile from './components/Profile';
import { useLanguage } from './LanguageContext';
import { useTranslation } from 'react-i18next';
import { useSelectBlock, Blocks } from './store/useSelectBlock';
import Card from './components/Card';




function App() {
  const block = useSelectBlock((state) => state.block);
  const setBlock = useSelectBlock((state) => state.setBlock);
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 640);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttons = [
    {
      block: undefined,
      label: 'ENG/RU',
      icon: <Languages color="white" width={20} height={20} onClick={toggleLanguage} />,
    },
    {
      block: Blocks.INTRODUCE,
      label: t('about'),
      icon: <SquarePen color="white" width={20} height={20} />,
    },
    {
      block: Blocks.EXPERIENCE,
      label: t('experience'),
      icon: <BriefcaseBusiness color="white" width={20} height={20} />,
    },
    {
      block: Blocks.SKILLS,
      label: t('skills'),
      icon: <FlaskConical color="white" width={20} height={20} />,
    },
    {
      block: Blocks.ABOUT,
      label: t('profile'),
      icon: <PersonStanding color="white" width={20} height={20} />,
    },
  ];

  const handleClick = (block: Blocks) => {
    if (!block) return;
    setBlock(block);
  };

  return (
  <div className="w-full h-full  mx-auto  flex flex-row  justify-center  lg:flex-row mt-2  gap-3   sm:flex-col max-sm:flex-col gap-8 items-center justify-center">
      <Card />
      <div className="w-full h-full mx-auto flex flex-col items-center relative left-[-4px] top-[-25px] xl:right-5 justify-start lg:w-[10%] right-1 bottom-10 md:w-[70%] flex-col top-14 left-8 max-sm:left-0 w-[30%] ">
      <ul className="w-full h-auto flex flex-col items-center justify-between gap-2 bg-zinc-900 rounded-full lg:flex-col md:flex flex-row max-sm:gap-2 mt-8">
        {isMobile ? (
          <select
            style={{ backgroundColor: "#0B0E12" }}
            className="w-full h-10 flex items-center justify-center text-gray-400 rounded-lg cursor-pointer"
            value={block}
            onChange={(e) => setBlock(e.target.value as Blocks)}
          >
            <option className="w-full" value={Blocks.INTRODUCE}>
              {t("introduce")}
            </option>
            <option className="w-full" value={Blocks.EXPERIENCE}>
              {t("Experience")}
            </option>
            <option className="w-full" value={Blocks.SKILLS}>
              {t("Skills")}
            </option>
            <option className="w-full" value={Blocks.ABOUT}>
              {t("Profile")}
            </option>
          </select>
        ) : (
          buttons.map((btn, index) => (
            <li key={index} className="group relative w-12 h-12">
              <button
                className="w-full h-full z-10 flex items-center justify-center rounded-full focus-within:bg-gray-700 transition max-sm:p-0 relative z-10"
                onClick={() => btn.block && handleClick(btn.block)}
              >
                {btn.icon}
                <span className="absolute right-full z-10 top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {btn.label}
                </span>
              </button>
            </li>
          ))
        )}
      </ul>
      {isMobile && (
        <button className="w-full h-[3rem]  mt-5 flex flex-row items-center justify-center cursor-pointer gap-5  bg-gray-800 rounded-3xl" onClick={toggleLanguage}>
          <h1 className="text-white text-lg">{t("Translate")}</h1>
          <Languages color="white" width={20} height={20} />
        </button>
      )}
    </div>
    {block === Blocks.INTRODUCE ? (
        <Introduce />
      ) : block === Blocks.EXPERIENCE ? (
        <Experience />
      ) : block === Blocks.SKILLS ? (
        <Skills />
      ) : block === Blocks.ABOUT ? (
        <Profile />
      ) : null}
    </div>
  );
}

export default App;
