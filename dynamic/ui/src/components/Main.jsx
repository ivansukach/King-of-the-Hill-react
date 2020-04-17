import React from 'react';
import audio from './audio/pirates.mp3';
import photo from './img/usersImages/myface.jpg';
import pikachu from './img/pokemons/pikachu.gif';
import tortoise from './img/pokemons/tortose.gif';
import pokemon from './img/pokemons/giphy.gif';
import {Link} from "react-router-dom";
import Background from './img/bg.jpg';
import {store} from "../App";
import {changeSlide} from "../store/main/actions";
import GlobalFonts from './fonts/Fonts';
import {
    BackgroundSound, Container,
    Controls, GlobalDocumentStyle, LinkToChangePhoto,
    Prompt, Slide,
    Slides,
    SlideShow,
    Start,
    UserMenu, UserMenuElement,
    Username,
    UserPhoto
} from "./StyledComponents";

export default class Main extends React.Component {
    startGame(e){
        e.preventDefault();
        console.log("Current: ", store.getState().main.current);
        this.props.changeSlide(store.getState().main.current+1);
        //There I should get number of slide
    }
    onPreviousSlideBtnClick(){
        this.props.previousSlide();
        console.log("Current: ", store.getState().main.current);
    }
    onNextSlideBtnClick(){
        this.props.nextSlide();
        console.log("Current: ", store.getState().main.current);
    }
    onLoadSlideShow(){
        let slides = document.querySelectorAll('.slides')
        console.log("slides: ", slides);
        this.props.loadSlideShow(slides);
    }

    constructor(props) {
        super(props);
        console.log("PROPS: ", props);
        this.startGame=this.startGame.bind(this);
        this.onLoadSlideShow=this.onLoadSlideShow.bind(this);
        this.onPreviousSlideBtnClick=this.onPreviousSlideBtnClick.bind(this);
        this.onNextSlideBtnClick=this.onNextSlideBtnClick.bind(this);
        this.changeSlide=this.changeSlide.bind(this);
        this.state={
            slideIntervalTimeout: 4000
        };
    }
    // componentDidUpdate() {
    //     console.log("Component Did Update");
    //     this.props.changeSlide(store.getState().main.current+1);
    //     console.log("Current: ", store.getState().main.current);
    // }
    changeSlide(){
        if (store.getState().main.status===true) {
            this.props.changeSlide(store.getState().main.current + 1);
        }
    }

    componentDidMount(){
        this.onLoadSlideShow();
        // this.componentDidUpdate();
        let slideInterval = setInterval(this.changeSlide, this.state.slideIntervalTimeout);
    }


    render() {
        document.body.style.background = `url(${Background}) no-repeat`;
        document.body.style.backgroundSize = "cover";
        console.log("RENDER");
        return (
            <div>
                <GlobalFonts/>
                <GlobalDocumentStyle/>
                <UserMenu>
                    <BackgroundSound src={audio} autoPlay loop controls/>
                    <UserMenuElement><Link to="/profile" className="userMenuElements">My Profile</Link></UserMenuElement>
                    <UserMenuElement><Link to="/messages" className="userMenuElements">My Messages</Link></UserMenuElement>
                    <UserMenuElement><Link to="/events" id="events">My Events</Link></UserMenuElement>
                    <Username>Иван Сукач</Username>
                    <LinkToChangePhoto>
                        <Link to="/addPhoto" id="linkToChangePhoto">
                            <UserPhoto src={photo} />
                        </Link>
                    </LinkToChangePhoto>
                </UserMenu>
                <Prompt number="1">CHOOSE POKEMON</Prompt>
                <SlideShow>
                    <Controls id="previous" onClick={this.onPreviousSlideBtnClick}>&lt;</Controls>
                    <Slides>
                        <Slide currentSlide={this.props.currentSlide} number={0} className="slides">
                            <img src={pikachu} width="100%" height="100%"/>
                        </Slide>
                        <Slide currentSlide={this.props.currentSlide} number={1} className="slides">
                            <img src={tortoise} width="100%" height="100%"/>
                        </Slide>
                        <Slide currentSlide={this.props.currentSlide} number={2} className="slides">
                            <img src={pokemon} width="100%" height="100%"/>
                        </Slide>
                    </Slides>
                    <Controls id="next" onClick={this.onNextSlideBtnClick}>&gt;</Controls>
                </SlideShow>
                <Start onClick={this.startGame}>START</Start>
            </div>
    );

    }
    }