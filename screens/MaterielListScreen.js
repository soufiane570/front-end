import React, { useEffect, useState } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import MaterielCard from './components/MaterielCard';

const API_URL = 'https://back-end-pfe.onrender.com/materiel'
const MaterielListScreen = () => {
  const [materiels, setMateriels] = useState([]);
  // Fetch data from API or local storage
  useEffect(() => {
    // Code to fetch data from your database or API
    // Example:
    const fetchData = async () => {
      try {
        // Fetch data from your API endpoint or local storage
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
        {/* <ScrollView style={{}}> */}
            {/* <View> */}
      <FlatList
        data={materiels}
        keyExtractor={(item) => item.idMateriel.toString()}
        renderItem={({ item }) => <MaterielCard materiel={item} />}
      />
      {/* </View> */}
      {/* </ScrollView> */}
    </View>
    
  );
};
export default MaterielListScreen;
