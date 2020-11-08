import { StatusBar } from 'expo-status-bar';
import React, {Fragment, useState} from 'react';
import { StyleSheet, Text, View, Component, ImageBackground, Button} from 'react-native';

import Formulario from './app/src/componentes/campos';
import Resultado from './app/src/componentes/detalle';
import Boton1 from './app/src/componentes/boton';
const image = { uri: 'https://image.freepik.com/foto-gratis/formula-tasa-formula-indice-masa-corporal-imc-bloc-notas_1391-1753.jpg'}
export default function App() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [resultado,setCalcular2] =useState(null);

 const getcalcular=resultado;

  const calcular = () =>{
    if(!altura){
      console.log("ingrese Altura");
    } else if(!peso){
      console.log("ingrese Peso");
    }  
  
  const altura2 = altura*altura;
  const calcular2 =peso/altura2;
  
  setCalcular2(calcular2.toFixed(2));

  }
  
  return (
  <Fragment>
  <ImageBackground source={image}>
    <View style={styles.container}>
      <Text  style={styles.titulo}>IMC - Calculadora de indice de masa Corporal</Text><br/>
      <h3>INGRESE LOS DATOS A CALCULAR</h3><br/>
      <Formulario setAltura={setAltura} setPeso={setPeso}/>
    </View>
    <View style={styles.contenedorResumen}>    
       <Text style={styles.resumen} >RESULTADO</Text>    
       <Resultado getcalcular={getcalcular} />  
    </View><br/><br/>
    <View style={styles.contenedorBoton}>
      <Boton1 calcular={calcular}/>
    </View>
    </ImageBackground>
     </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    alignItems: "center",
    
  },
  image: {
    height: 250,
    alignItems: "center",
    backgroundColor: '#51d1f6',
    
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  contenedorResumen: {
    height: 200,
    alignItems: "center",
  },
  resumen: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 25
  },
  contenedorBoton: {
    height: 270,
    borderBottomLeftRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: "center",
  
  }
});
