import { NavLink, Routes, Route } from "react-router-dom";
import s from './App.module.css'

import Profile from "./components/Profile/Profile";
import user from "./data/user.json";

import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./data/statistical-data.json";

import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

import MoviesApp from "./components/Movies/MoviesApp/MoviesApp";

import Footer from "./components/Footer/Footer"

type Props = {
  isActive: boolean;
}

function App() {

  const activLink = ({ isActive }: Props) => (!isActive ? '' : `${s.active}`);

  return (
    <>
      <h1>React with TypeScript</h1>
  
        <div>
          <nav>
            <ul>
              <li><NavLink to="/" className={activLink}>Movies example</NavLink></li>

              <li className={s.moreLink}>More example
                <ul className={s.itemLink}>
                  <li><NavLink to="/profile" className={activLink}>Profile example</NavLink></li>
                  <li><NavLink to="/statistics" className={activLink}>Statistics example</NavLink></li>
                  <li><NavLink to="/friend-list" className={activLink}>Friend-list example</NavLink></li>
                  <li><NavLink to="/transactions" className={activLink}>Transactions example</NavLink></li>
                </ul>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/profile" element={
              <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
              />} />

            <Route path="/statistics" element={
              <Statistics title="Upload stats" stats={statisticalData} />} />

            <Route path="/friend-list" element={
              <FriendList friends={friends} />} />

            <Route path="/transactions" element={
              <TransactionHistory items={transactions} />} />

            <Route path="/" element={<MoviesApp />} />
          </Routes>
        </div>
      <div className={s.footer}>
        <Footer />
      </div>
    </>
  );
}

export default App;
