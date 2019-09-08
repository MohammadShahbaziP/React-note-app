const defaultState=JSON.parse(localStorage.getItem('note')) || []

const noteReducer = (state=defaultState , action)=>{
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state , action.note]
        case 'REMOVE_NOTE':
            return state.filter((note)=>note.id !== action.id)
        case 'EDIT_NOTE':
            return state.map((note)=>{
                if(note.id === action.id ){
                    return {
                        ...note,
                        ...action.update
                    }
                }else{
                    return note
                }
            })
        default:
            return state 
    }


}
export default noteReducer