import React from 'react'
import SearchBar from './components/search'
import AddNote from './components/AddNote'
import NotesContainer from './components/NotesContainer'
import Container from './components/Container'

const App = ()=>{
  return (
    <Container>
      <SearchBar />
      <AddNote />
      <NotesContainer />

    </Container>
  )
}




export default App