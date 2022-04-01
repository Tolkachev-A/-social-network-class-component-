import myDialogReduser from "./myDialogReduser";
import myPostReduser from "./myPostReduser";



let store = {
    _state: {
        dialogsPage: {
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
            newMassegData: ''
        },
        myPostPage: {
            postData: [
                {id: 1, massenges: "It first post ", like: "   15"},
                {id: 2, massenges: "It  pst ", like: "   9"},
                {id: 3, massenges: "It  post ", like: "   8"},
                {id: 4, massenges: "It  post ", like: "   12"}
            ],
            newPost: ''
        },

        sitebar: {
            frendsName: [
                {id: 1, frendsName: 'Anton'},
                {id: 2, frendsName: 'sweta'},
                {id: 3, frendsName: 'An'},
            ]
        },

    },
    getState () {
        return this._state;
    },

    dispatch(action){
        this._state.dialogsPage =  myDialogReduser(this._state.dialogsPage,action);
        this._state.myPostPage= myPostReduser(this._state.myPostPage ,action)
        this.renderTree(this._state)


    },

    subscribe (observer) {
        this.renderTree = observer
    },

}




export  default  store;
