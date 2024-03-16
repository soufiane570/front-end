// import { StatusBar } from 'expo-status-bar';
import 'expo-dev-client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
// import { StyleSheet} from 'react-native';
import Home from './screens/Home'
import LoginForm from './screens/loginForm';
import AddMateriel from './screens/materiel/AddMateriel';
import FormMateriel from './screens/formMateriel';
import ForgetPasswordScreen from './screens/forgetpassword';
import Dashboard from './screens/Dashboard';
import MaterielListScreen from './screens/MaterielListScreen';
// import DetailMaterielScreen from './screens/DetailMaterielScreen';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="LoginForm" component={LoginForm} options={{ headerShown: false}} />
        <Stack.Screen name="AddMateriel" component={AddMateriel} options={{ headerShown: false }}/>
          <Stack.Screen name="FormMateriel" component={FormMateriel} options={{ headerShown: false }}/>
          <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
          <Stack.Screen name="MaterielListScreen" component={MaterielListScreen} options={{ headerShown: false }}/>
          {/* <Stack.Screen name="DetailMaterielScreen" component={DetailMaterielScreen} options={{ headerShown: false }}/> */}
    </Stack.Navigator> 
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
