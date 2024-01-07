import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

function AboutScreen({navigation, route}) {

    const { itemName, itemId } = route.params;

    const onPressHandler = () => {
        // navigation.navigate('Home Screen');
        navigation.toggleDrawer();
      }
    
      return (
        <View style={styles.body}>
          <Text style={styles.text}>
            About Page
          </Text>
          <Pressable
            onPress={onPressHandler}
            style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
          >
            <Text style={styles.text}>
              Toggle Drawer
            </Text>
          </Pressable>
          <Text style={{fontWeight:'bold', marginTop:15}}>{itemName}</Text>
          <Text style={styles.text}>ID: {itemId}</Text>
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

  export default AboutScreen;