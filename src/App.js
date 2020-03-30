import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import animation from './loading.json';

const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 10px 50px 10px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  background: orange;
  height: 60px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  background: rgb(59, 59, 59);
`;

const Text = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

const App = () => {
  var animationRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [label, setLabel] = useState('Play');

  const playPause = () => {
    setPlay(!play);
    if (!play) {
      animationRef.play();
      setLabel('Stop');
    } else {
      animationRef.reset();
      setLabel('Play');
    }
  };

  return (
    <Wrapper>
      <LottieView
        ref={animation => {
          animationRef = animation;
        }}
        source={animation}
        loop
      />
      <Button onPress={() => playPause()}>
        <Text>{label}</Text>
      </Button>
    </Wrapper>
  );
};

export default App;
