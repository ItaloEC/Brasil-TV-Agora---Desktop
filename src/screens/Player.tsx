import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import ReactPlayer from "react-player";
import { Video } from "expo-av";

export default function Feed({ route, navigation }) {
  const { canal } = route.params;

  // function _handleVideoRef (component){
  //   const playbackObject = component;
  // }

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 30, textAlign: 'center' }}>{canal.inf.title}</Text>
      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Text style={{ color: "#fff" }}>Ver Lista de Canais</Text>
      </TouchableOpacity>
      {Platform.OS == "web" ? (
        <ReactPlayer
          height={300}
          width={Dimensions.get("window").width * 0.95}
          autoPlay
          controls
          url={canal.url}
        />
      ) : (
        <Video
          source={{
            uri: canal.url,
          }}
          useNativeControls
          shouldPlay
          resizeMode="contain"
          style={{ width: "95%", height: 300 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159ca",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
