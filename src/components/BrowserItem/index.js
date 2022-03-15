import './index.css'

const BrowserItem = props => {
  const {browserDetails, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserDetails

  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item" key={id}>
      <div className="logo-title">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button
          className="del-img"
          type="button"
          onClick={onDeleteItem}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserItem
