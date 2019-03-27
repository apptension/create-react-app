import { createSelector } from 'reselect';
import { prop } from 'ramda';


export const selectStartupDomain = prop('startup');
