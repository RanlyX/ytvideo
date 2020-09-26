import React,{ Component } from "react";
import "./pagination.css";
import VideoContainer from "../videoContainer/videoContainer.js";
export default class Pagination extends Component{
    constructor(props){
        super(props)
        this.state = {
            pageCurr:1,
            groupCount:10,
            startPage:1,
        }
    }

    create(){
        const {
            totalPage,
        } = this.props.config;

        const {
            pageCurr,
            startPage,
            groupCount,
        } = this.state;

        let pages = [];
        let endPage = totalPage;
        pages.push(<li onClick = { this.go.bind(this,1) } className = { pageCurr === 1? "nomore":"" } key={1}>{1}</li>)
        pages.push(<li onClick = { this.goPrev.bind(this) } className = { pageCurr === 1 ? "nomore":"" } key={0}>&lt;</li>)
        for(let i = startPage;i < groupCount + startPage;i ++){
            if(i <= totalPage){
                pages.push(<li className = { pageCurr === i? "active":""} key={i} onClick = { this.go.bind(this,i) }>{i}</li>)
            }
        }
        pages.push(<li onClick = { this.goNext.bind(this) } className = { pageCurr === totalPage ? "nomore":"" } key={totalPage + 1}>&gt;</li>)
        pages.push(<li onClick = { this.go.bind(this,totalPage) } className = { pageCurr === endPage? "nomore":"" } key={endPage+2}>{endPage}</li>)

        return pages;
    }
    
    go(pageCurr){
        const {
            groupCount
        } = this.state;
        const {
            totalPage
        } = this.props.config
        
        if(pageCurr % groupCount === 1){
            this.setState({
                startPage:pageCurr
            })
        }
        if(pageCurr % groupCount === 0){
            this.setState({
                startPage:pageCurr - groupCount + 1
            })
        }
    
        if(totalPage - pageCurr < 0){
            this.setState({
                startPage:totalPage - groupCount,
            })
        }
        this.setState({
            pageCurr
        });
    }

    render(){
        const Pages = this.create.bind(this)();
        const {
            pageCurr,
            startPage,
            groupCount,
        } = this.state;
        return(
            <div>
                <VideoContainer config = {{
                    pageCurr: pageCurr,
                }}></VideoContainer>
                <div className = "main">
                    <ul className = "page">
                        { Pages }
                    </ul>
                </div>
            </div>
            
        );
    }

    goPrev(){
        let {
            pageCurr,
        } = this.state;

        if(--pageCurr === 0){
            return;
        }

        this.go(pageCurr)
    }

    goNext(){
        let {
            pageCurr,
        } = this.state;

        const {
            totalPage,
        } = this.props.config;

        if(++pageCurr > totalPage){
            return;
        }
        this.go(pageCurr)
    }
}