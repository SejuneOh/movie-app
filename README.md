# React-Movie-APP

## 목적

**React를 통한 외부 API 정보를 가지고 영화 조회 및 내용확인 App**


## Stack
 - React(CRA), React-Router-Dom, prop-types
 - CSS
 - JS
 - API Fetch


### React-Router-Dom

- react-router-dom을 통한 페이지 이동
- Link를 통한 이동 시 렌더링된 페이지는 Rerender 하지 않는다.
- 페이지에 대한 path 정보만 정의하면, 페이지 이동을 쉽게 할 수 있다.

```html
<!-- //import { BrowserRouter, Routes, Route } from 'react-router-dom' -->

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<Detail />} />
  </Routes>
</BrowserRouter>
```

### Async, Await

- 비동기성 api 처리
- useState를 이용하여 비동기 데이터 보여주기
- useEffect 사이드 이펙트 컨트롤하기
- json data 객체, 배열화 하기
  
```js
const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();

    setMovies(json.data.movies)
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, [])
```

### Prop-Types Lib

- prop-types를 지정하여 필수로 받아야하는 props 지정

```js
Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
}
```

