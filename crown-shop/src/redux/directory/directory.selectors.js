import { createSelector } from "reselect";

const selectDirecoty = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirecoty],
  directory => directory.sections
);
