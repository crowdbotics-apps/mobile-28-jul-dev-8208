import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen39444Navigator from '../features/BlankScreen39444/navigator';
import BlankScreen29443Navigator from '../features/BlankScreen29443/navigator';
import BlankScreen19442Navigator from '../features/BlankScreen19442/navigator';
import BlankScreen39441Navigator from '../features/BlankScreen39441/navigator';
import BlankScreen29438Navigator from '../features/BlankScreen29438/navigator';
import BlankScreen19437Navigator from '../features/BlankScreen19437/navigator';
import BlankScreen39436Navigator from '../features/BlankScreen39436/navigator';
import BlankScreen19425Navigator from '../features/BlankScreen19425/navigator';
import BlankScreen39424Navigator from '../features/BlankScreen39424/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen39444: { screen: BlankScreen39444Navigator },
BlankScreen29443: { screen: BlankScreen29443Navigator },
BlankScreen19442: { screen: BlankScreen19442Navigator },
BlankScreen39441: { screen: BlankScreen39441Navigator },
BlankScreen29438: { screen: BlankScreen29438Navigator },
BlankScreen19437: { screen: BlankScreen19437Navigator },
BlankScreen39436: { screen: BlankScreen39436Navigator },
BlankScreen19425: { screen: BlankScreen19425Navigator },
BlankScreen39424: { screen: BlankScreen39424Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
