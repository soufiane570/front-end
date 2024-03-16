import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default function Dashboard({navigation}) {
  const MaterielList = () => {
    navigation.navigate('MaterielListScreen');
  };

  return (
    <View style={styles.container}>
      <Text > Dashboard</Text>
      <Button title="MaterielList" onPress={MaterielList} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // flexDirection: "column",
    justifyContent: "center",
  },
});