/**
 *  Stworzone przez Eryk Mariankowski dnia 30.05.18.
 */
import * as React from 'react';
import {VisibilityFilters} from './actions';
import FilterLink from './FilterLink';

const Footer: React.StatelessComponent = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
