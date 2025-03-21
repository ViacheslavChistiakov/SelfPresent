import { TypeAnimation } from 'react-type-animation';


interface TypeEffectProps {
  sequence: (string | number)[];
}

const TypeEffect = ({ sequence }: TypeEffectProps) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="p"
      speed={50} 
      repeat={Infinity} 
      className="text-blue-300 text-sm inline-block overflow-hidden whitespace-nowrap max-sm:text-xs"
    />
  );
};

export default TypeEffect;
