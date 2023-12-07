import Expertise from "./components/Expertise/Expertise";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Work from './components/Work/Work'
import css from './styles/app.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Work/>
  </div>;
};

export default App;
