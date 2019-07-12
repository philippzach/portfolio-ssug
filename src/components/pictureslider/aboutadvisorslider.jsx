/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import '../../styles/pagetransitionadvisors.css';
import Wenger from '../../../static/advisors/wenger_christian.jpg';
import Oli from '../../../static/oliver_walzer_square.jpg';
import Rico from '../../../static/advisors/baldegger_rico.jpg';
import Robert from '../../../static/advisors/bider_robert.jpg';
import Biver from '../../../static/advisors/biver_jeanclaude.jpg';
import Claudia from '../../../static/advisors/coninx_claudia.jpg';
import Beat from '../../../static/advisors/curti_beat.jpg';
import David from '../../../static/advisors/david_allemann.jpg';
import Friedli from '../../../static/advisors/friedli.jpg';
import Andreas from '../../../static/advisors/gall_andreas.jpg';
import Dietmar from '../../../static/advisors/grichnik_dietmar.jpg';
import Daniel from '../../../static/advisors/gutenberg_daniel.jpg';
import Michael from '../../../static/advisors/hartweg_michael.jpg';
import Patrick from '../../../static/advisors/patrick_aebischer.jpg';
import Sauter from '../../../static/advisors/sauter_claudia.jpg';
import Stan from '../../../static/advisors/wawrinka_stan.jpg';
import Urs from '../../../static/advisors/wietlisbach_urs.jpg';

import './arrow.css';

const pages = [
  style => (
    <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Wenger} alt="" style={{ maxHeight: '550px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center ">
        <div className="paddingfounders measure">
          <h3>Dr. iur. Wenger Christian</h3>
          <span className="arrows"></span>
          <p className="lh-copy">
          Christian Wenger specializes in commercial and business law with a focus on
private equity and venture capital. He is president and member of various boards of directors and executive boards. Amongst other initiatives he founded Swiss Startup Invest and is co-founder of digitalswitzerland with the aim of positioning Switzerland as a leading technology giant in Europe.          </p>
        </div>
      </div>
    </animated.div>
  ),
    style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Rico} alt="" style={{ maxHeight: '550px' }}/>
          </div>
          <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
              <h3>Rico J. Baldegger</h3>
              <span className="arrows"></span>
              <p className="lh-copy">
              Prof. PhD Rico J. Baldegger is Director and Professor of Strategy, Innovation and Entrepreneurship at the School of Management Fribourg (HEG-FR), Switzerland. He has studied at the Universities of St. Gallen and Fribourg, Switzerland.
              </p>
            </div>
          </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Robert} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Robert Bider</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Robert Bider is President of the Board of Directors of SENIOcare AG, and a member of Montana Capital Partners AG’s Board of Directors. He is also co-founder of Rhino Partners, a direct private equity investments firm focusing on small and mid cap buyouts in Switzerland, Germany, and Austria.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Biver} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Jean Claude Biver</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Jean Claude Biver is the non executive president of the watch division at LVMH group as well as chairman of the board of Hublot. Over the last 35 years he has worked for Blancpain, Omega, Hublot and the LVMH group (TAG Heuer, Zenith) and has impacted the Swiss watch industry like almost no-one else.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Claudia} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Claudia Coninx-Kaczynski</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Claudia Coninx-Kaczynski is a member of the founding family of Tamedia AG, a publicly listed Swiss media company. She has been Non-Executive Member of the Board of Directors of Forbo Holding AG since April 2014, Member of the Board of Swisscontent AG as well as other Commitees.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Beat} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Beat Curti</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Beat Curti is the founder of Goldbach Media and also majority shareholder before Goldbach Media was sold to Tamedia in 2018. Beat acts as well as vice chairman and active partner of SoftwareOne. As an entrepreneur by heart, driven by the desire to create, he looks back on a fascinating career.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={David} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>David Allemann</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                David Allemann is the Co-Founder of On, the world’s fastest growing running shoe brand. David has been working at the intersection of business and creativity as Managing Director of Young & Rubicam, at McKinsey & Company and as CMO of Vitra.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Friedli} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Peter Friedli</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Peter Friedli has been a principal of the investment banking firm Friedli Corporate Finance, Inc. since 1986. Mr. Friedli has over 30 years of entrepreneurial experience as an independent investment manager in venture capital.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Andreas} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Andreas Gall</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Andreas Gall is Chief Innovation Officer Red Bull Media House. He has a strong background as a professional radio and television engineer, and sound engineer and has developed a diversified know-how in the field of technology and media.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Dietmar} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Dietmar Grichnik</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Dietmar Grichnik is Professor of Entrepreneurship and Director of the Institute of Technology Management at the University of St.Gallen (HSG). He is the Founder and Co-Director of the Global Center for Entrepreneurship and Innovation.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Daniel} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Daniel Gutenberg</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Daniel Gutenberg, super angel investor, venture capitalist and unicorn hunter in the investment industry. Invested in more than 100 startup companies during the last 20 years and serving as board member for various companies.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Michael}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Michael Hartweg</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Michael Hartweg is an entrepreneur and investor, with over 15 years’ experience in investments and financial services and the owner of MICA Ventures AG.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Patrick}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Patrick Aebischer</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Patrick Aebischer is the president emeritus of EPFL. He is the Founder of 3 Start-ups. He is a Board Member of Nestlé, Lonza and Logitech. He chairs the Novartis Venture Fund and is a Senior Partner of NanoDimension-III.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Sauter}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Claudia Sauter</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Claudia Sauter is a thoroughly passionate Chief Communication Officer with a great desire to help companies finding the most differentiating and creative brand expression possible.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Stan}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Stan Wawrinka</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Stanislas "Stan“ Wawrinka, born 28 March 1985, is a Swiss professional tennis player. He reached a career-high ATP world No. 3 singles ranking for the first time on January 27, 2014.
                </p>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Urs}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Urs Wietlisbach</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                Urs Wietlisbach co-founded Partners Group in 1996. He is a member of Partners Group Holding AG’s Board of Directors and Chairman of the Markets Committee, based in Zug. He has 28 years of industry experience. 
                </p>
            </div>
            </div>
        </animated.div>
      ),
];

export default class Founders extends Component {
  state = { index: 0 };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 15 ? 0 : state.index + 1,
    }));

  render() {
    return (
      <div className="advisors">
      <div className="advisorsmain" onClick={this.toggle}>
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
