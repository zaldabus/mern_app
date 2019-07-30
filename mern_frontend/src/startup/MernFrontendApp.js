import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/mernFrontendStore';
import MernFrontendContainer from '../containers/MernFrontendContainer';

const MernFrontendApp = () => (
  <Provider store={configureStore()}>
    <MernFrontendContainer />
  </Provider>
);

export default MernFrontendApp;