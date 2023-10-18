import React from "react"
import { View , Text , StyleSheet , TouchableHighlight , Image, ScrollView,useWindowDimensions } from "react-native"
import { useDimensions } from "@react-native-community/hooks";
import {Icon} from 'react-native-vector-icons'
import { useNavigation , useRoute } from '@react-navigation/native';
import { COLOR_CODES, LOGO} from "../../src/utilities/globalVariables";
 
const AppLayout = ({ children , headerless,headerTitle }) => {
console.log("children ",children,"headerless ",headerless,headerTitle)
const {height, width} = useWindowDimensions();
    const navigation = useNavigation();
    const route = useRoute();
    
    // const { navigationTitle } = useSelector(state => state.navigationTitle);
    // const { language } = useSelector(state => state.user);

    
    return (
        <View style={{ flex:1 }}>
            <View style={{ backgroundColor:COLOR_CODES.charCoal}}>
                <View style={styles.header({height})} >
                    {/* <TouchableHighlight
                        onPress={() => navigation.goBack()}
                        style={styles.backIcon({height,width  })}
                        underlayColor={COLOR_CODES.BUTTON_OVERLAY}
                    >
                        <Icon
                            name={"arrowleft"}
                            size={25}
                            color={COLOR_CODES.white}
                        />
                    </TouchableHighlight> */}
                    {/* <View style={{marginStart:20}}>
                        <Text
                            // text={upperFirst(toLower(route.name))}
                            text={headerTitle?headerTitle:''}
                            style={{ color :  COLOR_CODES.FONT_COLOR }}
                            size={16}
                        />
                    </View>
                     */}
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
                        {   headerless ?
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
                                                width:width/100*SIZES.LOGO_WIDTH,
                                                height:width/100*SIZES.LOGO_HEIGHT, 
                                            }} 
                                            resizeMode="center"  
                                            source={LOGO} />
                                    </View>
                                    
                                </View>
                            :null
                                // <View style={{ 
                                //     // height:width/100*35 , 
                                //     marginHorizontal:width/100*5, 
                                //     flexDirection:  language ==  LANGUAGE.ENGLISH ? 'row' : 'row-reverse',
                                    
                                //     }}>
                                //     <View style={{ flex:5 }}>
                                //         <View style={{marginTop:height/100*1}}>                                 
                                //             <TextComponent 
                                //                 text={INTRO_TEXT[language]}
                                //                 size={SIZES.CONTENT_TEXT_SIZE} 
                                //                 style={{ color:COLOR_CODES.TEXT_COLOR_DARK }}
                                //             />
                                //         </View>
                                //         <View style={{marginTop:height/100*2}}>                                 
                                //             <TextComponent 
                                //                 text={SMS_VERIFICATION_TEXT[language]}
                                //                 size={SIZES.CONTENT_TEXT_SIZE} 
                                //                 style={{ color:COLOR_CODES.TEXT_COLOR_DARK }}
                                //             />
                                //         </View>                                        
                                //     </View> 
                                //     <View style={{ 
                                //             alignItems:'flex-end',
                                //             // flex:1
                                //         }}>
                                //         <Image 
                                //             style={{
                                //                 width:width/100*SIZES.LOGO_WIDTH,
                                //                 height:width/100*SIZES.LOGO_HEIGHT, 
                                //             }} 
                                //             resizeMode="center"  
                                //             source={LOGO_IMAGE} />
                                //     </View>
                                    
                                // </View> 
                        }                                                
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
        height:props.height/100*6,
    }),
    backIcon: props => ({
        
        marginLeft:props.width/100*3,
        marginRight:  null ,
        borderRadius: Math.round( props.width + props.height)/50,
        width:props.width/100*8,
        height:props.width/100*8,
        justifyContent: 'center',
        alignItems: 'center',
                                    
    }),

})


export default AppLayout;