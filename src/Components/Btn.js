import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = ({bgColor, btnLabel, TextColor, Press}) => {
  return (
    <TouchableOpacity style={{backgroundColor: bgColor, borderRadius: 100, alignItems: 'center', width: 350, paddingVertical: 5}} onPress={Press}>
    <Text style={{color:TextColor, fontSize:22, fontWeight: 'bold'}}>
    {btnLabel}
    </Text>
    </TouchableOpacity>
  )
}

export default Btn