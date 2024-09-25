"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  const [search, setSearch] = useState("")


  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  }

  useEffect(() => {
    setSearch(q || "")
  }, [q])

  return (
    <div>
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} type="text" />
      <button onClick={onSubmit}>검색</button>
    </div>
  )
}
