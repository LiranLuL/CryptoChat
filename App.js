import React from 'react';
import {ImageBackground,Image,TouchableOpacity,StyleSheet, Text, View, TextInput } from 'react-native';
export default function App() {
  return (
    <View style={styles.InputForm}>
      <ImageBackground source={require("C:/Users/Liran/Cryptochay/gradient.png")} style={styles.InputForm}>
      <TextInput style={styles.Input}
        defaultValue="Password"
      />
      <TouchableOpacity style={styles.Button}
       activeOpacity={0.5}
       >
        <Text style={{fontSize:39,}}>Sign</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  InputForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
  },
  Button:{
    height: 60,
    width:200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    padding: 12,
    borderRadius: 26,
    backgroundColor:'#8021DF',
  },
  Input:{
    textDecorationColor:"white",
    marginTop: 12,
    padding: 12,
    borderRadius: 26,
      height: 60,
      width:300,  
      marginBottom:50,
      backgroundColor:"#BC9CEA",
  },
  ImageBackground:
  {
   
  }
});
