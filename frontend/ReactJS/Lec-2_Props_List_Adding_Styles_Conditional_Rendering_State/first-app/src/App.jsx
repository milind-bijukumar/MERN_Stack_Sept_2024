// import Hello from "./components/Hello";
import Counter from "./components/counter/Counter";
import Greeting from "./components/greet/Greeting";
import UserList from "./components/users/UserList";

//const name = "Ashwani Rajput";
const users = [
  { id: 1, name: "Ashwani Rajput", age: 30 },
  { id: 2, name: "Pallavi", age: 25 },
  { id: 3, name: "Nagasai", age: 28 },
  { id: 4, name: "Sruthi123", age: 27 },
  { id: 5, name: "Milind", age: 26 },
];

const isUserLoggedin = true;

const App = () => {
  return (
    <>
      {/* <Hello userName="Ashwani" age={30} />
      <Hello userName="Pallavi" age={25} />
      <Hello userName="Nagasai" age={28} />
      <Hello userName="Sruthi" age={27} />
      <Hello userName="Hemant" age={26} /> */}

      {isUserLoggedin ? (
        <UserList userData={users} />
      ) : (
        <Greeting isLoggedIn={false} />
      )}

      <Counter />
    </>
  );
};

export default App;
