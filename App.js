import * as React from 'react';
import { Platform, StyleSheet, Text, View,Image } from 'react-native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CryptoChat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'up',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo:{
    fontSize: 30,
  }
 
});
