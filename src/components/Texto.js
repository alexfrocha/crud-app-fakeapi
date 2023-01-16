import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Texto({children, style}) {
  return (<Text style={[style, estilos.texto]}>{children}</Text>)
}

const estilos = StyleSheet.create({
    texto: {
        color: '#45565F'
    }
})