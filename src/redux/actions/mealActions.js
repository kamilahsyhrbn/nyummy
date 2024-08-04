import axios from "axios";
import {
  setCategory,
  setIsLoading,
  setMealDetail,
  setMeals,
  setRandomMeal,
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
