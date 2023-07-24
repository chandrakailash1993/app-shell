import Nav from "../../molecules/Nav";

const Layout = ({ children, ...otherProps }) => {
  return (
    <>
      <header>
        <div style={{ display: "flex" }}>
          <div>
            <img
              src="https://www.coppel.com/images/emarketing/logo.svg"
              width={170}
            />
          </div>
          <Nav />
        </div>
      </header>
      <main {...otherProps}>{children}</main>
      <footer>
        <p>2023 © Coppel todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default Layout;
