import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Botao({children, cor, onPress, style}) {
    const estilos = estilosFuncao(cor)
  return <TouchableOpacity style={[style, estilos.submitForm]} onPress={onPress}>
    <Text style={[style, estilos.submitInfo]}>{children}</Text>
  </TouchableOpacity>
}

const estilosFuncao = (cor) => StyleSheet.create({
    submitForm: {
        paddingVertical: 15,
        width: '80%',
        backgroundColor: !cor ? '#8A07DA' : cor,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center'
      },
      submitInfo: {
        color: '#fff'
      }
})