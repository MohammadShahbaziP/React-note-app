import {addNote , removeNote, editNote} from '../../actions/notes'
import notes from '../fixtures/notes';
test('should handle add note Action with default values',()=>{
    const action = addNote()
    expect(action).toEqual({
        type:'ADD_NOTE',
        note:{
            id:expect.any(String),
            title:'unnamed',
            note:''
        }
    })
})

test('should handle add note Action with  values',()=>{
    const note={
        title:'af',
        note:'df'
    }
    const action = addNote(note)
    expect(action).toEqual({
        type:'ADD_NOTE',
        note:{
            id:expect.any(String),
            title:'af',
            note:'df'
        }
    })
})

test('should handle edit note Action',()=>{
    const id=1
    const update={
        title:'af',
        note:'df'
    }
    const action = editNote(id,update)
    expect(action).toEqual({
        type:'EDIT_NOTE',
        id,
        update
    })
})

test('should handle remove note Action',()=>{
    const id=1

    const action = removeNote(id)
    expect(action).toEqual({
        type:'REMOVE_NOTE',
        id
    })
})