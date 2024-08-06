import axios from "axios";
import {
  setArea,
  setAreaResult,
  setCategory,
  setCategoryResult,
  setIsLoading,
  setMealDetail,
  setRandomMeal,
  setSearchKeyword,
  setSearchResults,
} from "../reducers/mealReducers";
import { showErrorToast } from "../../pages/extra/Toast";

export const getRandomMeal = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setRandomMeal([]));
  try {
    const requests = Array.from({ length: 10 }, () =>
      axios.get(`${import.meta.env.VITE_RECIPE_APP_SERVER}/random.php`)
    );

    const responses = await Promise.all(requests);

    // Extract and flatten the meals arrays from all responses
    const meals = responses
      .filter((response) => response?.status === 200)
      .flatMap((response) => response?.data?.meals || []);

    dispatch(setRandomMeal(meals));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.log("error random meal", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getCategories = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_RECIPE_APP_SERVER}/categories.php`
    );
    // console.log("response categories", response?.data);
    if (response?.status === 200) {
      dispatch(setCategory(response?.data?.categories));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error categories", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getArea = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_RECIPE_APP_SERVER}/list.php?a=list`
    );
    // console.log("response area", response?.data);
    if (response?.status === 200) {
      dispatch(setArea(response?.data?.meals));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error area", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getRecipeDetail = (id) => async (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setMealDetail([]));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_RECIPE_APP_SERVER}/lookup.php?i=${id}`
    );
    if (response?.status === 200) {
      // console.log("response detail", response?.data);
      dispatch(setMealDetail(response?.data?.meals));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error recipe detail", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getMealsByCategory = (category) => async (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setCategoryResult([]));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_RECIPE_APP_SERVER}/filter.php?c=${category}`
    );
    if (response?.status === 200) {
      // console.log("response category", response?.data);
      dispatch(setCategoryResult(response?.data?.meals));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error category", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const getMealsByArea = (area) => async (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setAreaResult([]));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_RECIPE_APP_SERVER}/filter.php?a=${area}`
    );
    if (response?.status === 200) {
      // console.log("response area", response?.data);
      dispatch(setAreaResult(response?.data?.meals));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error area", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};

export const searchMeal = (query) => async (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setSearchResults([]));
  dispatch(setSearchKeyword(""));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_RECIPE_APP_SERVER}/search.php?s=${query}`
    );
    if (response?.status === 200) {
      // console.log("response search", response?.data);
      dispatch(setSearchResults(response?.data?.meals));
      dispatch(setIsLoading(false));
    }
  } catch (error) {
    console.log("error search", error);
    dispatch(setIsLoading(false));
    showErrorToast("Server Error");
  }
};
