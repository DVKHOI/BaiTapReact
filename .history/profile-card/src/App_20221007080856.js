import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Profile
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKwO6FbZcN-VPnD4LnWpWT-mBa1XGJlHuog&usqp=CAU"
        name="Dinh Vinh Khoi"
        btn="Submit"
      ></Profile>
    </div>
  );
}
function Profile(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="card--header" />
        <img className="avatar" src={props.image} alt="avatar" />
        <div className="card--body">
          <div>
            <p className="text-header">{props.name}</p>
            <p className="text-sub">{props.desc}</p>
            <button className="btn third">{props.btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
