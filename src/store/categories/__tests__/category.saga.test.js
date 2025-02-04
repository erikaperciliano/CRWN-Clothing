import { call, all, takeLatest } from "typed-redux-saga";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import { categoriesSaga, fetchCategoriesAsync, onFetchCategories } from "../category.saga";
import { CATEGORIES_ACTION_TYPES } from "../category.types";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "../category.action";

describe("category sagas", () => {
  test("categoriesSaga should trigger all sagas", () => {
    return expectSaga(categoriesSaga)
      .call(onFetchCategories) 
      .run();
  });

  test("onFetchCategories should takeLatest FETCH_CATEGORIES_START", () => {
    testSaga(onFetchCategories)
      .next()
      .takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync) 
      .next()
      .isDone();
  });
});
