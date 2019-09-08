import noteReducer from '../../reducers/note'
import notes from '../fixtures/notes'

test('should set default note state',()=>{
    const state = noteReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should handle remove note',()=>{
    const state = noteReducer(notes,{type:'REMOVE_NOTE' , id:notes[1].id})
    expect(state).toEqual([notes[0],notes[2]])
})

test('should handle add note',()=>{
    const state = noteReducer(notes,{type:'ADD_NOTE' , note:notes[1]})
    expect(state).toEqual([...notes,notes[1]])
})

test('should handle edit note',()=>{
    const update = {
        title :'salam'
    }
    const state = noteReducer(notes,{type:'EDIT_NOTE' , id:notes[1].id, update})
    expect(state[1]).toEqual({
        id:expect.any(String),
        title:'salam',
        note: 'bofshg'
    })
})