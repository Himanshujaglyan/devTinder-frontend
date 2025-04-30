import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addrequests : (state , action)=>{
            return action.payload
        },
        removerequest : (state , action)=>{
            const newArray = state.filter(obj => obj._id != action.payload )
            return newArray
        }
    }
})


export const {addrequests,removerequest} = requestsSlice.actions;
export default requestsSlice.reducer;