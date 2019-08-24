import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jsckets: 3,
  womens: 4,
  mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionParam =>
  createSelector(
    [selectCollections],
    collections =>
      collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionParam]
      )
  );
