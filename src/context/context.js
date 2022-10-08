import React, { Component, createContext } from 'react';
import axios from 'axios';
import i18next from 'i18next'
import { baseUrl } from '../contants';

export const PC = createContext();

class Mode extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      til: i18next.language,
      burger: true,
      search_btn: true,
      scroll: 0,
      data: [],
      lenta:[],
      newsAll: [],
      news4: [],
      week: [],
      nweek: [],
      Lnews:[],
      Fnews:[],
      singlenews:[],
      Pcategory: [],
      Regions: [],
      Fcategory:null,
      Lcategory:null,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
    
    axios.get(`${baseUrl}/api/info/`)
      .then((res) => {
        const data = res.data;
        this.setState({ data: data });
      }
    )
    axios.get(`${baseUrl}/api/partners/`)
      .then((res) => {
        const lenta = res.data;
        this.setState({ lenta: lenta });
      }
    )
    axios.get(`${baseUrl}/api/news/`)
      .then((res) => {
        const news4 = res.data;
        this.setState({ news4: news4 });
      }
    )
    axios.get(`${baseUrl}/api/news/all/`)
      .then((res) => {
        const newsAll = res.data;
        this.setState({ newsAll: newsAll });
      }
    )
    axios.get(`${baseUrl}/api/news/by/week/`)
      .then((res) => {
        const week = res.data;
        this.setState({ week: week });
      }
    )
    axios.get(`${baseUrl}/api/news/by/week/`)
      .then((res) => {
        const nweek = res.data;
        this.setState({ nweek: nweek });
      }
    )
    axios.get(`${baseUrl}/api/news/for/single/`)
      .then((res) => {
        const singlenews = res.data;
        this.setState({ singlenews: singlenews });
      }
    )
    axios.get(`${baseUrl}/api/category/project/`)
      .then((res) => {
        const Pcategory = res.data;
        this.setState({ Pcategory: Pcategory });
      }
    )
    axios.get(`${baseUrl}/api/region/`)
      .then((res) => {
        const Regions = res.data;
        this.setState({ Regions: Regions });
      }
    )
    axios.get(`${baseUrl}/api/category/`)
    .then((res) => {
      const category = res.data;
      this.setState({ 
        Lcategory: category[0].id,
        Fcategory: category[1].id
      });
      setTimeout(() => {
        this.handleFnews()
        this.handleLnews()
      }, 200);
      
    })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  handleLnews = () =>{
    if (this.state.Lcategory !== null) {
      axios.get(`${baseUrl}/api/news/by/category/${this.state.Lcategory}/`)
        .then((res) => {
          const Lnews = res.data;
          this.setState({ Lnews: Lnews });
        })
      }
    }
   handleFnews = () =>{
    if (this.state.Fcategory !== null) {
      axios.get(`${baseUrl}/api/news/by/category/${this.state.Fcategory}/`)
        .then((res) => {
          const Fnews = res.data;
          this.setState({ Fnews: Fnews });
        })
      }
    }
  listenToScroll = () => {
    const winScroll =  document.body.scrollTop || document.documentElement.scrollTop

    this.setState({
      scroll: winScroll,
    })
  }
  handleSearch_btn = () =>{
    this.setState({
      search_btn: !this.state.search_btn
    })
  }
  handleburger = () =>{
    this.setState({
      burger: !this.state.burger
    })
  }
  handleChange = (event) => {
    return i18next.changeLanguage(event.target.value)
  };
  scrollTop = () =>{
    window.scrollTo(0 ,0)
  }
  handleRu = () =>{
    this.setState({til:"ru"})
    return i18next.changeLanguage("ru")
  }
  handleUz = () =>{
    this.setState({til:"uz"})
    return  i18next.changeLanguage("uz")
  }
  handleOz = () =>{
    this.setState({til:"oz"})
    return  i18next.changeLanguage("oz")
  }
  handleEn = () =>{
    this.setState({til:"en"})
    return  i18next.changeLanguage("en")
  }
  render() {
    return ( 
      <PC.Provider
        value={{
          ...this.state,
          handleRu:this.handleRu,
          handleUz:this.handleUz,
          handleOz:this.handleOz,
          handleEn:this.handleEn,
          handleburger:this.handleburger,
          handleChange:this.handleChange,
          handleSearch_btn:this.handleSearch_btn,
        }}
      >
        {this.props.children}
      </PC.Provider>
      );
  }
}
 
export default Mode;

