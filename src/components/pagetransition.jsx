/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import '../styles/pagetransitiondna.css';
import Slice1 from '../../static/slice1.png';

const pages = [
  style => (
    <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Slice1} alt="" style={{ maxHeight: '600px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center">
        <div className="paddingdna measure">
          <h3>KNOW HOW</h3>
          <p className="lh-copy">
            End-to-end startup development and investment skill-set. SWISS STARTUP GROUP offers services across the
            entire value chain: scouting, analysis, deal-making, acceleration, growth, investing and exits.
          </p>
          <span className="b">01/04</span>
          <span className="b ttu fr">next</span>
        </div>
      </div>
    </animated.div>
  ),
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Slice1} alt="" style={{ maxHeight: '600px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center">
        <div className="paddingdna measure">
          <h3>NETWORK PLATFORM</h3>
          <p className="lh-copy">
          Direct access to all stakeholders of the venture value chain such as investors, corporates and startups as well as top talents, mentors and academic partners. 
          </p>
          <span className="b">02/04</span>
          <span className="b ttu fr">next</span>
        </div>
      </div>

  </animated.div>,
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Slice1} alt="" style={{ maxHeight: '600px' }} />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center">
        <div className="paddingdna measure">
          <h3>FUNDING</h3>
          <p className="lh-copy">
          One of the most active early stage investor in Switzerland that assures a straightforward and efficient funding process for startups seeking for pre-seed, seed, A-, B- or C- rounds.
          </p>
          <span className="b">03/04</span>
          <span className="b ttu fr">next</span>
        </div>
      </div>
  </animated.div>,
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
  <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
    <img src={Slice1} alt="" style={{ maxHeight: '600px' }} />
  </div>
  <div className="w-100 w-60-ns pl3-ns flex items-center">
    <div className="paddingdna measure">
      <h3>DEAL FLOW</h3>
      <p className="lh-copy">
      Exclusive startup investment pipeline and access through our ecosystem composed of shareholders, Investors’ Club, advisory board, corporate and academic partners but also through active scouting within Switzerland and abroad and startup applications.
      </p>
      <span className="b">04/04</span>
      <span className="b ttu fr">next</span>
    </div>
  </div>
</animated.div>,
];

export default class PageTransition extends Component {
  state = { index: 0 };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 3 ? 0 : state.index + 1,
    }));

  render() {
    return (
      <div className="dna">
      <div className="main" onClick={this.toggle}>
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
