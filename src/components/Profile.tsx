import React from 'react'
import { PersonStanding, NotebookTabs } from 'lucide-react'
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
const { t } = useTranslation();
  return (
    <div className="w-full  lg:w-full h-[680px]  mx-auto flex grow-1 rounded-[10%] flex-col relative right-35 lg:w-[30%] left-1 max-sm:w-full max-sm:h-auto flex justify-center animate-fade-in">
    <div className="w-full h-full flex flex-col bg-zinc-900 rounded-[10%] p-8 gap-8 justify-between">
        <div className="w-full md:w-full  flex flex-row gap-5 justify-center items-center">
        <PersonStanding color="white" width={20} height={20} />
          <h1 className="text-white text-lg">{t("Profile")}</h1>
        </div>
        <div className="w-full h-auto pt-2 flex flex-col md:flex-col justify-between max-sm:flex-col xs:flex-col gap-5">
        <h1 className="text-white text-start text-3xl"><span className="text-blue-500">{t("About")}</span> {t("me")}</h1>
        <p className="text-white text-base text-start">
        {t("part-1a")} <span className="text-blue-500">{t("part-1b")}</span> {t("part-1c")}
        </p>
        <p className="text-white text-base text-start">
        {t("part-2a")} <span className="text-blue-500">{t("part-2b")}</span>{t("part-2c")}
        </p>
        <p className="text-white text-base text-start">
        {t("part-3a")} <span className="text-blue-500">{t("part-3b")}</span>.
        </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="w-full flex flex-row mx-auto pt-2 items-center justify-center gap-2">
                <NotebookTabs  color='white' />
                <h1 className="text-white text-lg">{t("Contacts")}</h1>
            </div>
           <div className="w-full flex flex-row gap-4 max-md:flex-col">
           <div className="w-full flex flex-col items-center justify-center gap-4">
                    <div className="w-full flex flex-row text-start items-center gap-3">
                        <h2 className="text-blue-500 text-lg max-sm:text-xs">
                        Gmail:
                        </h2>
                        <p className="text-white text-base max-sm:text-sm">chystiakov.vycheslav@gmail.com</p>
                    </div>
                    <div className="w-full flex flex-row text-start items-center gap-3">
                        <h2 className="text-blue-500 text-lg max-sm:text-xs">
                        WhatsApp:
                        </h2>
                        <p className="text-white text-base max-sm:text-sm">+995 599 103 341</p>
                    </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                    <div className="w-full flex flex-row text-start items-center gap-3">
                    <h2 className="text-blue-500 text-lg max-sm:text-xs">
                    Telegram:
                    </h2>
                        <p className="text-white text-base max-sm:text-sm"><a className="hover:text-purple-500" href="https://t.me/hudozhnik4life">@hudozhnik4life</a></p>
                    </div>
                    <div className="w-full flex flex-row text-start items-center gap-3">
                        <h2 className="text-blue-500 text-lg max-sm:text-xs">
                        Linkedin:
                        </h2>
                        <p className="text-white text-base max-sm:text-sm"><a className="hover:text-purple-500" href="https://www.linkedin.com/in/vycheslav-chistiakov-045228265/">Vycheslav Chistiakov</a></p>
                    </div>
            </div>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Profile;