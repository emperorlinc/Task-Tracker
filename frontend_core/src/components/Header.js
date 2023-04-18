import Button from './Button'

const Header = ({showForm, toggleForm}) => {

  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button showForm={showForm} toggleForm={toggleForm} text={showForm ? "Close" : "Add"} color={showForm ? "red" : "green"}/>
    </div>
  )
}
export default Header;
