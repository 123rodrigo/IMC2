import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Campos(props){
    console.log("Props", props);
    const {setAltura, setPeso} = props;
    return (
        <View style={estilo.formulario}>
            <View style={estilo.rowInput}>
                
              <TextInput 
                    style={estilo.input}
                    placeholder="ALTURA"
                    onChange={(e) => setAltura(e.nativeEvent.text)}
                />
                <TextInput 
                    style= {estilo.input}
                    placeholder="PESO"
                    onChange={(e) => setPeso(e.nativeEvent.text)}

                />
            </View>

        </View>
    )
}
const estilo = StyleSheet.create({
    formulario: {
        
        bottom: 0,
        width: "60%",
        paddingHorizontal: 50,
        borderRadius: 20,
        height: 100,
        alignItems: "center"
        
    },
    input: {
        height: 40,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        width: "80%",
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20
    },
 
    rowInput: {
        flexDirection: "row"
    },
   
});