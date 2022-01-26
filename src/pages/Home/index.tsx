import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <>
      <View style={styles.tobBar}>
        <Button onPress={() => navigation.toggleDrawer()} title={''}>
          <Text>Toggle</Text>
        </Button>
      </View>
      <View style={styles.container}>
        <Text>Bem vindo</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tobBar: {
    height: 50,
    alignItems: 'flex-start',
  },
});
