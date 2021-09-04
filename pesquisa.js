
import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import { Icon, Slider } from 'react-native-elements';



function Pesquisa(prop) {

    const [valorSlider, setDistancia] = useState(10);

    const diasSemana = [
        {
            dia: "D",
            isSelected: true
        },
        {
            dia: "S",
            isSelected: false
        },
        {
            dia: "T",
            isSelected: false
        },
        {
            dia: "Q",
            isSelected: false
        },
        {
            dia: "Q",
            isSelected: true
        },
        {
            dia: "S",
            isSelected: true
        },
        {
            dia: "S",
            isSelected: true
        },
    ]



    const categorias = [
        {
            nome: "Gastronomia",
            isSelected: true,
        },
        {
            nome: "Mercados",
            isSelected: false,
        },
        {
            nome: "Cultura",
            isSelected: true,
        },
        {
            nome: "Bem-estar",
            isSelected: false,
        },
        {
            nome: "Serviços",
            isSelected: true,
        },
        {
            nome: "Saúde e Beleza",
            isSelected: true,
        },
        {
            nome: "Esporte e lazer",
            isSelected: false,
        }
    ]

   

    // cria os itens da lista categorias


    const ItemListCategoria = ({ item }) => {

        const Selecionado = <View style={styles.categoriaSelecionada}><Text style={{ color: 'white' }}>{item.nome}</Text></View>;
        const NaoSelecionado = <View style={styles.categoriaNaoSelecionada}><Text style={{ color: 'red' }}>{item.nome} </Text></View>;
        return (
            <>
                {item.isSelected ? Selecionado : NaoSelecionado}
            </>
        );
    };
    // cria os itens da lista dia da semana
    const ItemListSemana = ({ item }) => {

        const Selecionado = <View style={styles.diaSemanaSelecionado}><Text style={{ color: 'white' }}>{item.dia}</Text></View>;
        const NaoSelecionado = <View style={styles.diaSemanaNaoSelecionado}><Text style={{ color: 'red' }}>{item.dia} </Text></View>;
        
        return (
            <>
                {item.isSelected ? Selecionado : NaoSelecionado}
            </>
        );
       
    };

    function SliderDistancia() {


        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Slider
                    value={valorSlider}
                    animateTransitions
                    animationType="timing"
                    maximumTrackTintColor="#ccc"
                    minimumTrackTintColor="#F00"
                    minimumValue={5}
                    maximumValue={50}
                    step={5}
                    onSlidingComplete={() =>
                        console.log("onSlidingComplete()")
                    }
                    onSlidingStart={() =>
                        console.log("onSlidingStart()")
                    }
                    onValueChange={value => setDistancia(value)}
                    orientation="horizontal"

                    style={{ width: "90%", height: 50 }}
                    thumbStyle={{ height: 20, width: 20 }}
                    thumbProps={{
                        children: (
                            <Icon
                                name="map-marker"
                                type="font-awesome"
                                size={20}
                                reverse
                                containerStyle={{ bottom: 20, right: 20 }}
                                color="red"
                            />
                        )
                    }}
                    thumbTintColor="#0c0"
                    thumbTouchSize={{ width: 40, height: 40 }}
                    trackStyle={{ height: 5, borderRadius: 20 }}

                />
                <View style={styles.BoxKm}>
                    <Text style={styles.labelKm}>{valorSlider} Km</Text>
                </View>
            </View>



        );



    }



    return (
        <View style={styles.container}>
            <Text style={styles.label}>Categorias</Text>
            <FlatList style={styles.listaCategorias}
                horizontal
                data={categorias}
                keyExtractor={({ id }, index) => id}
                renderItem={ItemListCategoria}
                showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.label}>Distância Máxima</Text>
            <SliderDistancia />



            <Text style={styles.label}>Dias Válidos</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FlatList style={styles.listaCategorias}
                    horizontal
                    data={diasSemana}
                    keyExtractor={({ id }, index) => id}
                    renderItem={ItemListSemana}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={{ alignItems: 'center', width: "100%" }}>
                <TouchableOpacity style={styles.botao} onPress={() => alert("Botão Pesquisar")} >
                    <Text style={styles.textoBotao}>Pesquisar</Text>
                </TouchableOpacity>
            </View>
        </View>

    );



}






const styles = StyleSheet.create({
    container: {
        flex: 0,


    },
    categoria: {
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    categoriaNaoSelecionada: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        paddingHorizontal: 15,
        marginRight: 15

    },
    categoriaSelecionada: {
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        paddingHorizontal: 15,
        marginRight: 15

    },
    diaSemanaNaoSelecionado:{
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        paddingHorizontal: 15,
        marginRight: 5

    },
    diaSemanaSelecionado:{
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        paddingHorizontal: 15,
        marginRight: 5

    },
   
    labelKm: {
        textAlign: 'center',
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
    },
    label: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 10

    },
    
    listaCategorias: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,

        height: 50
    },
     
    botao: {
        marginTop: 40,
        backgroundColor: 'red',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

        width: "95%",
        marginLeft: 10,
        marginRight: 10
    },
    textoBotao: {
        color: 'white',
        fontSize: 18,

    }
});


export default Pesquisa
