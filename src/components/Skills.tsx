import React from 'react';
import { ChevronLeft, ChevronRight, FlaskConical } from 'lucide-react';
import { Swiper as SwiperType } from 'swiper';
import 'react-circular-progressbar/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import logoReact from '../assets/react-logo.svg';
import nextJsLog from '../assets/nextJsLogo.svg';
import tsLogo from '../assets/tsLogo.png';
import jsLogo from '../assets/jsLogo.svg';
import htmlLogo from '../assets/htmlLogo.svg';
import cssLogo from '../assets/cssLogo.svg';
import tlLogo from '../assets/tlLogo.svg';
import nodeLogo from '../assets/NodejsLogo.svg';
import figmaLogo from '../assets/figma.png';
import gitLogo from '../assets/gh-logo.svg';
import dockerLogo from '../assets/docker.png';
import postmanLogo from '../assets/postman.svg';
import mongoDBLogo from '../assets/mongoDbLogo.svg';
import wbLogo from '../assets/webpack.svg';
import jestLogo from '../assets/jest.png';
import restLogo from '../assets/restLogo.png';
import storyLogo from '../assets/storybooksvg.svg';
import webSocketLogo from '../assets/wb-logo.svg';
import '../App.css';
import SlideOne from '../entites/SlideOne';
import 'swiper/swiper-bundle.css'; 
import { useTranslation } from 'react-i18next';

const skillsOne = [
  { name: 'React', logo: logoReact, percentage: 100 },
  { name: 'Next.js', logo: nextJsLog, percentage: 95 },
  { name: 'TypeScript', logo: tsLogo, percentage: 99 },
  { name: 'JavaScript', logo: jsLogo, percentage: 100 },
  { name: 'HTML', logo: htmlLogo, percentage: 95 },
  { name: 'CSS', logo: cssLogo, percentage: 85 },
];

const skillsTwo = [
  { name: 'Tailwind CSS', logo: tlLogo, percentage: 97 },
  { name: 'Node.js', logo: nodeLogo, percentage: 70 },
  { name: 'MongoDB', logo: mongoDBLogo, percentage: 72 },
  { name: 'GitHub', logo: gitLogo, percentage: 83 },
  { name: 'Rest API', logo: restLogo, percentage: 95 },
  { name: 'Socket.io', logo: webSocketLogo, percentage: 71 },
];

const skillsThree = [
  { name: 'Docker', logo: dockerLogo, percentage: 69 },
  { name: 'Postman', logo: postmanLogo, percentage: 90 },
  { name: 'Figma', logo: figmaLogo, percentage: 72 },
  { name: 'WebPack', logo: wbLogo, percentage: 83 },
  { name: 'Jest', logo: jestLogo, percentage: 70 },
  { name: 'StoryBook', logo: storyLogo, percentage: 71 },
];

const Skills: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null);
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = React.useState(0);
  const totalSlides = 3;



  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext(); 
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev(); 
    }
  };


  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.realIndex); 
  };
  return (
    <div className="w-full lg:w-[53%] h-[10%] mx-auto flex flex-col relative right-35 lg:w-[30%] left-3 max-sm:w-full flex justify-center">
      <div className="w-full  flex flex-col  bg-zinc-900 rounded-[10%] p-5 gap-4">
        <div className="w-full flex flex-row gap-5 justify-center items-center">
          <FlaskConical color="white" />
          <h1 className="text-white text-lg">{t("Skills")}</h1>
        </div>
        <div className="flex justify-center items-center mt-4">
        <button
            disabled={activeSlide === 0}
            onClick={handlePrev}
            className="cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-full">
            <ChevronLeft />
          </button>
          <div className="flex justify-center text-center text-white pl-4">
            {activeSlide + 1} / {totalSlides}
          </div>
          <button
            disabled={activeSlide === totalSlides - 1}
            onClick={handleNext}
            className="cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-full ml-4">
            <ChevronRight />
          </button>
        </div>
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          navigation={false}
          pagination={{ clickable: true }}
          loop={false}
          modules={[Navigation, Pagination]}
          initialSlide={activeSlide}
          speed={0}
          className="w-full h-auto"
          >
          <SwiperSlide>
            <SlideOne skills={skillsOne} isActive={activeSlide === 0} />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne skills={skillsTwo} isActive={activeSlide === 1} />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne skills={skillsThree} isActive={activeSlide === 2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
