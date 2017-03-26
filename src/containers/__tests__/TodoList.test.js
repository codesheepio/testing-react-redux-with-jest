import React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import TodoList from '../TodoList'

describe('TodoList Container', () => {
  const createStore = configureMockStore()
  let component

  beforeEach(() => {
    const state = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    const store = createStore(state)
    component = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    ).find('TodoList')
  })

  it('receives todos props from state', () => {
    expect(component.prop('todos')).toEqual([
     { id: 1, text: 'Feed cat', complete: false },
     { id: 2, text: 'Drink coffee', complete: true },
    ])
  })
})
