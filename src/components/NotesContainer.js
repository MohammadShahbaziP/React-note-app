import React from 'react' 
import {connect} from 'react-redux'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import Note from './Note'
import styled from 'styled-components'
import noteSelector from '../selectors/noteSelector'
import './css/note.css'
const NotesContainer = (props)=>(
    <Div>

    

       	{
       	    props.notes.map((note)=>(
       			<CSSTransition 
       			 classNames="note"
       			 timeout={300}
       			 key={note.id}
       			>
             		<Note note={note} />
       	        </CSSTransition>	
       	    ))
       	}

    
    
    </Div>
)
const Div = styled(TransitionGroup)`
 display:flex;
 flex-wrap:wrap;
 justify-content:space-around;

`

const mapStateToProps = (state)=>({
    notes:noteSelector(state.notes , state.filter)
})

export default connect( mapStateToProps )( NotesContainer )