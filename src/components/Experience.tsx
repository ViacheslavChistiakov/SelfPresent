import React from 'react'
import { BriefcaseBusiness } from 'lucide-react'
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
const { t } = useTranslation();
  return (
    <div className="w-full lg:w-full h-[680px] mx-auto flex rounded-[10%] flex flex-col relative right-35 lg:w-[30%] left-1 max-sm:w-full max-sm:h-auto flex justify-center animate-fade-in">
    <div className="w-full h-full flex flex-col bg-zinc-900 rounded-[10%] p-5 gap-4 justify-center">
        <div className="w-full md:w-full  flex flex-row gap-5 justify-center items-center">
        <BriefcaseBusiness color='white' width={20} height={20}/>
          <h1 className="text-white text-lg">{t("Experience")}</h1>
        </div>
        <div className="w-full h-auto flex flex-row gap-8 md:flex-row justify-between max-sm:flex-col xs:flex-col">
            <div className="w-full h-auto flex flex-col items-start justify-start text-start gap-1.5">
                <h1 className="text-white text-xl">{t("job1-company")}</h1>
                <p className="text-blue-300 text-xs">{t("job1-role")}</p>
                <p className="text-white text-xs pt-1">{t("job1-project")}</p>
                <p className="text-white text-xs">{t("job1-dates")}</p>
                <ul className="w-full list-disc pl-4 flex flex-col gap-1.5 text-xs leading-snug text-white text-start mt-1 marker:text-blue-500">
                    <li>{t("job1-b1")}</li>
                    <li>{t("job1-b2")}</li>
                    <li>{t("job1-b3")}</li>
                    <li>{t("job1-b4")}</li>
                    <li>{t("job1-b5")}</li>
                    <li>{t("job1-b6")}</li>
                </ul>
                </div>
                <div className="hidden md:block w-[2px]   bg-gray-500 h-auto"></div>
                <div className="w-full h-auto flex flex-col items-start justify-start text-start gap-1.5">
                <h1 className="text-white text-xl">{t("job2-company")}</h1>
                <p className="text-blue-300 text-xs">{t("job2-role")}</p>
                <p className="text-white text-xs pt-1">{t("job2-studio")}</p>
                <p className="text-white text-xs">{t("job2-dates")}</p>
                <ul className="w-full list-disc pl-4 flex flex-col gap-1.5 text-xs leading-snug text-white text-start mt-1 marker:text-blue-500">
                    <li>{t("job2-b1")}</li>
                    <li>{t("job2-b2")}</li>
                    <li>{t("job2-b3")}</li>
                    <li>{t("job2-b4")}</li>
                    <li>{t("job2-b5")}</li>
                </ul>
                </div>
        </div>
     </div>
    </div>
  )
}

export default Experience;