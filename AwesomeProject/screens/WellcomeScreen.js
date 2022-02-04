import React from 'react';
import{
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Size } from 'react-native-ui-lib/generatedTypes/src/components/skeletonView';
//component = function
function WellcomeScreen(props)
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
            <TouchableOpacity style={{
                
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