import React from 'react';
import { NavigationContainar } from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';

export default () => {
  return (
    <NavigationContainar>
      <MainStack />
    </NavigationContainar>
  )
}