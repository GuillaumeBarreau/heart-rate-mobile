
import { Button } from '@ui-kitten/components';
import styled from 'styled-components/native';

import { HeartRateSvgAnimateComponent } from "../HeartRateSvgAnimateComponent";

export const HeartRateSvgAnimateContainer = ({item}) => {
  
  const delayHeartRateInMs: number = Math.floor((60 / Number(item.fcm)) * 1000)
  const durationAnimate = (delayHeartRateInMs >= 1000) ?
    delayHeartRateInMs : delayHeartRateInMs * 4

  return (
    <RingContainer>
      {
        delayHeartRateInMs >= 1000 ?
        <HeartRateSvgAnimateComponent delay={durationAnimate} duration={durationAnimate} /> :
        <>
          <HeartRateSvgAnimateComponent delay={0} duration={durationAnimate} />
          <HeartRateSvgAnimateComponent delay={delayHeartRateInMs} duration={durationAnimate}/>
          <HeartRateSvgAnimateComponent delay={delayHeartRateInMs * 2} duration={durationAnimate}/>
          <HeartRateSvgAnimateComponent delay={delayHeartRateInMs * 3} duration={durationAnimate}/>
        </>
      }
    </RingContainer>
  );
}

const RingContainer = styled.TouchableOpacity`
  position: absolute;
  top: 75px;
  right: 125px;
`