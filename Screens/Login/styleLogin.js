import {StyleSheet,Dimensions} from 'react-native';
import colors from '/Users/admin/AirNBN/Helper/colors';

const window = Dimensions.get('window')
export const styles = StyleSheet.create({
    scrollContainer: {flex: 1,display: 'flex',backgroundColor: colors.green01},
    textLogo: {marginTop: 50,fontSize: 30,fontWeight: '400',color: colors.white,marginLeft: 16,},
    container:{flex: 1,backgroundColor: colors.green01,},
    textInputEmail: {fontSize: 16,fontWeight: '700',marginLeft: 16,color: colors.white,marginTop: 50,},
    textInputPassword: {fontSize: 16,fontWeight: '700',color: colors.white,marginTop: 50,textAlign: 'left'},
    textInputShow: {fontSize: 16,fontWeight: '700',color: colors.white,marginTop: 50,textAlign: 'right'},
    inputEmail:{paddingVertical: 12,marginHorizontal: 16,borderBottomColor: colors.white,borderBottomWidth: 1,color:colors.white,},
    viewInput:{flexDirection: 'row',justifyContent: 'space-between',paddingHorizontal: 16,},
    imageLogo:{},
    imageNext:{alignItems: 'center',},
    viewBottom:{alignSelf: 'flex-end',marginTop: 200,width: 80,height: 80,backgroundColor: colors.green03,marginRight: 16,borderRadius: 40},
});
