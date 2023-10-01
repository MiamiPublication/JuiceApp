import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartVy from './views/StartVy';
import DetailView from './views/DetailView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartVy'>
        <Stack.Screen name='StartVy' component={StartVy} options={{title: 'Juices'}}/>
        <Stack.Screen name='DetailView' component={DetailView} options={{title: 'Detail View'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;