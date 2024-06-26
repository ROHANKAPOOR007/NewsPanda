import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: "general"
        
    }

    static propTypes = {
        name: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,


    }


    // It is a life cycle method. This will run after the render
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0c69d1c804ff49dab5f60a4b6862fd5c&pageSize=${this.props.pageSize}`;

        this.setState({loading: true});
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({
            articles: parseData.articles, 
            totalResults: parseData.totalResults,
            loading: false
        })
    }

    
    constructor(){
        super();

        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }

    
    handlePrevClick = async ()=>{
        console.log("prev");

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0c69d1c804ff49dab5f60a4b6862fd5c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});

        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);


        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false,
            
        })

    }

    handleNextClick = async ()=>{
        console.log("next")

        if(!(this.state.page+ 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0c69d1c804ff49dab5f60a4b6862fd5c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parseData = await data.json();
            // console.log(parseData);
    
            this.setState({
                page: this.state.page +1,
                articles: parseData.articles,
                loading: false,
                
            })
        }

        
    }

  render() {
    return (
      <div className='container my-3'>

        <h1 className='text-center' style={{padding: "10px"}}>NewsPanda - Top Headlines</h1>
        {this.state.loading && <Spinner/>}

        <div className="row">

            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4"  key={element.url}>

                    <NewsItem 
                        title = {element.title?element.title.slice(0,45): ""} 
                        description={element.description?element.description.slice(0, 88): ""}
                        imageUrl = {element.urlToImage} newsUrl = {element.url}
                        author = {element.author}
                        date = {element.publishedAt}
                        source = {element.source.name}
                    />

                </div>

            })}

        </div>

        <div className="container d-flex justify-content-between">

        <button 
            disabled = {this.state.page<=1} 
            type="button" 
            className="btn btn-dark" 
            onClick={this.handlePrevClick}
        > 
            &larr; Previous 
        </button>

        <button
        disabled = {this.state.page+ 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
        type="button" 
        className="btn btn-dark" 
        onClick={this.handleNextClick}
        > 

        Next &rarr; 
        </button>

        </div>
    </div>

    )
  }
}

export default News

