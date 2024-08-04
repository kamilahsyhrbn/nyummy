import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  mealDetail: null,
  randomMeal: [],
  category: [],
  categoryList: [],
  categoryName: null,
  searchKeyword: "",
  searchResults: [],
  isLoading: true,
};

const mealSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setMeals: (state, action) => {
      state.meals = action.payload;
    },
    setMealDetail: (state, action) => {
      state.mealDetail = action.payload;
    },
    setRandomMeal: (state, action) => {
      state.randomMeal = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
    setCategoryName: (state, action) => {
      state.categoryName = action.payload;
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
  setMeals,
  setMealDetail,
  setRandomMeal,
  setCategory,
  setCategoryList,
  setCategoryName,
  setSearchKeyword,
  setSearchResults,
  setIsLoading,
} = mealSlice.actions;

export default mealSlice.reducer;
