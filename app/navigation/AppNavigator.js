import {createStackNavigator} from '@react-navigation/stack';
import NavigationStyles from './styles';
import * as React from 'react';

import LoginScreen from '../screens/LoginScreen/index';
import Carousel from '../screens/Carousel/index';

const Stack = createStackNavigator();

// TODO Add const, replace icon logic using notification logic and icon logic also
const customHeader = (navigation) => {
  return {
    headerStyle: NavigationStyles.navHeader,
    headerTintColor: '#fff',
    headerBackTitleVisible: false,
    cardStyle: {backgroundColor: '#FFFFFF'},
    headerRight: () => (
      <IconButton
        icon="bell"
        color={Colors.white}
        size={20}
        style={NavigationStyles.headerRight}
      />
    ),
    headerLeft: () => (
      <IconButton
        icon={navigation.route.name === 'Email Sign In' ? 'arrow-left' : 'menu'}
        color={Colors.white}
        size={20}
        style={NavigationStyles.headerRight}
        onPress={() => {
          navigation.route.name === 'Email Sign In'
            ? navigation.navigation.goBack()
            : navigation.navigation.toggleDrawer();
        }}
      />
    ),
  };
};

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={(navigation) => customHeader(navigation)}>
      <Stack.Screen
        name="Carousel"
        component={Carousel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
