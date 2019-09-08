import React from 'react' 
import {connect} from 'react-redux'
import Note from './Note'
import styled from 'styled-components'
import noteSelector from '../selectors/noteSelector'
const NotesContainer = (props)=>(
    <Div>

    {
        props.notes.map((note)=><Note key={note.id} note={note} />)
    }
    
    </Div>
)
const Div = styled.div`
 display:flex;
 flex-wrap:wrap;
 justify-content:space-around;

`

const mapStateToProps = (state)=>({
    notes:noteSelector(state.notes , state.filter)
})

export default connect( mapStateToProps )( NotesContainer )