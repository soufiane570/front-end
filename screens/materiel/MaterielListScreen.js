import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import MaterielCard from '../components/MaterielCard';

const API_URL = 'https://back-end-pfe.onrender.com/materiel'
const MaterielListScreen = () => {
  const [materiels, setMateriels] = useState([]);
  // Fetch data from API or local storage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMateriels(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <View>
      <FlatList
        data={materiels}
        keyExtractor={(item) => item.idMateriel.toString()}
        renderItem={({ item }) => <MaterielCard materiel={item} />}
      />
    </View>
    
  );
};
export default MaterielListScreen;
