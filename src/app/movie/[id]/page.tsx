interface PageProps {
  params: {
    id: string | string[]
  }
}

export default function Page({ params }: PageProps) {
  return (
    <div>movie /movie/[id] Page params.id : {params.id}</div>
  )
}
