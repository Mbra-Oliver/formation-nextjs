import Link from "next/link";
import "./../../public/css/global.css";
import Image from "next/image";

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

      {articles_datas.map((item) => {
        return (
          <div key={item.id} className="article_card">
            <Image src="/images/blog.jpg" width={150} height={150} />
            <div className="more_data">
              <Link className="link" href={`/articles/${item.id}`}>
                <h5>{item.title}</h5>
              </Link>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default page;
