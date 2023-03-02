import styled from 'styled-components/native';
import { Text } from '@ui-kitten/components';

export const HeartDetailScreen = () => {
  return (
    <ContainerScreen>
      <Text>HeartDetailScreen</Text>
    </ContainerScreen>
  );
}

const ContainerScreen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`