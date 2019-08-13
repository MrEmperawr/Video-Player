import React, {useState, useEffect} from 'react';
import fetch from 'node-fetch';
import MappleTooltip from 'reactjs-mappletooltip';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';
import FilmCard from './FilmCard';

function App() {
  const [videoData, setVideoData] = useState(false)
  const [whichFilm, setWhichFilm] = useState("https://media.w3.org/2010/05/sintel/trailer_hd.mp4")

  useEffect( ()=> {
    fetch("https://api.myjson.com/bins/so5pk")
      .then(res => res.json())
      .then(data => setVideoData(data))
      .catch(error => console.log(error))
  }, [])

  useEffect( () => {

  }, [whichFilm])

  const changeFilm = (state) => {
    setWhichFilm(state.video);
  }

  return (
    <div className="App">
      {videoData ? 
      <main className="App-main">
        <section className="App-Video">
          <VideoPlayer trailer={whichFilm}/>
        </section>
        <section className="App-FilmInfo">
          <ul className="App-Films">
            {videoData.map(videoData => 
              <li onMouseEnter={changeFilm}>
                <FilmCard filmName={videoData.name}
                filmInfo={videoData.description}
                filmImg={videoData.image}
                filmLink={videoData.video} />
              </li>
            )}
          </ul>
        </section>
        {console.log(whichFilm)}
      </main>
      :
      <div>No data!</div>
    }
    </div>
    );
}

export default App;
