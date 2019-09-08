export default (notes,filter)=>{
    return notes.filter((note)=>note.title.toLowerCase().includes(filter.text.toLowerCase()))
}