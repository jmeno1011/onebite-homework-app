interface PageProps {
  searchParams: {
    q?: string;
  }
}

export default function Page({ searchParams }: PageProps) {
  return (
    <div>Search Page params : {searchParams.q}</div>
  )
}
