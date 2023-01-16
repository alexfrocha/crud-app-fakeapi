import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import Botao from '../components/Botao'
import { deletarRepositorio, salvarRepositorio } from '../services/requisicoes/repositorios'


export default function EditarRepositorio({route, navigation}) {
    const [nome, setNome] = useState(route.params.item.name)
    const [data, setData] = useState(route.params.item.data)

    async function salvar() {
        const resultado = await salvarRepositorio(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        )

        if(resultado === 'Sucesso') {
            Alert.alert('Repositório atualizado!')
            navigation.goBack()
        } else {
            Alert.alert('Erro ao atualizar o repositório')
        }

    }

    async function deletar() {
        const resultado = await deletarRepositorio(route.params.item.id)
        if (resultado === 'Sucesso') {
            Alert.alert('Repositório deletado!')
            navigation.goBack()
        } else {
            Alert.alert('Erro ao deletar o repositório')
        }
    }
  
    return (
        <View style={estilos.container}>
            <TextInput style={estilos.input} onChangeText={setNome} placeholder='Nome do repositório' autoCapitalize='none'>{route.params.item.name}</TextInput>
            <TextInput style={estilos.input} onChangeText={setData} placeholder='Data da criação' autoCapitalize='none'>{route.params.item.data}</TextInput>
            <Botao onPress={salvar}>Salvar</Botao>
            <Botao onPress={deletar} cor={'#FF3535'}>Deletar</Botao>
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
    },
    delete: {
        backgroundColor: '#DD2B2B'
    }
})