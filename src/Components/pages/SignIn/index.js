import React from 'react';
import { Container, Title, Button } from './styles';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation()

  const goSignUp = () => {
    navigation.navigate('SignUp')
  }
  return (
    <Container>
      <Button onPress={goSignUp}>
        <Title>Entrar</Title>
      </Button>
    </Container>
  )
}
export default SignIn;