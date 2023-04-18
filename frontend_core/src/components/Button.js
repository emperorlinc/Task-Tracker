const Button = ({ toggleForm, showForm, text, color }) => {

  return <button className="btn" onClick={toggleForm} style={{backgroundColor: color}}>{ text }</button>
}
export default Button
