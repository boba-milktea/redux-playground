import { type ReactNode } from 'react';
import { NavLink, Link } from 'react-router';

interface LinkPropTypes {
  children: ReactNode;
  to: string;
  type?: string;
  style?: string;
}

const BtnLink = ({ to, children, type }: LinkPropTypes) => {
  if (type === 'nav-link')
    return (
      <NavLink
        className={({ isActive }) =>
          isActive ? 'btn-link active' : 'btn-link'
        }
        to={to}
      >
        {children}
      </NavLink>
    );
  else {
    return <Link to={to}>{children}</Link>;
  }
};

export default BtnLink;
