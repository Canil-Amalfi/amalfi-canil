import { useParams } from "react-router-dom";
import articles from "../../mocks/articles.json";
import EachBlogPost from "../../components/EachBlogPost";

export default function BlogPosts() {

    const params = useParams()
    const post = articles.find(article => article.id === Number(params.id));

    if(!post) return <h1>Pagina não encontrada</h1>

    return (
      <EachBlogPost
        title={post.titleArticle}
        text={post.articleText}
      />
    )
}