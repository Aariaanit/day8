import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';

function HomeScreen({navigation}) {
    
  const onPressHandler = () => {
    navigation.toggleDrawer();
  }
      return (
        <View style={styles.body}>
          <Text style={[
            GlobalStyle.CustomFont,
            styles.text
            ]}>
            Home Page
          </Text>
          <Pressable
            onPress={onPressHandler}
            style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
          >
            <Text style={styles.text}>
              Toggle Drawer
            </Text>
          </Pressable>
        </View>
      )
}


const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,
    }
  }) 
export default HomeScreen;