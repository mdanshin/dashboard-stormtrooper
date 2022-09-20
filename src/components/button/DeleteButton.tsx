import './deleteButton.scss'

interface props {
  onClick: any
}

function DeleteButton({onClick}: props) {
  return (
    <div className="deleteButton" onClick={onClick}>Delete</div>
  )
}

export default DeleteButton