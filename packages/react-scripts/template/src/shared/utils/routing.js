import { select } from 'redux-saga/effects';
import { filter, identity, isEmpty, split, trim, map, memoizeWith, not, pipe } from 'ramda';
import { useSelector } from 'react-redux';

import { selectLocalesLanguage } from '../../modules/locales/locales.selectors';

const splitUtl = pipe(
  split('/'),
  map(trim),
  filter(
    pipe(
      isEmpty,
      not
    )
  )
);
const composeUrlWithLang = (lang, path) => '/' + [lang].concat(splitUtl(path)).join('/');

export function* composeUrl(path = '') {
  const lang = yield select(selectLocalesLanguage);
  return composeUrlWithLang(lang, path);
}

const composeProp = memoizeWith(identity, lang => path => composeUrlWithLang(lang, path));

export const useComposedUrl = path => {
  const language = useSelector(selectLocalesLanguage);
  return composeProp(language)(path);
};
