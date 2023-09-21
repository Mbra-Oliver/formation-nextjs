import Link from "next/link";
import "./../../public/css/global.css";
import Image from "next/image";
import ListArticles from "@/components/list-article";

const articles_datas = [
  {
    id: 1,
    title: "Le titre de mon article",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, facilis ipsa. .",
  },
  {
    id: 2,
    title: "Article 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, facilis ipsa. .",
  },
  {
    id: 3,
    title: "Article 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, facilis ipsa. .",
  },
];

function page() {
  return (
    <div>
      <h3>Liste des articles</h3>

      <ListArticles articles={articles_datas} />
    </div>
  );
}

export default page;
