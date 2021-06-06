import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';

type Props = {};

export const Lottie:React.FC<Props> = () => {

  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('loaderEffect');
    if(animationContainer.current){
      lottie.loadAnimation({
        container: animationContainer.current,
        path: 'https://assets4.lottiefiles.com/packages/lf20_9dmzmwdm.json',
      });
    }
  },[]);

  return (
    <Wrap>
      <div ref={animationContainer} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width:500px;
  height:500px;
`;