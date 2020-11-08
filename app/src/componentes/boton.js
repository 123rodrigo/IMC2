import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Boton(props){
   
        const {calcular} = props
        return (
          <View style={styles.bot}>
              <TouchableOpacity style={styles.boton} onPress={calcular}>
                  <Text style={styles.texto}>Calcular</Text>
              </TouchableOpacity>
          </View>
        );
}

const styles = StyleSheet.create({
	bot: {
    	
        bottom: 0,
        width:"20%",
        backgroundColor:'#05CAFA',
        height: 60,
        borderTopLeftRadius:10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent:"center"
       
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 18,
        color:'#fff',
        textAlign:'center'
    },
    boton:{
       
        padding: 16,
        borderRadius: 20,
        width: "75%"
    }
})