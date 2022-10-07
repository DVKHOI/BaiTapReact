import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Profile
        image="https://live.staticflickr.com/65535/50663863366_b21325e5b5_k.jpg"
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
