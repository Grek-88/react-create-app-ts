import { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import s from "../MoviesApp/MoviesApp.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import LoaderMore from "../Loader/Loader";

interface IError {
  code: number,
  message: string
}

export default function MoviesApp() {
  const [query, setQuery] = useState('');
  const [imgData, setImgData] = useState<[] | null>(null);
  const [error, setError] = useState<IError | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [page, setPage] = useState(1);
  const [bigurl, setBigurl] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const submitForm = (dataQuery: string) => {
    setImgData(null);
    setPage(1);
    setQuery(dataQuery);
  };

  function fetchData() {
    setLoading(true);

    return fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=22269453-01e35d719392ba61f98a14ac3&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          new Error(
            "По такому запросу картинок не найдено. Введите другой запрос."
          )
        );
      })
      .then((imgDataFetch) => {
        setPage(page + 1);
        setImgData((imgData) =>
          imgData ? [...imgData, ...imgDataFetch.hits] : imgDataFetch.hits
        );
        setLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => setError(error));
  }

  const getNewImg = () => {
    fetchData();
  };

  const togleModalShow = (ev?: React.BaseSyntheticEvent) => {
    if (!isOpenModal && ev) {
      setBigurl(ev.target.dataset.bigurl);
    }
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={submitForm} />
      {error && <h3>{error.message}</h3>}
      {imgData && imgData.length === 0 && (
        <h3>По такому запросу картинок не найдено. Введите другой запрос.</h3>
      )}
      {!imgData && loading && <LoaderMore />}
      {imgData && imgData.length > 0 && (
        <>
          <ImageGallery images={imgData} onClick={togleModalShow} />
          {isOpenModal && <Modal showModal={togleModalShow} props={bigurl} />}
          {loading ? <LoaderMore /> : <Button onClick={getNewImg} />}
        </>
      )}
    </div>
  );
}
