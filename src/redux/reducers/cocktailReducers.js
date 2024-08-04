import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cocktails: [],
  cocktailDetaol: null,
  randomCocktail: [],
  category: [],
  categoryList: [],
  categoryName: null,
  searchKeyword: "",
  searchResults: [],
  isLoading: true,
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
    setCocktail: (state, action) => {
      state.cocktails = action.payload;
    },
    setCocktailDetail: (state, action) => {
      state.cocktailDetaol = action.payload;
    },
    setRandomCocktail: (state, action) => {
      state.randomCocktail = action.payload;
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
  setCocktail,
  setCocktailDetail,
  setRandomCocktail,
  setCategory,
  setCategoryList,
  setCategoryName,
  setSearchKeyword,
  setSearchResults,
  setIsLoading,
} = cocktailSlice.actions;

export default cocktailSlice.reducer;
