import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import allMovies from "@/mock/dummy.json";
export default function Home() {
  return (
    <div>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommend_row}>
          {
            allMovies.slice(0, 3).map(movie => <MovieItem key={movie.id} {...movie} />)
          }
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_content_container}>
          {
            allMovies.map(movie => <MovieItem key={movie.id} {...movie} />)
          }
        </div>
      </section>
    </div>
  )
}
