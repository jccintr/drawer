import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

function Header(props){

return (
    <Image style={styles.logotipo }source={require('./assets/logo.png')}/>
       
        
  
);
}

const styles = StyleSheet.create({
    container: {
       
        backgroundColor: 'red',
        width: '100%'
    },
    texto: {
      color: 'white',
      fontStyle: "italic",
      fontWeight: 'bold',
      fontSize: 26,
      
    },
    logotipo:{
        position: 'absolute',
        bottom: 0,
        width: '70%',
        height: 50,
        resizeMode: 'stretch',
       
        
      },
  });

export default Header;