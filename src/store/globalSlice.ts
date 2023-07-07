import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    user: {},
    groups: [],
    roomLoading: true
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setGroups(state, action) {
      state.groups = action.payload;
    },
    setRoomLoading(state, action) {
      state.roomLoading = action.payload;
    }
  },
});

export const { setUser, setGroups, setRoomLoading } = globalSlice.actions;
export default globalSlice.reducer;