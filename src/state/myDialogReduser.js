
let defaultState =  {
    nameData: [
    {id: 1, name: 'anton'},
    {id: 2, name: 's'},
    {id: 3, name: 'a'},
    {id: 4, name: 'v'},
    {id: 5, name: 'd'}
],
    massegData: [
    {id: 1, masseg: 'Yo'},
    {id: 2, masseg: 's'},
    {id: 3, masseg: 'sr'},
    {id: 4, masseg: 'as'},
],
}
const  myDialogReduser = (state = defaultState, action) => { 
    switch (action.type ){
        case  "CRAETE-MASSEG-DATA":
            let obj = {
                id: 5,
                masseg: action.newMassegData,
            }
            return {
                ...state,
                massegData: [...state.massegData, obj],
            }
        default: return  state;

    }
}
export const createDialogReduser = (newMassegData) => ({type:'CRAETE-MASSEG-DATA',newMassegData})
export default myDialogReduser;