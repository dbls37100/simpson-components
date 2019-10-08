import React from 'react';
import Navbar from './components/Navbar.js';
import QuoteCard from './components/QuoteCard.js'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuoteCard character="Nelson Muntz" quote="Shoplifting is a victimless crime, like punching someone in the dark." image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185" />
      <QuoteCard character="Bart Simpson" quote="You're turning me into a criminal when all I want to be is a petty thug." image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"/>
      <QuoteCard character="Lisa Simpson" image="https://i.f1g.fr/media/madame/400x/sites/default/files/img/2014/10/lisa-simpson.jpg"/>


    </div>
  );
}
export default App;
