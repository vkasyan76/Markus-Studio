const filterList = ['all', 'Berlin', 'Paris']

const SearchFilter = () => {
  const [currentFilter, setCurrentFilter] = useState('all')

  const handleClick = (newFilter) => {
    console.log(newFilter)
    setCurrentFilter(newFilter)
  }

  return (
    <div className="project-filter">
      <nav>
        {filterList.map((f) => (
          <button>
            key={f}
            onClick={() => handleClick(f)}
            className = {currentFilter === f ? 'active' : ''}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default SearchFilter
