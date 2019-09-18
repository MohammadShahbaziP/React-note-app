import React from 'react'
import styled from 'styled-components'
import { FaTrash } from 'react-icons/fa'
import {connect} from 'react-redux'
import { removeNote,editNote } from '../actions/notes'

class Note extends React.Component {

    removeNote=()=>{
        this.props.dispatch(removeNote(this.props.note.id))
    }
    bodyChange=(e)=>{
        const note = e.target.value
        if(note){
            this.props.dispatch(editNote(this.props.note.id,{note}))

        }

    }
    render(){
        return(
            <NoteContainer>
                <NoteBar>
                    <NoteTitle >
                    {this.props.note.title}
                    </NoteTitle>
                        <Trash onClick={this.removeNote} />

                </NoteBar> 
                <NoteBody>
                    <TextInp placeholder="Note body" defaultValue={this.props.note.note} onChange={this.bodyChange}></TextInp>
                </NoteBody>
            </NoteContainer>
        )
    }
}
const NoteBar = styled.div`
 width:100%;
 border:1px solid var(--primary);
 background:var(--primary-light);
 display:flex;
 justify-content: space-between;
 padding:.3rem;

`
const NoteTitle = styled.p`
 color:white;
 margin:0;
 font-size:1.2rem;
 font-weight:bold;
 word-break:break-all;
 


`
const NoteBody = styled.div`
 width:100%;
 background:var(--gray);
 height:10rem;
 overflow-x:hidden;
 overflow-y:hidden;
 
`
const TextInp = styled.textarea`
 background:var(--gray)
 display:block;
 margin:0 auto;
 width:100%;
 max-width:100%;
 height:100%;
 max-height:100%;
 min-height:100%;
 min-width:100%;
 border:none;
 color:var(--primary);
 font-size:2rem;
 font-weight:bold;
 @media(max-width:500px){
    font-size:1rem;
    font-weight:500;
 }

`

const Trash = styled(FaTrash)`
 color:var(--danger);
 cursor:pointer;
 font-size:1.2rem;
 
`

const NoteContainer = styled.div`
 width:23%;
 margin:.5rem;
 @media(max-width:750px){
     width:40%;
 }
 @media(max-width:500px){
    width:80%;
    margin:1rem auto;
}
`

export default connect()(Note)