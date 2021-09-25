import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { Main, Header, Title, Content } from './styles'

import menuImg from '../../assets/storage.png'
import closeImg from '../../assets/close.png'
import { useDispatch } from 'react-redux'
import { DeleteTodo } from '../../context/actions'
import { useNavigation } from '@react-navigation/core'


function Todo({ todo }) {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  function removeTodo() {
    dispatch(DeleteTodo(todo.id))
  }

  function redirecionar() {
    navigation.navigate('EditTodo', { todo })
  }

  return (
    <Main onPress={redirecionar}>
      <Header>
        {/* <TouchableOpacity onPress={redirecionar}> */}
          <Image source={menuImg} />
        {/* </TouchableOpacity> */}
        <Title>Tarefa#{todo.title}</Title>
        <TouchableOpacity onPress={removeTodo}>
          <Image source={closeImg} />
        </TouchableOpacity>
      </Header>

      <Content>{todo.content}</Content>
    </Main>
  )
}

export { Todo }