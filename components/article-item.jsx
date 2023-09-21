import Link from "next/link";
import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <div>
      <Link href={`/articles/${article.id}`}>{article.title}</Link>
      <p>{article.description}</p>
    </div>
  );
};

export default ArticleItem;
