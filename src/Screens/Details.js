import { View, Text, StyleSheet, TextInput, Pressable } from "react-native"
import { React, useState } from "react"
import { firebase } from "../config"
import { useNavigation } from "@react-navigation/native"

const Details = ({ route }) => {
  //Reference to fetch data from documents called todos
  const todoReference = firebase.firestore().collection("todos")
  const [textHeading, onChangeHeadingText] = useState(route.params.item.name)
  const navigation = useNavigation()

  const updateTodo = () => {
    if (textHeading && textHeading.length > 0) {
      todoReference
        .doc(route.params.item.id)
        .update({
          heading: textHeading,
        })
        .then(() => {
          navigation.navigate("Home")
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }
  return (
    <View style={StyleSheet.container}>
      <TextInput
        style={StyleSheet.textField}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        placeholder="Update Todo"
      />
      <Pressable
        style={styles.buttonUpdate}
        onPress={() => {
          updateTodo()
        }}
      >
        <Text> Update Todo</Text>
      </Pressable>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    marginLeft: 80,
    marginTop: 15,
    marginRight: 15,
  },
  textField: {
    marginBottom: 10,
    padding: 10,
    fontSize: 15,
    color: "#000000",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  buttonUpdate: {
    marginTop: 25,
    marginItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: "#0de065",
  },
})
