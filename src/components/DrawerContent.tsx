import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
} from "react-native-paper";

import M3U8FileParser from "m3u8-file-parser";
import axios from "axios";
const reader = new M3U8FileParser();

function DrawerContent(props) {
  const [listaDeCanais, setlistaDeCanais] = useState([]);
  const [CanaisFiltrados, setCanaisFiltrados] = useState([]);

  useEffect(() => {
    async function getCanais() {
      const result = await axios(
			// 	// 'https://iptv-org.github.io/iptv/index.category.m3u', //->>>> todos os canais
			// 	// 'https://iptv-org.github.io/iptv/categories/auto.m3u', //->>>> auto
			// 	// 'https://iptv-org.github.io/iptv/categories/documentary.m3u', // -->>>> documentary
        'https://iptv-org.github.io/iptv/countries/br.m3u', // -->>>> brasil
			);

			reader.read(result.data);
			var lista = reader.getResult().segments;
			setlistaDeCanais(lista);
			setCanaisFiltrados(lista);
		}
    getCanais();
  }, []);

  return (
    <DrawerContentScrollView {...props} openByDefault>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: "https://reactjs.org/logo-og.png",
            }}
            size={50}
          />
          <Title style={styles.title}>Brasil TV Agora</Title>
          <Caption style={styles.caption}>
            {listaDeCanais.length} canais
          </Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                Github: ItaloEC
              </Paragraph>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          {listaDeCanais.map((canal, index) => {
            let title = `Canal ${index}`;
            if (canal.inf) {
              title = canal.inf.title;
            }
            return (
              <DrawerItem
                key={index.toString()}
                icon={() => (
                  <Avatar.Image
                    source={{
                      uri: canal.inf?.tvgLogo,
                    }}
                    size={50}
                  />
                )}
                label={title}
                onPress={() => {
                  props.navigation.navigate("Feed", { canal: canal });
                }}
              />
            );
          })}
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
