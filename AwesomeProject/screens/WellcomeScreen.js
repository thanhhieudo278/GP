import React from 'react';
import{
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';


//component = function
function WellcomeScreen({navigation})
{
    return <View style=
    {{
        backgroundColor: '#FFFFFF',
        flex: 1
        
    }}>
        <View style={{        
            alignSelf: 'center',
            marginTop: 130,
            flex : 3
        }}>
            <Image
                source={
                    require('../assets/ICgym.jpg')
                } 
                
            />
        </View>
        <View style={{
            flex: 1,
            
        }}>
            <TouchableOpacity 
            onPress={( )=> navigation.navigate("PickRoleScreen")}  
            style={{
                
                backgroundColor: '#6666FF',
                borderRadius:20,
                height: 55,
                marginHorizontal: 50,
                marginVertical:20,
                justifycontent: 'center',
                alignItems: 'center',
                
                
            }}>
                <Text style={{
                    color: 'white',
                    fontSize:23,
                    marginVertical: 10,
                

                }}>Start
                </Text>

            </TouchableOpacity>

        </View>
       
    </View>    
}

export default WellcomeScreen