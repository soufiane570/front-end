import * as React from 'react';
import {Text, View, StyleSheet, Button, BackHandler, Alert} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterielListScreen from './materiel/MaterielListScreen';
import BackButton from './components/BackButton';
import AddMateriel from './materiel/AddMateriel';

export default function Dashboard({navigation}) {
  const Drawer = createDrawerNavigator();
  useFocusEffect(
    React.useCallback(() => {
      const handleBackPress = () => {
        Alert.alert(
          'Exit App',
          'Are you sure you want to exit?',
          [
            { text: 'Cancel', onPress: () => null, style: 'cancel' },
            { text: 'OK', onPress: () => BackHandler.exitApp() },
          ],
          { cancelable: false }
        );
        return true;
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => {
        backHandler.remove();
      };
    }, [])
  );
  // const MaterielList = () => {
  //   navigation.navigate('MaterielListScreen');
  // };

  return (
    <Drawer.Navigator >
            <Drawer.Screen
                name="Liste Materiel"
                component={MaterielListScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <>
                        {/* <BackButton goBack={navigation.goBack} /> */}
                        {/* <NotificationButton not={()=>{navigation.navigate('notification')}}/> */}
                        </>
                    ),
                })}
            />
            <Drawer.Screen
                name="Ajouter un materiel"
                component={AddMateriel}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <>
                        <BackButton goBack={navigation.goBack} />
                        {/* <NotificationButton not={()=>{navigation.navigate('notification')}}/> */}
                        </>
                    ),
                    
                })}
            />
        </Drawer.Navigator>
    // <View style={styles.container}>
    //   <Text > Dashboard</Text>
    //   <Button title="MaterielList" onPress={MaterielList} />
    // </View>
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