import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="card">
      <div>
        <Profile
          image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          name="Dinh Vinh Khoi"
          btn="Submit"
        ></Profile>
      </div>
      <div>
        <Profile
          image="https://images.gr-assets.com/authors/1492314822p8/68.jpg"
          name="John C.Maxwell"
          btn="FOLLOW"
        ></Profile>
      </div>
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
