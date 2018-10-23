import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { styles } from './styleExplore';

export default class Explore extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Explore</Text>
            </View>
        );
    }
}