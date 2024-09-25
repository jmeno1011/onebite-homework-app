import style from "./page.module.css";
import movies from "@/mock/dummy.json";

interface PageProps {
  params: {
    id: string;
  }
}

export default function Page({ params }: PageProps) {

  const movie = movies.filter(mov => String(mov.id) === params.id)[0];

  if (movie === null) return "문제가 발생했습니다. 다시 시도하세요.";

  const {
    title,
    subTitle,
    description,
    releaseDate,
    company,
    genres,
    runtime,
    posterImgUrl,
  } = movie

  return (
    <div className={style.container}>
      <div style={{ backgroundImage: `url(${posterImgUrl})` }} className={style.poster_img_container}>
        <img src={posterImgUrl} alt={`${title}-image`} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.movieInfo}>
        <div>{releaseDate}</div>
        <div>/</div>
        <div>{genres.map((genre, index) => {
          if (index + 1 === genres.length) {
            return (<span key={genre}>{genre}</span>)
          } else {
            return (<span key={genre}>{genre},</span>)
          }
        })}</div>
        <div>/</div>
        <div>{runtime}분</div>
      </div>
      <div>{company}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div>{description}</div>
    </div>
  )
}
