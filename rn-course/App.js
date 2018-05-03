import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register AuthScreen
Navigation.registerComponent(
  'awesome-places.AuthScreen',
  () => AuthScreen,
  store,
  Provider
);

// Register SharePlaceScreen Screen
Navigation.registerComponent(
  'awesome-places.SharePlaceScreen',
  () => SharePlaceScreen,
  store,
  Provider
);

// Register FindPlaceScreen Screen
Navigation.registerComponent(
  'awesome-places.FindPlaceScreen',
  () => FindPlaceScreen,
  store,
  Provider
);

// Register PlaceDetail Screen
Navigation.registerComponent(
  'awesome-places.PlaceDetailScreen',
  () => PlaceDetailScreen,
  store,
  Provider
);

// Register SideDrawer Screen
Navigation.registerComponent(
  'awesome-places.SideDrawer',
  () => SideDrawer,
  store,
  Provider
);

// Register and export the start up Screen
export default () =>
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'awesome-places.AuthScreen',
      title: 'Login'
    }
  });
