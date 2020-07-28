import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
