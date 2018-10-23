import {Navigation} from 'react-native-navigation';

import {registerScreens} from './RegisterScreens';
import {AirNBNLogout,AirNBNLogin,AirNBNExplore,AirNBNSave,AirNBNProfile} from '../Helper/constants';
import colors from '../Helper/colors';

registerScreens()

export function startLogin() {
    Navigation.startSingleScreenApp({
        screen: {
            screen: AirNBNLogout,
            navigatorStyle: {
                navBarHidden: true,
            }
        }
    });
}

export function startMainScreen() {
    Navigation.startTabBasedApp({
        tabs: [
            {
              label: 'Explore',
              screen: AirNBNExplore, // this is a registered name for a screen
              icon: require('../Image/icsearch.png'),
              selectedIcon: require('../Image/icsearch.png'), // iOS only
              title: '',
            },
            {
              label: 'Save',
              screen: AirNBNSave,
              icon: require('../Image/icheart.png'),
              selectedIcon: require('../Image/icheart.png'), // iOS only
              title: '',
            },
            {
                label: 'Profile',
                screen: AirNBNProfile, // this is a registered name for a screen
                icon: require('../Image/icuser.png'),
                selectedIcon: require('../Image/icuser.png'), // iOS only
                title: '',
            },
          ],
          appStyle: {
            tabBarHidden: false,
            tabBarBackgroundColor: colors.green01,
            tabBarButtonColor: '#ffffff',
            tabBarHideShadow: false,
            tabBarSelectedButtonColor: colors.green03,
            tabBarTranslucent: false,
            tabFontFamily: 'Avenir-Medium',  // existing font family name or asset file without extension which can be '.ttf' or '.otf' (searched only if '.ttf' asset not found)
            tabFontSize: 10,
            selectedTabFontSize: 12,
          },
    });
}
