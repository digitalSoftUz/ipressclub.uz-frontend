import React, { useState } from 'react';
import i18next from 'i18next'
// import { baseUrl } from '../contants';
import { PC } from "../context/context";
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Search = (props) => {
  const location = useLocation().pathname.slice(1,5);
  var data = props.newsAll
  var til = i18next.language
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      if (til === "uz") {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      } else {
        if (til === "ru") {
          return value.name_ru.toLowerCase().includes(searchWord.toLowerCase());
        }
        if (til === "en") {
          return value.name_en.toLowerCase().includes(searchWord.toLowerCase());
        }
        if (til === "oz") {
          return value.name_uz.toLowerCase().includes(searchWord.toLowerCase());
        }
      }
    });
    
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  // console.log(location.pathname.slice(1,5))
  // var text = "Мазкур сессия “Ўзбекистон24”, “УзРепорт” ва “Ренессанс” телеканаллари орқали тўғридан-тўғри эфирга узатилди. “Xalqaro press-klub” nodavlat notijorat tashkiloti Oʻzbekiston Respublikasi Adliya vazirligi tomonidan 2017-yil 31-mart kuni 794-son qaror bilan davlat roʻyxatidan oʻtga"
  // // console.log(text.length)
  // var isloop = false
  // let newtext = ''
  //   for (let i = 0; i < text.length; i++) {
  //     if(text.charAt(i)!=='.' && isloop===false){
  //       newtext+=text.charAt(i)
  //     }else{
  //       isloop = true
  //     }
  //   }
  //   console.log('====================================');
  //   console.log(newtext);
  //   console.log('====================================');
  const handleLocation = () =>{
    if (location === "news") {
      return ""
    } else{
      return "news/"
    }
  }
  return (
    <PC.Consumer>
      {(x)=>{
        return(
          <React.Fragment>
            <div className="search__input">
              <input type="text" value={wordEntered} onChange={handleFilter}/>
              <Button 
                className='search__btn'
                onClick={() => {
                  x.handleSearch_btn()
                  clearInput()
                }} 
              >
                <CloseIcon color='succes'/>
              </Button>
            </div>
            <div 
              className="search__close__div"
              onClick={() => {
                x.handleSearch_btn()
                clearInput()
              }}
            ></div>
              {filteredData.length !== 0 && (
                <div className="search__result">
                  {filteredData.map((value, key) => {
                    return (
                      <a 
                        href={`${handleLocation() + value.id}`} 
                        onClick={() => {
                          x.handleSearch_btn()
                          clearInput()
                        }}
                        key={key}
                      >
                        {
                          til === "uz" ? value.name
                          : til === "ru" ? value.name_ru
                          : til === "oz" ? value.name_uz
                          : value.name_en
                        }
                      </a>
                    );
                  })}
                </div>
              )}
          </React.Fragment>
        )
      }}
    </PC.Consumer>
  );
}
 
export default Search;