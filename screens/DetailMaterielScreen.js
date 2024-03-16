import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailMaterielScreen = ({ route }) => {
  const { materiel } = route.params;
  const handleUpdate = () => {
    // Navigation vers l'écran de mise à jour du matériel
    // Vous pouvez passer l'objet "materiel" en tant que paramètre si nécessaire
    // navigation.navigate('UpdateMateriel', { materiel });
  };
  const handleDelete = () => {
    // Code pour supprimer le matériel
  };
  return (
    <View>
      <Text>Nom: {materiel.nom}</Text>
      <Text>Numéro de série: {materiel.numSerie}</Text>
      <Text>Date de réception: {materiel.dateReception}</Text>
      <Text>État: {materiel.etat}</Text>
      <Button title="Mettre à jour" onPress={handleUpdate} />
      <Button title="Supprimer" onPress={handleDelete} />
    </View>
  );
};

export default DetailMaterielScreen;
