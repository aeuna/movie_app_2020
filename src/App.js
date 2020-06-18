import React from 'react';
import axios from 'axios';
import Movie from './Movie'
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => { //자바스크립트에게 getMovies()함수는 시간이 필요하다 알려줌
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); //axios.get()의 실행을 기다려 달라고 말해준다
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() { //App component가 그려지면 호출되는 함수
    //영화 데이터 로딩
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state
    return (<section class="container">{isLoading ? (
      <div class="loader">
        <span class="loader__text">Loading...</span>
      </div>
    ) : (
        <div class="movies">
          {
            movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
        </div>
      )}
    </section>
    )//로딩 완료시 영화데이터 출력
  }
}

export default App;
