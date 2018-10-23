import {StyleSheet} from 'react-native';
import colors from '/Users/admin/AirNBN/Helper/colors';

export const styles = StyleSheet.create({
    container: {backgroundColor: colors.white,flex: 1,paddingHorizontal: 8,color: colors.lightBlack,},
    headerContainer: {flexDirection: 'row',height: 100,backgroundColor: colors.white,},
    nameHeader: {justifyContent: 'flex-start',fontSize: 30,fontWeight: '700',color: colors.lightBlack},
    editHeader: {justifyContent: 'flex-start',fontSize: 16,fontWeight: '300',color: colors.lightBlack,marginTop: 8,},
    avatarHeader: {justifyContent: 'flex-end',width: 70,height: 70,borderRadius: 35,backgroundColor: colors.lightBlack},
    viewStep: {borderRadius: 5,backgroundColor: colors.lightGray,height: 50,marginTop: 8,},
    textList:{color: colors.black,fontSize: 16},
    viewRow: {height: 70,borderBottomWidth: 1,borderBottomColor: colors.lightGray,},
    textRow: {color: colors.lightBlack,fontSize: 16,justifyContent: 'flex-start',paddingTop: 40,},
    imageRow: {justifyContent: 'flex-end'},
});