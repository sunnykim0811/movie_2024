import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{
  state ={
    isLoading: true,
    movies:[],
  }


  getMovies = async () => {
    const {
      data:{
        data:{movies},
      },

    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    //영화데이터 로딩
   this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (

      <section className="container">
        {isLoading ?(
          <div className="loader">
            <span className="loader__text">'Loading...'</span>
          </div>
        ):( 
          <div className ="movies">
            {movies.map((current) => (
              <Movie 
                key={current.id} 
                title={current.title} 
                year={current.year} 
                synopsis={current.synopsis} 
                poster={current.medium_cover_image} 
                genres={current.genres}
              />
            ))}
            </div>)}
      </section>
    );
  }
}

export default Home;