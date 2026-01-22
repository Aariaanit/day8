import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle';

function SettingsScreen({navigation}) {
    
  const onPressHandler = () => {
    
    navigation.toggleDrawer();
  }
      return (
        <View style={styles.body}>
          <Text style={[styles.text, GlobalStyle.CustomFont]}>
            Settings Page
          </Text>
          <Pressable
            onPress={onPressHandler}
            style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
          >
            <Text style={[styles.text, GlobalStyle.CustomFont]}>
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
export default SettingsScreen;