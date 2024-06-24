import {createSlice} from "@reduxjs/toolkit";

const initialState  = {
    status: false,
    userData:null
}

const authSlice  = createSlice({
    name:"auth",
    initialState,
    reducers:{ 
        //userData hoga tbhi hmlog login cll krege jisse chiz mismatch na ho
        login:(state, action)  =>{
            state.status  = true; //login cll hoga tbhi status true ho jyga
            state.userData  = action.payload.userData; 
        },

        logout:(state,action) =>{
           state.status  = false;
           state.userData  = null;   
        }
    }
})
export const {login,logout} = authSlice.actions
export default authSlice.reducer;