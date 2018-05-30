/**
 *  Stworzone przez Eryk Mariankowski dnia 29.05.18.
 */
import * as React from 'react';
import {ReactNode} from 'react';
import {preventDefaultFun} from '../common/common-func';

const Link: React.StatelessComponent<ILinkProps> = ({active, children, onClick}) => {
  if (active) {
    return (<span>{children}</span>);
  }
  return (
    <a
      href=""
      onClick={preventDefaultFun(onClick)}>
      {children}
    </a>
  );
};

interface ILinkProps {
  active: boolean,
  childrent: ReactNode,
  onClick: VoidFunction
}

export default Link;
