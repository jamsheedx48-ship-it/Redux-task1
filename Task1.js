function counterReducer(state={count:0},action){
    switch(action.type){
        case "increment":
            return {count:state.count+1}

        case "decrement":
            return {count:state.count-1}
            
        default:
            return state
    }

}

function createStore(reducer){
 let state;
 let listeners=[]

 const getState=()=>state
 const dispatch=(action)=>{
   state= reducer(state,action)
    listeners.forEach((listener)=>listener())

 }
 const subscribe=(listener)=>{
    listeners.push(listener)
 }

    dispatch({type:"@@INIT"})
    return{subscribe,dispatch,getState};
}

const store=createStore(counterReducer)

store.subscribe(()=>{
    console.log("state changed",store.getState());
    
})

store.dispatch({type:"increment"})
store.dispatch({type:"decrement"})
store.dispatch({type:"decrement"})