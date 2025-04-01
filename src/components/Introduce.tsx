import React from 'react'
import TypeEffect from '../entites/TypeEffect'
import picture from '../assets/picture.jpg';
import { CheckCheck, Linkedin, SquarePen, Instagram, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next';

const Introduce: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:w-full h-[10%] mx-auto flex flex-col relative right-35 lg:w-[30%] left-1 max-sm:w-full flex justify-center">
    <div className="w-full  flex flex-col bg-zinc-900 rounded-[10%] p-5 gap-10">
        <div className="w-full md:w-[50%]  flex flex-row gap-5 justify-center items-center">
          <SquarePen color='white' />
          <h1 className="text-white text-lg">{t("introduce")}</h1>
        </div>
        <div className="w-full h-auto flex flex-row gap-15 max-sm:flex-col-reverse justify-center items-center">
            <div className="w-full h-auto flex flex-col items-center justify-center gap-15   lg:w-[70%] flex md:w-[50%] gap-1 max-sm:w-full gap-3">
                <h1 className="text-white text-5xl max-sm:text-xl">{t("I'm always")}</h1>
                <TypeEffect  sequence={["achieve my goals", 2000, "doing my best", 2000, "", 500]} />
                <p className="text-white text-sm text-start flex items-center justify-center max-sm:text-xs">
                  {t("introduce_wrap")}
                </p>
                <div className="w-full h-auto flex flex-col gap-5 lg: flex flex-row justify-between">
              <div className='w-full h-auto items-start justify-start flex flex-col gap-5 pl-1 max-sm:w-[30%]'>
                    <div className="flex flex-row items-center justify-center">
                    <CheckCheck color='green' />
                      <p className="text-white text-xs whitespace-nowrap pl-2 max-sm:text-xs">{t("Available for work")}</p>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                    <CheckCheck color='green'/>
                      <p className="text-white text-xs whitespace-nowrap pl-2 max-sm:text-xs">{t("Full-time")}</p>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                      <CheckCheck color='green' />
                      <p className="text-white text-xs whitespace-nowrap pl-2 max-sm:text-xs">{t("Part-time")}</p>
                    </div>
                </div>
              </div>
              <button className="w-full h-20 bg-green-800 rounded-3xl shadow-lg transition-all duration-300 hover:bg-green-500 hover:border-green-400 relative flex items-center justify-center text-center max-sm:rounded-full w-full h-[4rem] ">
                  <Linkedin color='white' />
                  <a href="https://www.linkedin.com/in/vycheslav-chistiakov-045228265/" className="text-white pl-5 text-lg text-center  uppercase lg:text-sm md:text-sm">{t("Connect with me")}</a>
                </button>
            </div>
            <div className="w-full md:w-[50%] flex flex-col h-auto max-sm:w-full">
              <img src={picture} alt="picture" />
              <ul className="w-full flex flex-col items-center justify-center gap-4 mt-10">
                    <li className="w-full flex flex-row justify-start gap-2 text-white">
                      <Instagram color='white' />
                      <a href="https://www.instagram.com/hudozhnik4life/">Instagram</a>
                    </li>
                    <li className="w-full flex flex-row justify-start gap-2 text-white">
                      <Github color='white' />
                      <a href="https://github.com/ViacheslavChistiakov">GitHub</a>
                    </li>
                    <li className="w-full flex flex-row justify-start gap-2 text-white">
                      <Linkedin color='white' />
                      <a href="https://www.linkedin.com/in/vycheslav-chistiakov-045228265/">Linkedin</a>
                    </li>
              </ul>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Introduce