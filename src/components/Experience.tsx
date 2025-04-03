import React from 'react'
import { BriefcaseBusiness, GraduationCap} from 'lucide-react'
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
const { t } = useTranslation();
  return (
    <div className="w-full lg:w-full h-[10%] mx-auto flex rounded-[10%] flex flex-col relative right-35 lg:w-[30%] left-1 max-sm:w-full flex justify-center">
    <div className="w-full  flex flex-col bg-zinc-900 rounded-[10%] p-5 gap-7">
        <div className="w-full md:w-full  flex flex-row gap-5 justify-center items-center">
        <BriefcaseBusiness color='white' width={20} height={20}/>
          <h1 className="text-white text-lg">{t("Experience")}</h1>
        </div>
        <div className="w-full h-auto flex flex-row  gap-9 md:flex-row justify-between max-sm:flex-col xs:flex-col">
            <div className="w-full h-auto flex flex-col items-start justify-center gap-4  lg:w-full flex md:w-full  gap-1 max-sm:w-full gap-4">
                <h1 className="text-white text-3xl">OnePix</h1>
                <p className="text-white text-xl flex flex-col gap-2 items-start">
                    {t("Saint-Petersburg")}
                    <a className="text-blue-300" href="https://onepix.ru/">{t("Web-studio")}</a>
                </p>
                <div className="w-full flex flex-col items-start justify-start gap-7   lg:w-full flex md:w-full gap-1 max-sm:w-full gap-4">
                    <p className="text-white text-sm items-start text-start">
                    {t("job1")}
                    </p>
                    <div className="w-full flex flex-row items-start justify-between text-start">
                        <h2 className="text-white text-xs">Frontend developer</h2>
                        <p className="text-white text-xs">10.08.2022-15.02.2025</p>
                    </div>
                </div>
                </div>
                <div className="hidden md:block w-[2px]   bg-gray-500 h-auto"></div>
                <div className="w-full h-auto flex flex-col items-end justify-center gap-7   lg:w-full flex md:w-full items-end text-end gap-1 sm:items-end text-end max-sm:w-full items-start text-start gap-3">
                <h1 className="text-white text-3xl">GigaPc</h1>
                <p className="text-white text-xl flex flex-col gap-2 items-end md:items-end text-end max-sm:items-start text-start">
                    {t("Nizhniy-Novgorod")}
                    <a className="text-blue-300" href="">Gaming Equipment Store</a>
                </p>
                <div className="w-full flex flex-col items-end justify-start gap-9   lg:w-full flex md:w-full gap-1 max-sm:w-full items-start text-start gap-3">
                    <p className="text-white text-sm items-end text-end max-sm:text-start items-start">
                    {t("job2")}
                    </p>
                    <div className="w-full flex flex-row items-start justify-between text-start">
                        <h2 className="text-white text-xs">Frontend developer</h2>
                        <p className="text-white text-xs">02.02.2021-22.04.2022</p>
                    </div>
                </div>
                </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="w-full flex flex-row mx-auto p-10 items-center justify-center gap-2">
                <GraduationCap color='white' />
                <h1 className="text-white text-lg">{t("Education")}</h1>
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-2">
                    <div className="w-full flex flex-col text-start items-center">
                        <h2 className="text-white text-sm max-sm:text-xs">
                        Lobachevsky State University of Nizhny Novgorod (National Research University)
                        </h2>
                    </div>
                    <div className="w-full flex flex-col text-end items-end">
                        <h2 className="text-white text-sm max-sm:text-xs">{t("Nizhniy-Novgorod")} - 2017</h2>
                        <p className="text-white text-sm max-sm:text-xs">{t("Subject")}</p>
                    </div>
            </div>

        </div>
     </div>
    </div>
  )
}

export default Experience;