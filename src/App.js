import './App.css';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import NewProductScreen from './screens/NewProductScreen/NewProductScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Meals Planner' }}/>
      <Stack.Screen name="NewProduct" component={NewProductScreen} options={{ title: 'Meals Planner - Add new product' }} />
    </Stack.Navigator>
  );
}

export default App;
