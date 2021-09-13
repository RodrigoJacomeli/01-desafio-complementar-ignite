import { useState } from 'react';

import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} onHandleClickButton={handleClickButton} />

      <div className="container">
        <Header selectedGenreId={selectedGenreId} />
        <Content selectedGenreId={selectedGenreId} />
      </div>
    </div>
  )
}