import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor="#000000"
        drawerStyle={{
          backgroundColor: "#898989",
          width: 250,
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home Screen",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={24}
                color={focused ? "#0080ff" : "#999999"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "About Screen",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="person"
                size={24}
                color={focused ? "#0080ff" : "#999999"}
              />
            ),
          }}
          initialParams={{ itemName: "Item from Drawer", itemId: 12 }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: "Settings Screen",
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="settings"
                size={24}
                color={focused ? "#0080ff" : "#999999"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
