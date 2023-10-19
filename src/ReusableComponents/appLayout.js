import React from "react"
import { View , Text , StyleSheet , TouchableHighlight , Image, ScrollView,useWindowDimensions } from "react-native"
import { useDimensions } from "@react-native-community/hooks";
import {Icon} from 'react-native-vector-icons'
import { useNavigation , useRoute } from '@react-navigation/native';
import { COLOR_CODES, LOGO,BACK_ARROW} from "../../src/utilities/globalVariables";
import { Colors } from "react-native/Libraries/NewAppScreen";
 
const AppLayout = ({ children , headerless,headerTitle,ScreenText }) => {
console.log("children ",children,"headerless ",headerless,headerTitle)
const {height, width} = useWindowDimensions();
    const navigation = useNavigation();
    // const route = useRoute();
    
    // const { navigationTitle } = useSelector(state => state.navigationTitle);
    // const { language } = useSelector(state => state.user);

    
    return (
        <View style={{ flex:1 }}>
            <View style={{ backgroundColor:COLOR_CODES.charCoal}}>
                <View style={styles.header({height})} >
                {headerTitle!="Login"?   <TouchableHighlight
                        onPress={() => navigation.goBack()}
                        style={styles.backIcon({height,width  })}
                        underlayColor={COLOR_CODES.BUTTON_OVERLAY}
                    >
                      
                        <Image
                        source={BACK_ARROW}
                        style={{
                            height:height/100*7,
                            width:width/100*7,
                            tintColor:COLOR_CODES.white

                        }}
                        resizeMode="contain"
                        
                        />
                    </TouchableHighlight>:null}
                    <View style={{marginLeft:width/100*5}}>
                        <Text style={{color:COLOR_CODES.white,fontSize:17}}>{headerTitle!=='Login'?headerTitle:''}</Text>
    
                    </View>
                    
                </View>
                <View style={{
                    backgroundColor:COLOR_CODES.white,                
                    alignItems:"center",
                    height:height/100*2,
                    borderTopStartRadius:20,
                    borderTopEndRadius:20
                }} />
            </View>
            <View style={{flex:1 , backgroundColor:COLOR_CODES.white}}>
                <ScrollView >
                    <View style={{backgroundColor:COLOR_CODES.white}}>
                        {/* {   headerless!=undefined ?
                                <View style={{ 
                                        backgroundColor:COLOR_CODES.white, 
                                        paddingHorizontal:width/100*5, 
                                        flexDirection:'row',                                
                                    }}>                           
                                    <View style={{ 
                                        flex:1 , 
                                        alignItems:'center',
                                        }}>
                                        <Image 
                                            style={{
                                                width:width/100*20,
                                                height:width/100*20 
                                                ,
                                                tintColor:'red' 
                                            }} 
                                            resizeMode="center"  
                                            source={LOGO} />
                                    </View>
                                    
                                </View>
                            :null */}
                                 <View style={{ 
                                    // height:width/100*35 , 
                                    marginHorizontal:width/100*5, 
                                    flexDirection:'row',
                                    justifyContent:headerTitle=='Login'?'center':null
                                    
                                    }}>
                                   {headerTitle!='Login' && ScreenText && <View style={{ flex:5 }}>
                                        <View style={{marginTop:height/100*1}}>            
                                            <Text  style={{ color:COLOR_CODES.FONT_COLOR,fontSize:16}}>
                                                {ScreenText}
                                                 
                                            </Text>
                                        </View>
                                    </View> 
                                        
                                        }
                                        {/* <View style={{marginTop:height/100*2}}>                                 
                                            <TextComponent 
                                                text={SMS_VERIFICATION_TEXT[language]}
                                                size={SIZES.CONTENT_TEXT_SIZE} 
                                                style={{ color:COLOR_CODES.TEXT_COLOR_DARK }}
                                            />
                                        </View>                                         */}
                                    <View style={{ 
                                            alignItems:headerTitle==="Login"?'center':'flex-end',
                                            marginVertical:headerTitle=='Login'?width/100*10:0
                                            // flex:1
                                        }}>
                                        <Image 
                                            style={{
                                                width:headerTitle=="Login"?width/100*50:width/100*16,
                                                height:headerTitle=="Login"?width/100*40:width/100*16 
                                            }} 
                                            resizeMode="center"  
                                            source={LOGO} />
                                    </View>
                                    
                                </View> 
                                                                      
                        {children}
                    </View>                   
                </ScrollView>                
            </View>
    </View>
    );

}


const styles = StyleSheet.create({
    header: props => ({
        flexDirection: "row",
        alignItems:"center",
        height:props.height/100*8,
    }),
    backIcon: props => ({
        
        marginLeft:props.width/100*2,
        // marginRight:  null ,
        // borderRadius: Math.round( props.width + props.height)/50,
        // width:props.width/100*8,
        // height:props.width/100*8,
        // justifyContent: 'center',
        // alignItems: 'center',
                                    
    }),

})


export default AppLayout;