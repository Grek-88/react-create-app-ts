import React, { useState } from "react";
import s from "../Searchbar/Searchbar.module.css";

interface ISearchbar {
  onSubmit: (ev: string)=> void;
}

export default function Searchbar(props: ISearchbar) {
  const [query, setQuery] = useState('');

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    
    if (query === "") {
      alert("Для поиска необходимо ввести слово");
      return;
    }
    props.onSubmit(query);
    setQuery("");
  };

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.target.value.toLowerCase().trim());
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={onChange}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
