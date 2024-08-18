import axios from "axios";
import {
  setAlcoholic,
  setAlcoholicResult,
  setCategory,
  setCategoryList,
  setCocktailDetail,
  setGlasses,
  setGlassResult,
  setIsLoading,
  setRandomCocktail,
  setSearchKeyword,
  setSearchResults,
} from "../reducers/cocktailReducers";
import { showErrorToast } from "../../pages/extra/Toast";

export const getCategories = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_COCKTAIL_APP_SERVER}/list.php?c=list`
    );
    // console.log("response categories", response?.data);
    if (response?.status === 200) {
      dispatch(setCategoryList(response?.data?.drinks));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error categories", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getDrinksByCategory = (category) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_COCKTAIL_APP_SERVER}/filter.php?c=${category}`
    );
    if (response?.status === 200) {
      // console.log("response category", response?.data);
      dispatch(setCategory(response?.data?.drinks));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error category", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getRandomDrinks = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setRandomCocktail([]));
  try {
    const requests = Array.from({ length: 10 }, () =>
      axios.get(`${import.meta.env.VITE_COCKTAIL_APP_SERVER}/random.php`)
    );

    const responses = await Promise.all(requests);

    const cocktails = responses
      .filter((response) => response?.status === 200)
      .flatMap((response) => response?.data?.drinks || []);

    dispatch(setRandomCocktail(cocktails));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.log("error random cocktail", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getDetailDrink = (id) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_COCKTAIL_APP_SERVER}/lookup.php?i=${id}`
    );
    if (response?.status === 200) {
      dispatch(setCocktailDetail(response?.data?.drinks));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error", error);
    showErrorToast("Server Error");
    dispatch(setIsLoading(false));
  }
};

export const searchDrink = (query) => async (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setSearchResults([]));
  dispatch(setSearchKeyword(""));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_COCKTAIL_APP_SERVER}/search.php?s=${query}`
    );
    if (response?.status === 200) {
      dispatch(setSearchResults(response?.data?.drinks));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getGlassType = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_COCKTAIL_APP_SERVER}/list.php?g=list`
    );
    if (response?.status === 200) {
      dispatch(setGlasses(response?.data?.drinks));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getDrinkByGlass = (glass) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_COCKTAIL_APP_SERVER}/filter.php?g=${glass}`
    );
    if (response?.status === 200) {
      dispatch(setGlassResult(response?.data?.drinks));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getAlcoholFilter = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_COCKTAIL_APP_SERVER}/list.php?a=list`
    );
    if (response?.status === 200) {
      dispatch(setAlcoholic(response?.data?.drinks));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};
export const getDrinkByAlcohol = (alcohol) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_COCKTAIL_APP_SERVER}/filter.php?a=${alcohol}`
    );
    if (response?.status === 200) {
      dispatch(setAlcoholicResult(response?.data?.drinks));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};
