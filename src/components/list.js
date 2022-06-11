import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
//
import Card from './card';

export default function List() {

  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');


  const getSearchData = (query) => {

    setLoading(true);
    setError('');

    axios.get(`https://ghibliapi.herokuapp.com/films/${query && `?q=${query}`}`)
      .then(res => {
        setMovies(res.data);
        setLoading(false);
        if (!res.data || res.data.length === 0) setError('There are not results.');
      })
      .catch(err => {
        setMovies([]);
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getSearchData('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    getSearchData(searchInput);
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              id="search_input"
              className="form-control"
              type="text"
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Search..."
              disabled={loading}
              autoFocus
            />
          </form>
          <p className="text-white"></p>
        </div>
      </div>
      <div className="row">
        {
          error
            ? <p> {error} </p>
            : movies.map(movie => {
                return (<Card key={movie.id} movie={movie}/>);
              })
        }
      </div>
    </Fragment>
  );
}
