import HomeScreen from './screens/Homescreen'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from './screens/Homescreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Welcome'}}
        />
        <Stack.Screen
        name="Second"
        component={SecondScreen}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


