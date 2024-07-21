import ReactMarkdown from "react-markdown";
import styles from "./EachBlogPost.module.css";
import PropTypes from "prop-types";
import PostsHeader from "../PostsHeader";

export default function EachBlogPost({ title, text }) {
  return (
    <>
      <PostsHeader/>
      <article className={styles.article__main}>
        <h1>{title}</h1>
        <ReactMarkdown className={styles.articleText}>{text}</ReactMarkdown>
      </article>
    </>
  );
}

EachBlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
