import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

  name:'auth',

  initialState:{
    user:null,
    token:localStorage.getItem('token') || null
  },

  reducers:{

    register:(state,action)=>{
      state.user = action.payload
    },

    login:(state,action)=>{
      state.user = action.payload,
      state.token = action.payload.token

    },

    logout:(state)=>{
      state.user = null;
      state.token = null;
      localStorage.removeItem('token')
    }

  }


})


export const {register,login,logout} = authSlice.actions;

export default authSlice.reducer


