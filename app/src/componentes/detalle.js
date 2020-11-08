import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Detalle(props){
    const {getcalcular} = props;
    const [imcmensaje,setimcmensaje]=useState("....");

    useEffect(()=>{
        if(getcalcular){
            setimcmensaje(mensaje(getcalcular));
        }
    },[imcmensaje,getcalcular])

    const mensaje = (valoractual) => {
        if(valoractual<=18.5){
            return "bajo peso"
          }else if(valoractual > 18.5 && valoractual <=24.9){
            return "normal"
          }if(valoractual > 24.9 && valoractual<=29.9){
            return "sobre peso"
          }if(valoractual > 30 ){
            return "obeso"
          }
    }

	return (
		<View style={estil.container}>
			
		<View style={estil.box1}>
		<Text style={estil.letra}>SU IMC ES DE </Text><br/>
		<br/>
		</View>

		<View style={estil.box2}>
		<Text style={estil.letra}>{getcalcular}</Text><br/>
        <Text style={estil.letra}>{imcmensaje}</Text>
		<br/>
		</View>
		</View>
	);
}

const estil = StyleSheet.create({

	letra: {
		fontSize: 25,
    	fontWeight: 'bold',
    	marginTop: 12
	},

	container: {
	width: "30%",
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25
  	},

	box1: {
    flex: 1,
    alignItems: 'center'
	},

	box2: {
    flex: 1,
    alignItems: 'center'
	},

	rowInput: {
		flexDirection : "row"
	}
})