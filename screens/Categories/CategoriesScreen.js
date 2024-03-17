import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet,ActivityIndicator,RefreshControl } from 'react-native';

const API_URL = 'https://back-end-pfe.onrender.com'; // Remplacez cette URL par l'URL de votre API

const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/categorie`);
      const data = await response.json();
      setCategories(data);
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
  if (isLoading && categories.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>En cours de récupération les categorie de matériels...</Text>
      </View>
    );
  }
  const renderCategoryItem = ({ item }) => (
    <View style={styles.card}>
      <Text>Numéro de catégorie : {item.numCategorieMat}</Text>
      <Text>Désignation : {item.designation}</Text>
      <Text>Type de matériel : {item.typeMateriel}</Text>
      <Text>Caractéristique : {item.caracteristique}</Text>
      <Text>Quantité : {item.quantite}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.numCategorieMat.toString()}
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
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
