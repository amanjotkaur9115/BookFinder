import AnDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";
import Home from './../../pages/Home';
import Details from './../../pages/Details';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  const [tabBackground, setTabBackground] = useState();
  return (

      <Tab.Navigator
        activeColor="black"
        inactiveColor="#3e2465"
        barStyle={{
          backgroundColor: tabBackground,
        }}>
        <Tab.Screen
          name="Feed"
          component={Home}
          listeners={{
            tabPress() {
              setTabBackground("#D9678D");
            },
          }}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <AnDesign name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Details}
          listeners={{
            tabPress() {
              setTabBackground("rgba(56,175,209,255)");
            },
          }}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                onPre
                name="bell"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          listeners={{
            tabPress() {
              setTabBackground("#89AD61");
            },
          }}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>

  );
};

export default BottomTabNavigation;