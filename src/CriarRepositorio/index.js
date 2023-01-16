import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import Botao from '../components/Botao'
import { criarRepositorios } from '../services/requisicoes/repositorios'


export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('')
    const [data, setData] = useState('')

    async function criar() {
        const resultado = await criarRepositorios(
            route.params.id,
            nome,
            data
        )
        if(resultado === 'Sucesso') {
            Alert.alert('Repositório criado!')
            navigation.goBack()
        } else {
            Alert.alert('Erro ao criar o repositório')
        }
    }
  
    return (
        <View style={estilos.container}>
            <TextInput style={estilos.input} value={nome} onChangeText={setNome} placeholder='Nome do repositório' autoCapitalize='none'></TextInput>
            <TextInput style={estilos.input} value={data} onChangeText={setData} placeholder='Data da criação' autoCapitalize='none'></TextInput>
            <Botao onPress={criar}>Criar</Botao>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: '#6B737A',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 10,
        borderRadius: 8
    }
})