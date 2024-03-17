import * as React from 'react';
import {Text, View, StyleSheet, Button, BackHandler, Alert} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterielListScreen from './materiel/MaterielListScreen';
import BackButton from './components/BackButton';
import AddMateriel from './materiel/AddMateriel';
import PersonelScreen from './personel/personelScreen';
import CategoriesScreen from './Categories/CategoriesScreen';
import HistoriquePanneScreen from './panne/HistoriquePanneScreen'

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
  return (
    <Drawer.Navigator >
            <Drawer.Screen
                name="Personel"
                component={PersonelScreen}
            />
            <Drawer.Screen
                name="Catégorie de matériel"
                component={CategoriesScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <>
                        <BackButton goBack={navigation.goBack} />
                        </>
                    ),
                })}
            />
            <Drawer.Screen
            name="Liste Materiel"
            component={MaterielListScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <>
                        <BackButton goBack={navigation.goBack} />
                        </>
                    ),
                })}
            />
            <Drawer.Screen
                name="Historique de panne"
                component={HistoriquePanneScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <>
                        <BackButton goBack={navigation.goBack} />
                        </>
                    ),
                })}
            />
            <Drawer.Screen
                name="Prise en charge"
                component={MaterielListScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <>
                        <BackButton goBack={navigation.goBack} />
                        </>
                    ),
                })}
            />
            <Drawer.Screen
                name="Local"
                component={MaterielListScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <>
                        <BackButton goBack={navigation.goBack} />
                        </>
                    ),
                })}
            />
            <Drawer.Screen
                name="Transfert"
                component={MaterielListScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <>
                        <BackButton goBack={navigation.goBack} />
                        </>
                    ),
                })}
            />
            <Drawer.Screen
                name="Signer"
                component={MaterielListScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <>
                        <BackButton goBack={navigation.goBack} />
                        </>
                    ),
                })}
            />
            <Drawer.Screen
                name="Dépanner"
                component={MaterielListScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <>
                        <BackButton goBack={navigation.goBack} />
                        </>
                    ),
                })}
            />
        </Drawer.Navigator>
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