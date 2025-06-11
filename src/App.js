
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NotesList } from './components/NotesList';
import { TopContent } from './components/TopContent';
import { useState } from 'react';
import './App.css';


export default function App() {
  return (

    <div>
      <Header />
      <TopContent />
      <h1 className="textSizes">Notes</h1>
      <div className="App">  </div>
      <NotesList />
      <Footer></Footer>
    </div>

  );
}