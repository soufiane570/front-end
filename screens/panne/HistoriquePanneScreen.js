import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome';

const HistoriquePanneScreen = () => {
  const [selectedMateriel, setSelectedMateriel] = useState('');
  const [panneData, setPanneData] = useState(null);
  const [materiels, setMateriels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleSearchPanne();
    fetchMateriels();
    // Effectuez une requête initiale pour obtenir la liste initiale de pannes, si nécessaire
  }, []); // Assurez-vous de définir les dépendances correctes ici
  const fetchMateriels = async () => {
    try {
      const response = await fetch(`https://back-end-pfe.onrender.com/materiel`);
      const data = await response.json();
      setMateriels(data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des matériels:', error);
      setLoading(false);
    }
  };
  const handleSearchPanne = async () => {
    try {
      const response = await fetch(`https://back-end-pfe.onrender.com/panne/materiel/${selectedMateriel}`);
      const data = await response.json();
      setPanneData(data);
      console.log(data)
    } catch (error) {
      console.error('Erreur lors de la recherche de panne:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique de panne</Text>
      <View style={styles.searchContainer}></View>
      <Picker
        selectedValue={selectedMateriel}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedMateriel(itemValue)}
      >
        <Picker.Item label="Sélectionner un matériel" value="" />
        {/* Ajoutez ici des éléments pour chaque matériel */}
        {materiels.map((materiel, index) => (
            <Picker.Item key={index} label={materiel.nom_materiel} value={materiel.idMateriel.toString()} />
          ))}
      </Picker>
      {/* <TouchableOpacity onPress={handleSearchPanne}>
        <Icon name="search" size={20} color="black" style={styles.searchIcon} />
      </TouchableOpacity> */}
      <Button title="Rechercher par ID de matériel" onPress={handleSearchPanne} />
      { panneData &&
      panneData.length > 0 ?
       (
      <ScrollView>
        <View style={styles.panneDataContainer}>
          <Text style={styles.panneDataTitle}>Résultat de la recherche :</Text>
          {/* Affichez ici les données de la panne */}
          {/* Par exemple, vous pouvez mapper les données de panneData */}
          
          {panneData.map((panne, index) => (
            <View key={index} style={styles.panneItem}>
                <Text>Id de Panne : {panne.idPanne}</Text>
                <Text>Type Panne : {panne.typePanne}</Text>
                <Text>Description de Panne : {panne.descriptionPanne}</Text>
                <Text>Date de Panne : {panne.datePanne}</Text>
                <Text>Reparation de Panne : {panne.reparation}</Text>
                <Text>Date de Reparation de Panne : {panne.dateReparation}</Text>
                <Text>observation de Panne : {panne.observation}</Text>
              {/* Affichez d'autres détails de la panne si nécessaire */}
            </View>
          ))}
          
        </View>
        </ScrollView>
      ) 
      : 
      <View style={styles.panneDataContainer}>
        <Text style={styles.panneDataTitle}>Résultat de la recherche :</Text>
        <Text style={styles.noPanneMessage}>ce materiel na aucun de panne </Text>
    </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  panneDataContainer: {
    marginTop: 20,
  },
  panneDataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  panneItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  noPanneMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
    color: '#555', // Couleur du texte pour le message
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
//   picker: {
//     flex: 1, // Utilisez flex: 1 pour permettre au Picker de prendre tout l'espace disponible
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginRight: 10,
//     width:320,   
//     // Marge à droite pour séparer le Picker de l'icône
//   },
//   searchIcon: {
//     marginLeft: 10,
//   }
});

export default HistoriquePanneScreen;
