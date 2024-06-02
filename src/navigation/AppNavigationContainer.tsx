import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TravelTabs from './TravelTabs';
import HomeStack from './HomeStack';

const AppNavigationContainer: React.FC<{}> = function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
