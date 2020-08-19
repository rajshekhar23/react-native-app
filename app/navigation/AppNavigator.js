import {createStackNavigator} from '@react-navigation/stack';
import NavigationStyles from './styles';
import * as React from 'react';
import {IconButton} from 'react-native-paper';
import LoginScreen from '../screens/LoginScreen/index';
import Carousel from '../screens/Carousel/index';
import leftArrow from '../assets/images/left-arrow.png';
import Colors from '../constants/index';
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
        //icon={navigation.route.name === 'Email Sign In' ? 'arrow-left' : 'menu'}
        icon={leftArrow}
        color={Colors.RIGHT_ARROW}
        size={20}
        style={NavigationStyles.headerLeftIcon}
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
        options={{
          headerShown: true,
          headerRight: null,
          headerStyle: {
            backgroundColor: '#FFF',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
