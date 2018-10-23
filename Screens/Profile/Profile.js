import React, {Component} from 'react';
import {View,TouchableOpacity,Text,FlatList,ScrollView,Image} from 'react-native';
import {styles} from '../Profile/styleProfile';
import colors from '../../Helper/colors';
import {Toolbar} from 'react-native-material-ui';
import {Icon} from 'react-native-vector-icons/FontAwesome';
//import listSetting from '/Users/admin/AirNBN/Helper/ListSetting';

var listSetting = [
    {
        "name": "Notifications",
        "image": "/Users/admin/AirNBN/Image/icsearch.png",
    },
    {
        "name": "invite friends",
        "image": "/Users/admin/AirNBN/Image/icuser.png",
    },
    {
        "name": "Refer a host",
        "image": "/Users/admin/AirNBN/Image/icNext.png",
    },
    {
        "name": "Setting",
        "image": "/Users/admin/AirNBN/Image/icheart.png",
    },
];
export default class Profile extends Component {
    constructor(props) {
        super(props)
    }

    renderRow({item}) {
        return (
            <View style={styles.viewRow}>
            <Text style={styles.textRow}>{item.name}</Text>
            {/* <Image source={require()} style={styles.imageRow}/> */}
        </View>
        );
    }
    render() {
        console.log("sdfkldsfjklhfdjsfhdjks",listSetting);
        return(
            <ScrollView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.nameHeader}>Tạ</Text>
                        <Text style={styles.editHeader}>View and edit profile</Text>
                    </View>
                    <Image source={require('/Users/admin/AirNBN/Image/icfacebook.png')} style={styles.avatarHeader}></Image>
                </View>
                <Text style={{color: colors.lightBlack}}>3 step left</Text> 
                <View style={styles.viewStep}></View>
                <FlatList
                    data={listSetting}
                    renderItem={({item}) => this.renderRow({item})}
                    showsVerticalScrollIndicator={false}/>
             </View>
            </ScrollView>
        );
    }
}
