import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import AuthContext from '../../contexts/auth';

export default function SignIn() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext);

  const handleSignIn = () => {
    const result = signIn(user, password);

    console.log('result signIn screen', result);
  };

  return (
    <View>
      <Text>Login</Text>
      <Text>name: 'test', password: '123456'</Text>
      <TextInput onChangeText={setUser} />
      <TextInput onChangeText={setPassword} />
      <Button onPress={handleSignIn} title={''}>
        <Text>Login</Text>
      </Button>
    </View>
  );
}
