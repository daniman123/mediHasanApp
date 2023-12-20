import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavButton from "../components/ui/NavButton";
import {
  createTable,
  deleteAllMeditations,
  getAllTableData,
} from "../lib/services/database/actions";
import { formatTimeValueDisplay } from "../lib/utils";

const renderItem = ({ item }: { item: any }) => (
  <View style={styles.item}>
    <Text>Duration: {formatTimeValueDisplay(item.duration)}</Text>
    <Text>Date: {item.endDateTime}</Text>
  </View>
);

const Settings = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    createTable();
    getAllTableData(setData);
  }, []);

  return (
    <View style={styles.container}>
      <NavButton
        route="/"
        styles={styles.goBackButton}
        stylesText={styles.goBackButtonText}
        textLabel="X"
      />
      <Text>settings</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      <TouchableOpacity onPress={deleteAllMeditations} style={styles.deleteAllButton}>
        <Text>Delete All logs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  item: {
    padding: 10,
    marginVertical: 30,
    marginHorizontal: 16,
    width: 230,
    height: 75,
    borderWidth: 1,
  },
  title: {
    fontSize: 32,
    color: "white",
  },
  deleteAllButton: {
    position: "absolute",
    bottom: 100,
  },
  goBackButton: {
    position: "absolute",
    top: 55,
    left: 30,
  },
  goBackButtonText: {
    fontSize: 25,
    color: "black",
  },
});
