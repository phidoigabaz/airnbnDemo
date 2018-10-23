import {StyleSheet} from 'react-native';
import colors from '/Users/admin/AirNBN/Helper/colors';

export const styles = StyleSheet.create({
    scrollContainer:{flex: 1,display: 'flex',backgroundColor: colors.green01},
    container:{flex: 1,justifyContent: 'center',backgroundColor: colors.green01,padding: 20},
    imageLogo:{width: 50,height: 50,marginTop: 50,},
    textLogo: {fontSize: 30,color: colors.white,fontWeight: '500',marginTop: 50,},
    textLogin: {textAlign:'right',fontSize: 20,color: colors.white,padding: 20, },
    viewButtonFacebook: {flexDirection: 'row',paddingVertical: 20, borderRadius: 30, backgroundColor: colors.white,marginTop: 50,justifyContent: 'center',alignItems: 'center',},
    textButtonFacebook: {fontSize: 16,color: colors.green01,alignItems: 'center',justifyContent: 'center'},
    textButtonRegister: {paddingVertical: 20, borderRadius: 30, backgroundColor: colors.green01, textAlign: 'center',marginTop: 16,borderColor: colors.white,borderWidth: 1.5,fontSize: 16,color: colors.white},
    textOption: {marginTop: 30,color: colors.white,fontSize: 16,fontWeight: '300'},
    facebookIcon: {color: colors.green01,position: 'relative',left: 20,zIndex: 8,},
});
