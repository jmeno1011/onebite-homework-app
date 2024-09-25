import { MovieData } from '@/type'
import Link from 'next/link'
import style from "./movie-item.module.css";

export default function MovieItem({
  id,
  posterImgUrl,
}: MovieData) {
  return (
    <Link href={`/movie/${id}`}>
      <img src={posterImgUrl} className={style.postImg} />
    </Link>
  )
}
