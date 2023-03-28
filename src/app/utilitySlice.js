import { createSlice } from "@reduxjs/toolkit";

export const utilitySlice = createSlice({
    name: 'sidebarToggle',
    initialState: {
        sidebarState: false
    },
    reducers: {
        setSidebarActive: (state, action) => {
            state.sidebarState = action.payload
        }
    }
})
export const { setSidebarActive } = utilitySlice.actions
export default utilitySlice.reducer