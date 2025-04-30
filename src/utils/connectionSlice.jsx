import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
    name:"connections",
    initialState : null,
    reducers:{
        addconnections: (state , action)=>{
            return action.payload;
        },
        removeconnections: (state , action)=>{
            return null
        }
    }
})

export const {addconnections , removeconnections} = connectionsSlice.actions; 
export default connectionsSlice.reducer;