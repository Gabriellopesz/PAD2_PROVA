import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteTodo } from '../../context/actions'

import { Container, Header, HText, Main,Title,Content, BtnDelete,BtnEdit, BtnText } from './styles'

export function EditTodo({ route }) {
  const { todo } = route.params

  const dispatch = useDispatch()
  const navigation = useNavigation()

  function remove() {
    dispatch(DeleteTodo(todo.id))
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <HText>Aplicativo ToDo list</HText>
      </Header>
      
      <Main>
        <Title>Tarefa#{todo.title}</Title>
        <Content>{todo.content}</Content>
      </Main>

      <BtnEdit>
        <BtnText>EDITAR TAREFA</BtnText>
      </BtnEdit>

      <BtnDelete onPress={remove}>
        <BtnText>REMOVER TAREFA</BtnText>
      </BtnDelete>
    </Container>
  )
}