import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TravelStack from './TravelStack';

const AppNavigationContainer: React.FC<{}> = function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <TravelStack />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
