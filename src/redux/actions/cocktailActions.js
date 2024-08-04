import axios from "axios";
import { setIsLoading, setRandomCocktail } from "../reducers/cocktailReducers";

// export const getCategories = () => async (dispatch) => {
//   dispatch(setIsLoading(true));
//   try {
//     const response = await axios.get(
//       `${import.meta.env.VITE_COCKTAIL_APP_SERVER}/categories.php`
//     );
//     // console.log("response categories", response?.data);
//     if (response?.status === 200) {
//       dispatch(setCategory(response?.data?.categories));
//       dispatch(setIsLoading(false));
//     }
//   } catch (error) {
//     console.log("error categories", error);
//     dispatch(setIsLoading(false));
//     showErrorToast("Server Error");
//   }
// };

export const getRandomDrinks = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const requests = Array.from({ length: 10 }, () =>
      axios.get(`${import.meta.env.VITE_COCKTAIL_APP_SERVER}/random.php`)
    );

    const responses = await Promise.all(requests);

    // Extract and flatten the cocktails arrays from all responses
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
