import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Hospital {
  id: string;
  hospitalName: string;
  address: string;
  location: number;
}

interface HospitalsState {
  hospitals: Hospital[];
}

const initialState: HospitalsState = {
  hospitals: [],
};

const hospitalsSlice = createSlice({
  name: 'hospitals',
  initialState,
  reducers: {
    addHospital: (state, action: PayloadAction<Hospital>) => {
      state.hospitals.push(action.payload);
    },
  },
});

export const { addHospital } = hospitalsSlice.actions;
export default hospitalsSlice.reducer;
