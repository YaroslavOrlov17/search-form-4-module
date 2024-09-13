import s from "./ArticleList.module.css"

const ArticleList = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank">
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ArticleList
