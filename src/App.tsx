import { SquarePen } from 'lucide-react';
import './App.css';
import Introduce from './components/Introduce';
import { Languages } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
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
      <ul className="w-full h-auto flex flex-col items-center justify-between gap-3 bg-zinc-900/80 backdrop-blur-sm rounded-full lg:flex-col md:flex flex-row max-sm:gap-2 mt-8 p-2 shadow-lg ring-1 ring-white/5">
        {isMobile ? (
          <div className="relative w-full">
            <select
              style={{ backgroundColor: "#0B0E12" }}
              className="w-full h-11 appearance-none text-white text-sm font-medium rounded-xl cursor-pointer pl-4 pr-10 border border-zinc-700/60 shadow-inner transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 focus:border-emerald-500/60 hover:border-zinc-600"
              value={block}
              onChange={(e) => setBlock(e.target.value as Blocks)}
            >
              <option style={{ backgroundColor: "#0B0E12" }} value={Blocks.INTRODUCE}>
                {t("introduce")}
              </option>
              <option style={{ backgroundColor: "#0B0E12" }} value={Blocks.EXPERIENCE}>
                {t("Experience")}
              </option>
              <option style={{ backgroundColor: "#0B0E12" }} value={Blocks.SKILLS}>
                {t("Skills")}
              </option>
              <option style={{ backgroundColor: "#0B0E12" }} value={Blocks.ABOUT}>
                {t("Profile")}
              </option>
            </select>
            <ChevronDown
              color="white"
              width={18}
              height={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-70"
            />
          </div>
        ) : (
          buttons.map((btn, index) => {
            const isActive = btn.block !== undefined && btn.block === block;
            return (
              <li key={index} className="group relative w-12 h-12">
                <button
                  className={`w-full h-full z-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 max-sm:p-0 relative z-10 ${
                    isActive
                      ? 'bg-gradient-to-tr from-green-400 via-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30 scale-105'
                      : 'hover:bg-zinc-700/60 hover:scale-110'
                  }`}
                  onClick={() => btn.block && handleClick(btn.block)}
                >
                  {btn.icon}
                  <span className="absolute right-full z-10 top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1.5 text-sm text-white bg-zinc-800/95 backdrop-blur-sm rounded-lg shadow-md ring-1 ring-white/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 whitespace-nowrap pointer-events-none">
                    {btn.label}
                  </span>
                </button>
              </li>
            );
          })
        )}
      </ul>
      {isMobile && (
        <button
          className="w-full h-[3rem] mt-5 flex flex-row items-center justify-center cursor-pointer gap-3 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/60 rounded-2xl shadow-md transition-all duration-300 hover:bg-gradient-to-tr hover:from-green-400 hover:via-emerald-500 hover:to-teal-500 hover:border-transparent hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95"
          onClick={toggleLanguage}
        >
          <h1 className="text-white text-base font-medium tracking-wide">{t("Translate")}</h1>
          <Languages color="white" width={18} height={18} />
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
