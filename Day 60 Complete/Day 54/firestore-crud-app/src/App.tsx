// src/App.tsx
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold text-center">Firestore CRUD App</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
