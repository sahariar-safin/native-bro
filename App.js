import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("")
  return (
    <View style={styles.container}>
      <Text>It is my Native Bro!</Text>
      <Text>And I am useing React Native for mobile application first time!</Text>
      <Text>Hi, {name}</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        style={{
          height: 40,
          width: 240,
          fontSize: 23,
          paddingLeft: 5,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue={name}
        onChangeText={text => setName(text)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
