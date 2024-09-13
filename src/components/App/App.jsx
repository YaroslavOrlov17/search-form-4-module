import SearchForm from "../SearchForm/SearchForm"
import ArticleList from "../ArticleList/ArticleList"
import Error from "../Error/Error"
import Loader from "../Loader/Loader"
import { fetchArticleWithTopic } from "../../assets/articles-api.js"
import { useState } from "react"
import s from "./App.module.css"

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSearch = async (topic) => {
    try {
      setArticles([])
      setError(false)
      setLoading(true)
      const data = await fetchArticleWithTopic(topic)
      setArticles(data)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={s.appBox}>
      <h1>Останні статті</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  )
}

export default App
