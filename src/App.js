/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default() => {


  const [movieList, setMovieList] = useState([]);
/* use state específico para apresentar o filme principal/ em destaque */
  const [featuredData, setFeaturedData] = useState([]);


  useEffect(() => {
    const loadAll = async () => {


      let list = await Tmdb.getHomeList();
      setMovieList(list);
      //Pegando dados aleatorios no Featured

      // pegar lista original netflix

      let originals = list.filter(i=>i.slug === 'originals');

      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
      setFeaturedData(chosenInfo);








    }

    loadAll();



  },[]);
  




  return(
    <div className="page">

      {featuredData && 

      <FeaturedMovie item ={featuredData}/>

      } 



       <section className="lists">
         {movieList.map((item, key) => (
           <div>

             <MovieRow key={key} title={item.title} items={item.items}/>

           </div>
         ))}
       </section>
    </div>

  );


}