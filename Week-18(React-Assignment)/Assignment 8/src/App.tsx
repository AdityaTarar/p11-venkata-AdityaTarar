// App.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "../src/Store/store";
import RecommendedGiftsList from "./Pages/RecommendedGiftsList";
import UserPreferencesForm from "./Pages/UserPreferencesForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserPreferencesForm />
        <RecommendedGiftsList />
      </div>
    </Provider>
  );
}

export default App;
