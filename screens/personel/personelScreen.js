import React, { useEffect, useState } from 'react';
// import { View, Text, Button } from 'react-native';
import { View, Text, Button, FlatList, StyleSheet,SafeAreaView, ScrollView, RefreshControl,  ActivityIndicator} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

const API_URL = 'https://back-end-pfe.onrender.com';

const PersonelScreen = () => {
  const [personnel, setPersonnel] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const fetchData = async () => {
    try {
      // Récupérer les données pour chaque route
      const personnelResponse = await fetch(`${API_URL}/personnel/2`);
      const personnelData = await personnelResponse.json();
      setPersonnel(personnelData);
      setIsLoading(false);
      setIsRefreshing(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };
  const handleRefresh = () => {
    setIsRefreshing(true); // Définir isRefreshing sur true pour indiquer le début du rafraîchissement
    fetchData(); // Appeler fetchData pour récupérer à nouveau les données
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>En cours de récupération les Personel  . . .</Text>
            </View>
          );};
  const renderListItem = (title, data) => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.card}>
              {Object.entries(item).map(([key, value]) => (
                <Text key={key}>{key}: {value}</Text>
              ))}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
}
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#0000ff']}
            tintColor={'#0000ff'}
          />
        }
      >
        {renderListItem('Personnel:', personnel)}
      </ScrollView>
    </SafeAreaView>
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
      sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
      },
  });

export default PersonelScreen;
