import React from 'react';
import "./SearchStudent.css";

const SearchStudent = () => {
    return (
        <div>
                <div class="box">
      <form name="search">
        <input
          type="text"
          class="input"
          name="txt"
          onmouseout="document.search.txt.value = ''"
        /* onChange={(e) => setFilterByName(e.target.value)}*/
        />
      </form>
      <i class="fas fa-search"></i>
    </div>
        </div>
    )
}

export default SearchStudent
