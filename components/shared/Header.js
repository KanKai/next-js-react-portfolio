import React from "react";
import Link from "next/link";

import "../../styles/main.scss";

class Header extends React.Component {
  render() {
    const title = this.props.title;

    return (
      <React.Fragment>
        <p> {title} </p>
        {this.props.children}

        <Link href="/">
          <a> Home </a>
        </Link>

        <Link href="/about">
          <a> About </a>
        </Link>

        <Link href="/blogs">
          <a> Blogs </a>
        </Link>

        <Link href="/portfolios">
          <a className="highLightTextFromFile"> Portfolios </a>
        </Link>

        <Link href="/cv">
          <a className="highLightText"> Cv </a>
        </Link>

        <style jsx>{`
          a {
            font-size: 20px;
          }
          .highLightText {
            font-weight: bold;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Header;
