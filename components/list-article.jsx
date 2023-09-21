import React from "react";
import ArticleItem from "./article-item";

const ListArticles = ({ articles }) => {
  return (
    <div>
      {articles.map((item) => {
        return <ArticleItem article={item} />;
      })}
    </div>
  );
};

export default ListArticles;
