import * as React from 'react';
import { View, Text, Button,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar,ListItem,Icon } from 'react-native-elements';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import Pesquisa from './pesquisa';



function principal({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold', margin: 20}}>Conteúdo da Tela</Text>
      
      <Button title="Acionar Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Ir para Parâmetros da Pesquisa" onPress={() => navigation.navigate('pesquisa')} />
    </View>
  );
}

// desenha o drawer
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ListItem>
      <Avatar
       
        size="large"  
        rounded
        
        title={"Paula"}
        source={{uri:'https://images.unsplash.com/photo-1500080209535-717dd4ebaa6b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=acddea1fd5f8d1eafd1fc300f280176c' }}
      />
      <ListItem.Content>
      <Text style={styles.AvatarNome}>Paula Soares</Text>
        <Text style={styles.AvatarDados}>paulas@gmail.com</Text>
        <Text style={styles.AvatarDados}>ID: A9002</Text>
      </ListItem.Content>
      </ListItem>

      <View style={styles.linhaMenu}>
      <TouchableOpacity style={styles.botaoMenu} onPress={()=>alert("Tocou no botão MEUS DADOS")}>
        <Icon  
        name='g-translate'
          color='red'
          name='user'
          type='font-awesome' 
          />
        <Text style={styles.labelMenu}>MEUS DADOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoMenu} onPress={()=>alert("Tocou no botão MINHA REDE")}>
        <Icon  
        name='g-translate'
          color='red'
          name='users'
          type='font-awesome' 
          />
        <Text style={styles.labelMenu}>MINHA REDE</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.linhaMenu}>
      <TouchableOpacity style={styles.botaoMenu} onPress={()=>alert("Tocou no botão ECONOMIA")}>
        <Icon  
        name='g-translate'
          color='red'
          name='money'
          type='font-awesome' 
          />
        <Text style={styles.labelMenu}>ECONOMIA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoMenu} onPress={()=>alert("Tocou no botão CUPONS")}>
        <Icon  
        name='g-translate'
          color='red'
          name='tags'
          type='font-awesome' 
          />
        <Text style={styles.labelMenu}>CUPONS</Text>
      </TouchableOpacity>
      </View>
     
      <View style={styles.linhaMenu}>
      <TouchableOpacity style={styles.botaoMenu} onPress={()=>alert("Tocou no botão TERMO DE USO")}>
        <Icon  
        name='g-translate'
          color='red'
          name='file-text-o'
          type='font-awesome' 
          />
        <Text style={styles.labelMenu}>TERMO DE USO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoMenu} onPress={()=>alert("Tocou no botão FALE CONOSCO")}>
        <Icon  
        name='g-translate'
          color='red'
          name='microphone'
          type='font-awesome' 
          />
        <Text style={styles.labelMenu}>FALE CONOSCO</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.linhaMenu}>
      <TouchableOpacity style={styles.botaoMenu} onPress={()=>alert("Tocou no botão CONFIGURAÇÕES")}>
        <Icon  
        name='g-translate'
          color='red'
          name='sliders'
          type='font-awesome' 
          />
        <Text style={styles.labelMenu}>CONFIGURAÇÕES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoMenu} onPress={()=>alert("Tocou no botão SAIR DO APP")}>
        <Icon  
        name='g-translate'
          color='red'
          name='power-off'
          type='font-awesome' 
          />
        <Text style={styles.labelMenu}>SAIR DO APP</Text>
      </TouchableOpacity>
      </View>
    

      
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerStyle: { backgroundColor: 'red' } }}drawerContent={(props) => <CustomDrawerContent {...props} />}>
       
        <Drawer.Screen name="principal"
         component={principal}
         options={{ 
          headerTitle: (props) => (
           <Image
             style={{ width: 200, height: 60 }}
             source={require('./assets/logo.png')}
             resizeMode='contain'
           />
         ),
         headerTitleStyle: { flex: 1, textAlign: 'center'},headerStyle:{height: 100,backgroundColor:'red'},headerTintColor: '#fff', 
         
         }}
      />
      <Drawer.Screen name="pesquisa"
         component={Pesquisa}
         options={{ 
          headerTitle: (props) => (
           <Image
             style={{ width: 200, height: 60 }}
             source={require('./assets/logo.png')}
             resizeMode='contain'
           />
         ),
        headerStyle:{height: 100,backgroundColor:'red'},headerTintColor: '#fff', 
         
         }}
      />
         
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
     <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: 'white',
      borderColor: 'lightgray',
     
      alignItems: 'center'
      
  },
  botaoMenu:{
    margin:10,
    borderColor:'red',
    borderWidth:2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: 80
    
    
  },
  labelMenu: {
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12
  },
  linhaMenu:{
    flexDirection: 'row'
  },
  AvatarNome:{
    color: 'red',
    fontWeight: 'bold'
  },
  AvatarDados: {
    color: 'red'
  }
});
