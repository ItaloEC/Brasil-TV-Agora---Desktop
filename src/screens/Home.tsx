import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import ReactPlayer from "react-player";

export default function Home({ route, navigation }) {
  // const canal = route.params ? route.params.canal : null

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 30 }}>Brasil TV Agora</Text>
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
      {/* <ReactPlayer
							// height={600}
							width={Dimensions.get('window').width * 0.8}
							autoPlay
							controls
							url={"http://100automoto.tv:1935/bgtv1/autotv/playlist.m3u8"}
						/> */}
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
