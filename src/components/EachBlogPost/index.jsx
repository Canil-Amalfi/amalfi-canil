import ReactMarkdown from "react-markdown";
import styles from "./EachBlogPost.module.css";
import PropTypes from "prop-types";

export default function EachBlogPost({ title, text }) {
  return (
    <article className={styles.article__main}>
        <h1>{title}</h1>
        <ReactMarkdown className={styles.articleText}>
            {text}
        </ReactMarkdown>
    </article>
  );
}

EachBlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
