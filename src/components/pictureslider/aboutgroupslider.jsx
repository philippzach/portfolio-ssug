/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import '../../styles/pagetransitionabout.css';
import Mike from '../../../static/teamssug/mike_baur.jpg';
import Max from '../../../static/max_meister.jpg';
import Oli from '../../../static/teamssug/walzer_oliver.jpg';
import Christine from '../../../static/teamssug/christine.jpg';
import './arrow.css';

const pages = [
  style => (
    <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Max} alt="" style={{ maxHeight: '600px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="paddingfoundersabout">
          <h4 className="mb1 dimgray">CSO</h4>
          <h3>Max Meister</h3>
          <div className="flex">
          <dl class="lh-title pr1-s pr2-m pr4-l mt0">
              <dt class="f6 b">Favorite Heroes</dt>
              <dd class="ml0 mb3">MacGuyver, Colt Seaver, Eddie the Eagle</dd>
              <dt class="f6 b mt2">Passion</dt>
              <dd class="ml0 mb3">Swimming</dd>
              <dt class="f6 b mt2">You didn't know that about me</dt>
              <dd class="ml0 mb3">I used to have Rastas</dd>
              <dt class="f6 b mt2">Negligible vices</dt>
              <dd class="ml0 mb3">approx. 15 coffees a day</dd>
            </dl>
            <dl class="lh-title mt0">
              <dt class="f6 b mt2">Always goes</dt>
              <dd class="ml0 mb3">Underpromise, Overdeliver</dd>
              <dt class="f6 b mt2">Last thing in the evening</dt>
              <dd class="ml0 mb3">Netflix - 2 minutes before I fall asleep </dd>
              <dt class="f6 b mt2">What Co-Founder Oliver says</dt>
              <dd class="ml0 mb3"> I'll take a close look first!</dd>
              <dt class="f6 b mt2">What Co-Founder Mike says</dt>
              <dd class="ml0 mb3">GoGoGo!</dd>
          </dl>
          </div>
          <span className="arrows"></span>
        </div>
      </div>
    </animated.div>
  ),
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Mike} alt="" style={{ maxHeight: '600px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="paddingfoundersabout">
          <h4 className="mb1 dimgray">CEO</h4>
          <h3>Mike Baur</h3>
          <div className="flex">
          <dl class="lh-title pr1-s pr2-m pr4-l mt0">
              <dt class="f6 b">Never without</dt>
              <dd class="ml0 mb3">Airpods</dd>
              <dt class="f6 b mt2">A must for reading</dt>
              <dd class="ml0 mb3">Unlimited Power by Anthony Robbins</dd>
              <dt class="f6 b mt2">As a child, I wanted to be</dt>
              <dd class="ml0 mb3">Professional footballer or tennis professional</dd>
              <dt class="f6 b mt2">Overrated</dt>
              <dd class="ml0 mb3">A lot of people I'd met in banking</dd>
            </dl>
            <dl class="lh-title mt0">
              <dt class="f6 b mt2">I’m not good at</dt>
              <dd class="ml0 mb3">Electrician works</dd>
              <dt class="f6 b mt2">Unbelievable but true</dt>
              <dd class="ml0 mb3">I had a crazy lunch with Dennis Rodman</dd>
              <dt class="f6 b mt2">What Co-Founder Max says</dt>
              <dd class="ml0 mb3">Let’s do it!</dd>
              <dt class="f6 b mt2">What Co-Founder Oliver says</dt>
              <dd class="ml0 mb3"> I'll take a close look first!</dd>
          </dl>
          </div>
          <span className="arrows"></span>
        </div>
      </div>

  </animated.div>,
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Oli} alt="" style={{ maxHeight: '600px' }} />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="paddingfoundersabout">
          <h4 className="mb1 dimgray">COO</h4>
          <h3>Oliver Walzer</h3>
          <div className="flex">
          <dl class="lh-title pr1-s pr2-m pr4-l mt0">
              <dt class="f6 b">What Co-Founder Mike says</dt>
              <dd class="ml0 mb3">It’s all about the power of platform</dd>
              <dt class="f6 b mt2">Still on the bucket list</dt>
              <dd class="ml0 mb3">Seeing northern lights</dd>
              <dt class="f6 b mt2">I always wanted to</dt>
              <dd class="ml0 mb3">Ride in a submarine</dd>
              <dt class="f6 b mt2">What Co-Founder Max says</dt>
              <dd class="ml0 mb3">Please Execute (pE)</dd>
            </dl>
            <dl class="lh-title mt0">
              <dt class="f6 b mt2">My teen idol</dt>
              <dd class="ml0 mb3">DJ Bobo</dd>
              <dt class="f6 b mt2">I do best</dt>
              <dd class="ml0 mb3">Finding solutions to any kind of problem</dd>
              <dt class="f6 b mt2">Overestimated</dt>
              <dd class="ml0 mb3">Money</dd>
              <dt class="f6 b mt2">Underestimated</dt>
              <dd class="ml0 mb3">Pragmatism</dd>
          </dl>
          </div>
          <span className="arrows"></span>
        </div>
      </div>
  </animated.div> ,
   style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
   <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
     <img src={Christine} alt="" style={{ maxHeight: '600px' }} />
   </div>
   <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
     <div className="paddingfoundersabout">
       <h4 className="mb1 dimgray">Spokes Person</h4>
       <h3>Christine Maier</h3>
       <div className="flex">
          <dl class="lh-title pr1-s pr2-m pr4-l mt0">
              <dt class="f6 b">Sunday evening</dt>
              <dd class="ml0 mb3">Watching «Tatort» with my daughter</dd>
              <dt class="f6 b mt2">I can do best</dt>
              <dd class="ml0 mb3">Motivate people, work hard, live intensively</dd>
              <dt class="f6 b mt2">I am not good at</dt>
              <dd class="ml0 mb3">Stuck in traffic and Algebra</dd>
              <dt class="f6 b mt2">Overrated</dt>
              <dd class="ml0 mb3">Being online constantly, anti-age-creams</dd>
            </dl>
            <dl class="lh-title mt0">
              <dt class="f6 b mt2">Underrated</dt>
              <dd class="ml0 mb3">Having time not to do anything, silence</dd>
              <dt class="f6 b mt2">I live</dt>
              <dd class="ml0 mb3">A wonderful, privileged life</dd>
              <dt class="f6 b mt2">A must read</dt>
              <dd class="ml0 mb3">Nassim Nicholas Taleb «Skin In The Game»</dd>
              <dt class="f6 b mt2">As a child I wanted to be</dt>
              <dd class="ml0 mb3">Winnetous wife</dd>
          </dl>
          </div>
          <span className="arrows"></span>
     </div>
   </div>
</animated.div>
];

export default class PageTransition extends Component {
  state = { index: 0 };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 3 ? 0 : state.index + 1,
    }));

  render() {
    return (
      <div className="about">
      <div className="aboutmain" onClick={this.toggle}>
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
        >
          {index => pages[index]}
        </Transition>
      </div>
      </div>
    );
  }
}
