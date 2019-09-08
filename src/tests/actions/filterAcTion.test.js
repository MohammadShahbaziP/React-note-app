import setText from '../../actions/filter'

test('should set text filtes',()=>{
    const action = setText('sa')
    expect(action).toEqual({
        type:'SET_TEXT',
        text :'sa'
    })
})