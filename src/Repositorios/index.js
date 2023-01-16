import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Botao from '../components/Botao'
import { pegarRepositorioDoUsuario } from '../services/requisicoes/repositorios'
import { useIsFocused } from '@react-navigation/native'

export default function RepositoriosScreen({route, navigation}) {
  const [repo, setRepo] = useState([])
  const estaNaTela = useIsFocused();

  useEffect(() => {
    async function response(){
      const resultado = await pegarRepositorioDoUsuario(route.params.id);
      setRepo(resultado)
    }
    response();
  }, [estaNaTela])

  return (
      <View style={estilos.container}>
        <Text style={estilos.titulo}>{repo.length} repositórios criados</Text>
        <Botao onPress={() => navigation.navigate('CriarRepositorio', {id: route.params.id})}>Criar um Repositório</Botao>
        <FlatList 
          data={repo}
          style={estilos.lista}
          keyExtractor={(repo) => repo.id}
          renderItem={({item}) => {
            return <TouchableOpacity onPress={() => navigation.navigate('EditarRepositorio', {item: item})} style={estilos.repositorio}>
            <Text style={estilos.nomeRepositorio}>{item.name}</Text>
            <Text style={estilos.dataRepositorio}>Atualizado em {item.data}</Text>
          </TouchableOpacity>
          }}
        />
      </View>
  )
}

const estilos = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    titulo: {
      fontSize: 24,
      lineHeight: 32,
      marginTop: 30,
      marginBottom: 20
    },
    lista: {
      width: '80%',
      marginTop: 20
    },
    repositorio: {
      paddingVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#D7D7D7'
    },
    nomeRepositorio: {
      color: '#566B76',
      fontSize: 16,
      lineHeight: 19.2
    },
    dataRepositorio: {
      color: '#9CA6AB',
      fontSize: 12
    }
})