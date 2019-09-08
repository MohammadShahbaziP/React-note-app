const defaultState = {
    text :''
}
const filterReducer =(state=defaultState, action)=>{
    switch (action.type) {
        case 'SET_TEXT':
            return {
                text:action.text
            }
        default :
            return state
    }

}
export default filterReducer