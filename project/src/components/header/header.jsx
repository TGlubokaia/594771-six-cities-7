import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppRoute } from '../../const';
import { logout } from '../../store/api-actions';
import { getAuthorizationInfo } from '../../store/user/selectors';
import Logo from '../logo/logo';

function Header() {
  const authorizationInfo = useSelector(getAuthorizationInfo);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  const handleSignOutClick = () => {
    onLogout();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <div className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationInfo
                    ? <Link to={AppRoute.FAVORITES}><span className="header__user-name user__name">{authorizationInfo.email}</span></Link>
                    : <Link to={AppRoute.LOGIN}><span className="header__login">Sign in</span></Link>}
                </div>
              </li>
              {authorizationInfo
                ? (
                  <li className="header__nav-item" onClick={handleSignOutClick}>
                    <a className="header__nav-link" href="#">
                      <span className="header__signout" >Sign out</span>
                    </a>
                  </li>
                )
                : ''}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
