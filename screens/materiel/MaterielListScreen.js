import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator,RefreshControl } from 'react-native';
import MaterielCard from '../components/MaterielCard';

const API_URL = 'https://back-end-pfe.onrender.com/materiel'
const MaterielListScreen = () => {
  const [materiels, setMateriels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  // Fetch data from API or local storage
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMateriels(data);
      setIsLoading(false);
      setIsRefreshing(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };
  const handleRefresh = () => {
    setIsRefreshing(true); // Définir isRefreshing sur true pour indiquer le début du rafraîchissement
    fetchData(); // Appeler fetchData pour récupérer à nouveau les données
  };

  if (isLoading && materiels.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>En cours de récupération des matériels...</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={materiels}
        keyExtractor={(item) => item.idMateriel.toString()}
        renderItem={({ item }) => <MaterielCard materiel={item} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#0000ff']}
            tintColor={'#0000ff'}
          />
        }
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MaterielListScreen;
