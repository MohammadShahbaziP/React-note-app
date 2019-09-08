import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { connect } from 'react-redux'
import setText from '../actions/filter'

class SearchBar extends React.Component {

   onTextChange=(e)=>{
      this.props.onTextChange(e.target.value)

   }
   render(){
      return (
         <SearchContainer>
         <Search />
         <SearchInp placeholder="Search" defaultValue={this.props.filterText} onChange={this.onTextChange} />
         
         </SearchContainer>
      )
   }

}



const SearchInp = styled.input`
 display:block;
 width:100%;
 height:2.4rem;
 border:none;
 background-color:var(--gray);
 border-radius:3rem;
 transition:all .3s;
 font-family:sans-serif;
 font-size:1.2rem;
 color:var(--primary);
 &:hover{
    box-shadow: 0 .2rem .4rem rgba(0,0,0,.3);
    

 }
 &:focus{
    outline:none;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
   

 }

 padding-left:2.5rem;


`

const Search = styled(FaSearch)`
 color :var(--primary);
 display:block;
 transform:translate(.8rem ,1.7rem);
 z-index:1000;


`

const SearchContainer = styled.div`
 width:100%;
 position:relative;

`
const mapStateToProps=(state)=>({
   filterText:state.filter.text
})
const mapDispatchToProps = (dispatch)=>({
   onTextChange: (text)=>dispatch(setText(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)