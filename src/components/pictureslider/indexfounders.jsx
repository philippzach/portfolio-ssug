/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import '../../styles/pagetransitionindexfounders.css';
import Mike from '../../../static/teamssug/mike_baur.jpg';
import Max from '../../../static/max_meister.jpg';
import Oli from '../../../static/teamssug/walzer_oliver.jpg';
import './arrow.css';

const pages = [
  style => (
    <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Max} alt="" style={{ maxHeight: '550px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center ">
        <div className="paddingfounders measure">
          <h3>Max Meister, CSO</h3>
          <span className="arrows"></span>
          <p className="lh-copy">
          “The last four years are a great proof of concept for us and we are amazed by the market response. Together with our strategic partners we will now focus on internationalization, while corporate acceleration and company building will play an even more important role in our future business model.”
          </p>
        </div>
      </div>
    </animated.div>
  ),
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Mike} alt="" style={{ maxHeight: '550px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center ">
        <div className="paddingfounders measure">
          <h3>Mike Baur, CEO</h3>
          <span className="arrows"></span>
          <p className="lh-copy">
          “With the SSUG we want to put Switzerland on the map of international early-stage investors. For us, this is just the beginning of a very exciting but also challenging mission. We are thankful for the investors’ trust and fully conscious of the responsibility and performance-driven ambition of the SWISS STARTUP GROUP.”
          </p>
        </div>
      </div>

  </animated.div>,
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Oli} alt="" style={{ maxHeight: '550px' }} />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center ">
        <div className="paddingfounders measure">
          <h3>Oliver Walzer, COO</h3>
          <span className="arrows"></span>
          <p className="lh-copy">
          “Building a startup is a challenging journey with many roadblocks to overcome. With our track record in venture building we enable startups to iterate faster and increase the likeliness of their success. We use our platform to foster innovation and consolidate our experience into the Swiss Startup Group.”
          </p>

        </div>
      </div>
  </animated.div>
];

export default class Founders extends Component {
  state = { index: 0 };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 2 ? 0 : state.index + 1,
    }));

  render() {
    return (
      <div className="founders">
      <div className="foundermain" onClick={this.toggle}>
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
