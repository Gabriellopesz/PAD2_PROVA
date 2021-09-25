import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Todo } from '../../components/Todo'
import { AddTodo } from '../../context/actions'

import {Container, Header, HText, AddForm, AddFormText, AddInput, Submit, BtnText} from './styles'

export function List() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  
  const [content, setContent] = useState('')
  
  function createTodo() {
    dispatch(AddTodo({ title: todos.length, content }))
  }
  
  return (
    <Container>
      <Header>
        <HText>Aplicativo ToDo list</HText>
      </Header>

      <AddForm>
        <AddFormText>Adicione aqui uma tarefa</AddFormText>
        
        <AddInput placeholder="tarefa" onChangeText={(e) => setContent(e)} />

        <Submit onPress={createTodo}>
          <BtnText>ADICIONAR TAREFA</BtnText>
        </Submit>
      </AddForm>
      
      <ScrollView style={{marginTop: 14}} showsVerticalScrollIndicator={false}>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ScrollView>
    </Container>
  )
}