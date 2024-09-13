import s from "./SearchForm.module.css"

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const topic = form.elements.topic.value
    if (form.elements.topic.value.trim() === "") {
      alert("Будь ласка введіть пошуковий запит!")
      return
    }

    onSearch(topic)
    form.reset()
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm
