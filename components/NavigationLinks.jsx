import React from "react";
import Link from "next/link";


const NavigationLinks = () => {
  return (
    <nav>
      <Link href="/articles">Articles</Link>
      <Link href="/auteurs">Auteurs</Link>
    </nav>
  );
};

export default NavigationLinks;
