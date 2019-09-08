import filterReducer from '../../reducers/filter'

test('should set default text value',()=>{
    const state = filterReducer(undefined,{type:'@@INIT'})
    expect(state.text).toBe('')
})

test('should set  text value',()=>{
    const state = filterReducer({text:'ba'},{type:'@@INIT'})
    expect(state.text).toBe('ba')
})