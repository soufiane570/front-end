import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MaterielCard = ({ materiel, navigation }) => {
    const handlePress = () => {
        // Navigation vers l'écran de détail du matériel
        navigation.navigate('DetailMaterielScreen', { materiel });
      };
  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.container}>
      <Image source={{ uri: materiel.imageMateriel }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{materiel.nom_materiel}</Text>
        <Text style={styles.serial}>Numéro de série: {materiel.numSerie}</Text>
        <Text style={styles.date}>Date de réception: {materiel.dateReception}</Text>
        <Text style={styles.state}>État: {materiel.etat}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serial: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    marginBottom: 5,
  },
  state: {
    fontSize: 16,
  },
});

export default MaterielCard;
