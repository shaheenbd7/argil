import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeMode } from '../../types';

interface UiState {
  themeMode: ThemeMode;
  loading: boolean;
  error?: string;
}

const initialState: UiState = {
  themeMode: 'light',
  loading: false,
  error: undefined,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = undefined;
    },
  },
});

export const { setThemeMode, setLoading, setError, clearError } = uiSlice.actions;

export default uiSlice.reducer;
