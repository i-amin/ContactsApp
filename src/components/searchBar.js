import React from 'react';
import _ from 'lodash';

const SearchBar = ({onSearch, onSwitch})=> {

  const debouncedFun = _.debounce((val)=> {
    onSearch(val)
  }, 200);

  function changeHandler(event) {
    debouncedFun(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div className="action-panel clearfix">
      <form action="none" onSubmit={submitHandler}>
        {/*<a href="#" className="btn secondary ">Add</a>*/}

        <div className="container search-container">
          <input type="text" name="search" className="search-field" onChange={changeHandler}
                 placeholder="Type here to search"/>
          <input type="submit" className="hide"/>
        </div>
        <div className="actions">
          <a href="#" className="btn primary" onClick={onSwitch}>Add new</a>
        </div>
      </form>
    </div>
  )
};

export default SearchBar;
