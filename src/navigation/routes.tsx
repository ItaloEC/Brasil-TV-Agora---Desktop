import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent";
import Home from "../screens/Home";
import Player from "../screens/Player";

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Player" component={Player} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
