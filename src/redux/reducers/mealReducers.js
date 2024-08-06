import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mealDetail: null,
  randomMeal: [],
  category: [],
  categoryResult: [],
  selectedCategory: null,
  area: [],
  areaResult: [],
  selectedArea: null,
  searchKeyword: "",
  searchResults: [],
  isLoading: true,
};

const mealSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setMealDetail: (state, action) => {
      state.mealDetail = action.payload;
    },
    setRandomMeal: (state, action) => {
      state.randomMeal = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCategoryResult: (state, action) => {
      state.categoryResult = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setArea: (state, action) => {
      state.area = action.payload;
    },
    setAreaResult: (state, action) => {
      state.areaResult = action.payload;
    },
    setSelectedArea: (state, action) => {
      state.selectedArea = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setMealDetail,
  setRandomMeal,
  setCategory,
  setCategoryResult,
  setSelectedCategory,
  setArea,
  setAreaResult,
  setSelectedArea,
  setSearchKeyword,
  setSearchResults,
  setIsLoading,
} = mealSlice.actions;

export default mealSlice.reducer;
