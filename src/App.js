import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from "./pages/CardList";
import AddNewCard from "./pages/AddNewCard";
import UpdateCard from "./pages/UpdateCard";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { CardContext } from "./context/CardContext";
import { CardListContext } from "./context/CardListContext";


function App() {
  const [cardDetails,setCardDetails] = useState({})
  const [cardLists,setCardLists] = useState([])
  return (
    <BrowserRouter>
      <CardContext.Provider value={{cardDetails,setCardDetails}}>
      <CardListContext.Provider value={{cardLists,setCardLists}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CardList />} />
            <Route path="/addcard" element={<AddNewCard />} />
            <Route path="/update" element={<UpdateCard />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        </CardListContext.Provider>
      </CardContext.Provider>
    </BrowserRouter>
  );
}

export default App;
