import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cocktailDetail: null,
  randomCocktail: [],
  category: [],
  categoryList: [],
  glasses: [],
  glassResult: [],
  selectedGlass: null,
  selectedCategory: null,
  alcoholic: [],
  alcoholicResult: [],
  selectedAlcoholic: null,
  searchKeyword: "",
  searchResults: [],
  isLoading: true,
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
    setCocktailDetail: (state, action) => {
      state.cocktailDetail = action.payload;
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
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedGlass: (state, action) => {
      state.selectedGlass = action.payload;
    },
    setGlasses: (state, action) => {
      state.glasses = action.payload;
    },
    setGlassResult: (state, action) => {
      state.glassResult = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setAlcoholic: (state, action) => {
      state.alcoholic = action.payload;
    },
    setAlcoholicResult: (state, action) => {
      state.alcoholicResult = action.payload;
    },
    setSelectedAlcoholic: (state, action) => {
      state.selectedAlcoholic = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setCocktailDetail,
  setRandomCocktail,
  setCategory,
  setCategoryList,
  setSelectedCategory,
  setSelectedGlass,
  setGlasses,
  setGlassResult,
  setSearchKeyword,
  setSearchResults,
  setAlcoholic,
  setAlcoholicResult,
  setSelectedAlcoholic,
  setIsLoading,
} = cocktailSlice.actions;

export default cocktailSlice.reducer;
