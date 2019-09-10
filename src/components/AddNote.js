import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'
class AddNote extends React.Component {
    state={
        error:''
    }

    onSubmit=(e)=>{
        e.preventDefault()
        const isTitleMatch =this.props.notes.find((note)=>note.title === e.target.elements.titleInp.value)

        isTitleMatch ? this.setState(()=>({error:'Enter Unique Title'})) : this.setState(()=>({error:''}))
        
        if(e.target.elements.titleInp.value && !isTitleMatch ){

            this.props.dispatch(addNote({
                title:e.target.elements.titleInp.value
            }))
            e.target.elements.titleInp.value=''
        }

    }
    
    render(){
        return(
            <Div>
                <Add onSubmit={this.onSubmit} >
                    <AddInp name='titleInp' placeholder="Title"/>
                    <AddBtn >
                        Add note
                    </AddBtn>
                </Add>
                

                {
                    this.state.error && <P>{this.state.error}</P>
                }
            </Div>    
        )
    }
}
const Div = styled.div`
 box-sizing:border-box;
 padding:1rem 0;
 display:flex;
 justify-content:space-between;
 align-items:center;
 &::after{
    content:"";
    clear:both;
    display:table;


 }
 @media(max-width:560px){
    flex-direction:column;
}

`
const P =styled.p`
 float:left;
 width:50%;
 text-align:center;
 height:2.5rem;
 font-size:1.5rem;
 font-weight:bold;
 color:var(--danger);
 margin: 0;
 @media(max-width:560px){
     width:100%;
 }
 
;`

const Add = styled.form`
 width:50%;
 margin-bottom:1rem;
 display:flex;
 flex-wrap:nowrap;
 height:2.5rem;
 border-radius:3rem;
 overflow:hidden;
 
 float:left;
 @media(max-width:560px){
    width:100%;
}
`

const AddInp = styled.input`
 width:50%;
 border:none;
 background-color:var(--gray);
 color:var(--primary);
 padding-left:1rem;
 font-size:1.5rem;
 transition:all .3s ease;
 &:focus{
    outline:none;
    box-shadow:0 1rem 2rem rgba(0,0,0,.3);
    width:75%;
 }
 &:focus ~ *{
    width: 25%;
 }
 
`
const AddBtn = styled.button`
 width:50%;
 border:none;
 background:var(--primary);
 color:white;
 cursor:pointer;
 transition:all .3s ease;
 &:hover{
    background:var(--primary-light)
 }
 
`
const mapStateToProps=(state)=>({
    notes:state.notes
})
export default connect(mapStateToProps)(AddNote)