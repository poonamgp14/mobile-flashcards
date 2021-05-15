import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default function SubmitBtn ({ onPress,text }) {
    return (
      <TouchableOpacity
        onPress={onPress}>
          <Text>{text}</Text>
      </TouchableOpacity>
    )
  }