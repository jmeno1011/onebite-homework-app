"use client";
import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import movies from "@/mock/dummy.json";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  if (!q) return <div>검색어를 입력해주세요.</div>

  const result = movies.filter(movies => movies.title.includes(q));
  return (
    <div className={style.container}>
      {result.length > 0 ? result.map(movie =>
        <MovieItem key={movie.id} {...movie} />
      ) : <div>검색 결과가 없습니다.</div>}
    </div>
  )
}
