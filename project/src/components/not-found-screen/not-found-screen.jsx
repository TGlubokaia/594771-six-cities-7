import React from 'react';
import LogoFooter from '../logo/logo-footer';
import Header from '../header/header';

function NotFoundScreen() {
  return (
    <div className="page">
      <Header />
      <main className="page__main ">
        <div className="page__favorites-container container">
          <section>
            <h1>404. Page not found</h1>
            <a href="/">Вернуться на главную</a>
          </section>
        </div>
      </main>
      <footer className="footer">
        <LogoFooter />
      </footer>
    </div>
  );
}

export default NotFoundScreen;
