import { Category } from "./categories.types";

import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSucceed,
} from "./categories.action";
import { AnyAction } from "redux";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  } else if (fetchCategoriesSucceed.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  } else if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  } else {
    return state;
  }
};
