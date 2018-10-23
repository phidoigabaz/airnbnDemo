import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,Image,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from './styleLogout';
import FBSDK, {LoginManager} from 'react-native-fbsdk';
import {AirNBNLogin} from '/Users/admin/AirNBN/Helper/constants';

export default class Logout extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            textValue: "Welcome to Airnbn",
        }
    }
    onPressFacebook() {
        this.setState({ textValue: 'Login Facebook!!!'});
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
              if (result.isCancelled) {
                alert('Login was cancelled');
              } else {
                alert('Login was successful with permissions: '
                  + result.grantedPermissions.toString());
              }
            },
            function(error) {
              alert('Login failed with error: ' + error);
            }
          );
    }
    onPressRegister() {
        this.setState({ textValue: 'Register Account!!!'});
    }
    onPressLogin() {
        const {navigator} = this.props;
        navigator.push({
            screen: AirNBNLogin,
        });
    }

    render() {
        return (
            <ScrollView style = {styles.scrollContainer}>
                <View style = {styles.container}>
                    <TouchableOpacity onPress = {() => this.onPressLogin()}>
                        <Text style = {styles.textLogin}>Log In</Text>
                    </TouchableOpacity>
                    <Image source = {require('/Users/admin/AirNBN/Image/airbnb-logo.png')} style={styles.imageLogo}/>
                    <Text style= {styles.textLogo}>{this.state.textValue}</Text>
                    <TouchableOpacity onPress = {() => this.onPressFacebook()}>
                        <View style = {styles.viewButtonFacebook}>
                            <Image source = {require('/Users/admin/AirNBN/Image/icfacebook.png')} style = {{justifyContent: 'flex-start'}}/>
                            <Text style = {styles.textButtonFacebook}>Continue with Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.onPressRegister()}>
                        <Text style = {styles.textButtonRegister}>Creat Account</Text>
                    </TouchableOpacity>
                    <Text style = {styles.textOption}>More Option</Text>
                    <Text style = {styles.textOption}>By tapping Continue,Create of More Option</Text>
                </View>
            </ScrollView>
        );
    } 
}
