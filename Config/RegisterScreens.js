import { Navigation } from "react-native-navigation";
import { AirNBNLogin,AirNBNLogout, AirNBNExplore, AirNBNSave, AirNBNProfile } from "../Helper/constants";
import Login from "../Screens/Login/Login";
import Logout from '../Screens/Logout/Logout';
import Explore from "../Screens/Explore/Explore";
import Saved from "../Screens/Saved/Saved";
import Profile from "../Screens/Profile/Profile";

export function registerScreens() {
    const screenArrays = [
        {key: AirNBNLogout,value: Logout},
        {key: AirNBNLogin,value: Login},
        {key: AirNBNExplore,value: Explore},
        {key: AirNBNSave,value: Saved},
        {key: AirNBNProfile,value: Profile},
        {},
    ];

    screenArrays.forEach(function(item,index) {
        Navigation.registerComponent(item.key,() => item.value);
    });
}
