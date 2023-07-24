import React from "react";
import Link from "next/link";

const Nav = () => {
  const linkStyle = { padding: 5, marginBottom: 5 };
  return (
    <header>
      <nav>
        <ul
          style={{ listStyle: "none", padding: 0, margin: 0, display: "flex" }}
        >
          <li style={linkStyle}>
            <Link href={"/"}>Home</Link>
          </li>
          <li style={linkStyle}>
            <Link href={"/product"}>Product</Link>
          </li>
          <li style={linkStyle}>
            <Link href={"/search"}>Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
