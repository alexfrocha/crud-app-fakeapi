import { View, StyleSheet, Text, Touchable, Image, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import avatar from '../../assets/avatar.jpg'
import Texto from '../components/Texto'
import api from '../services/api'
import { buscaUsuario } from '../services/requisicoes/usuarios'
import Botao from '../components/Botao'

export default function Index({navigation}) {

  const [nomeUsuario, setNomeUsuario] = useState('')
  const [usuario, setUsuario] = useState({})

  async function busca() {
    const resultado = await buscaUsuario(nomeUsuario)
    if (resultado) {
      setUsuario(resultado)
    } else {
      Alert.alert('Usuário não encontrado')
      setUsuario({})
    }
  }

  return (
    <ScrollView>
      <View>
        { usuario?.login &&
        <>
          <View style={estilos.banner}>
            <Image source={{ uri: usuario.avatar_url}} style={estilos.icon}/>
          </View>
          <View style={estilos.columnInfo}>
            <Texto style={estilos.nomeInfo}>{usuario.name}</Texto>
            <Text style={estilos.emailInfo}>{usuario.email}</Text>
            <View style={estilos.contentColumn}>
              <View style={estilos.column}>
                <Text style={estilos.number}>{usuario.followers}</Text>
                <Text style={estilos.info}>Seguidores</Text>
              </View>
              <View style={estilos.column}>
                <Text style={estilos.number}>{usuario.following}</Text>
                <Text style={estilos.info}>Seguindo</Text>
              </View>
            </View>
            <TouchableOpacity  style={estilos.botaoRepo} onPress={() => {
              navigation.navigate('Repositorios', {id: usuario.id})
            }}>
              <Text style={estilos.botaoRepoInfo}>Ver Repositórios</Text>
            </TouchableOpacity>
          </View>
        </>
        }

        <View style={estilos.form}>
        <TextInput style={estilos.userInput} placeholder='Busque por um usuário' value={nomeUsuario} onChangeText={setNomeUsuario}></TextInput>
          <Botao onPress={busca}>Buscar</Botao>
        </View>
        
    </View>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
    
    botao: {
      color: '#33B2FF'
    },
    banner: {
      backgroundColor: '#C4C4C4',
      height: 140,
      position: 'relative',
      alignItems: 'center'
    },
    icon: {
      width: 130,
      height: 130,
      borderRadius: 500,
      borderColor: '#fff',
      borderWidth: 8,
      position: 'absolute',
      bottom: '-25%'
    },
    columnInfo: {
      marginTop: '13%',
      alignItems: 'center'
    },
    nomeInfo: {
      fontWeight: 'bold',
      fontSize: 23,
      lineHeight: 32,
    },
    emailInfo: {
      color: '#717E84'
    },
    number: {
      color: '#8A07DA'
    },
    info: {
      color: '#95A8B2'
    },
    botaoRepo: {
      marginTop: 25
    },
    botaoRepoInfo: {
      color: '#8A07DA'
    },
    contentColumn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
      marginTop: 25
    },
    column: {
      alignItems: 'center'
    },
    form: {
      width: '100%',
      alignItems: 'center',
      marginTop: 30
    },
    userInput: {
      width: '80%',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#6B737A'
    },
    
  })