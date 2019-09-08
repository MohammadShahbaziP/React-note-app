import uuid from 'uuid'
const addNote = ({
    title='unnamed',
    note=''
}={}) =>({
    type:'ADD_NOTE',
    note:{
        id:uuid(),
        title,
        note
    }
})

const removeNote = (id) =>({
    type:'REMOVE_NOTE',
    id
})

const editNote = (id,update) =>({
    type:'EDIT_NOTE',
    id,
    update
})
export {addNote , removeNote , editNote }