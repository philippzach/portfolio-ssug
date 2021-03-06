/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import '../../styles/pagetransitionabout.css';
import Mike from '../../../static/teamssug/mike_baur.jpg';
import Max from '../../../static/max_meister.jpg';
import Oli from '../../../static/teamssug/walzer_oliver.jpg';
import Christine from '../../../static/teamssug/christine.jpg';
// import Flavio from '../../../static/teamssug/flavio.jpg';
import Philipp from '../../../static/teamssug/philippsteinberger.jpg';
import Waser from '../../../static/teamssug/waser.jpg';

import Gianmarco from '../../images/gianmarco.jpg';
import Simon from '../../../static/teamssug/simon.jpg';
import Emanuele from '../../images/emanuele.jpg';
import Jingling from '../../images/jingling.jpg';
import Elena from '../../images/elena.jpg';
import './arrow.css';

const pages = [
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Max} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>CSO</h4>
          <h3>Max Meister</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Favorite Heroes</dt>
              <dd className='ml0 mb3'>
                MacGuyver, Colt Seaver, Eddie the Eagle
              </dd>
              <dt className='f6 b mt2'>Passion</dt>
              <dd className='ml0 mb3'>Swimming</dd>
              <dt className='f6 b mt2'>You didn't know that about me</dt>
              <dd className='ml0 mb3'>I used to have Rastas</dd>
              <dt className='f6 b mt2'>Negligible vices</dt>
              <dd className='ml0 mb3'>approx. 15 coffees a day</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>Always goes</dt>
              <dd className='ml0 mb3'>Underpromise, Overdeliver</dd>
              <dt className='f6 b mt2'>Last thing in the evening</dt>
              <dd className='ml0 mb3'>
                Netflix - 2 minutes before I fall asleep{' '}
              </dd>
              <dt className='f6 b mt2'>What Co-Founder Oliver says</dt>
              <dd className='ml0 mb3'> I'll take a close look first!</dd>
              <dt className='f6 b mt2'>What Co-Founder Mike says</dt>
              <dd className='ml0 mb3'>GoGoGo!</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Mike} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>CEO</h4>
          <h3>Mike Baur</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Never without</dt>
              <dd className='ml0 mb3'>Airpods</dd>
              <dt className='f6 b mt2'>A must for reading</dt>
              <dd className='ml0 mb3'>Unlimited Power by Anthony Robbins</dd>
              <dt className='f6 b mt2'>As a child, I wanted to be</dt>
              <dd className='ml0 mb3'>
                Professional footballer or tennis professional
              </dd>
              <dt className='f6 b mt2'>Overrated</dt>
              <dd className='ml0 mb3'>A lot of people I'd met in banking</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>I???m not good at</dt>
              <dd className='ml0 mb3'>Electrician works</dd>
              <dt className='f6 b mt2'>Unbelievable but true</dt>
              <dd className='ml0 mb3'>
                I had a crazy lunch with Dennis Rodman
              </dd>
              <dt className='f6 b mt2'>What Co-Founder Max says</dt>
              <dd className='ml0 mb3'>Let???s do it!</dd>
              <dt className='f6 b mt2'>What Co-Founder Oliver says</dt>
              <dd className='ml0 mb3'> I'll take a close look first!</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Oli} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>COO</h4>
          <h3>Oliver Walzer</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>What Co-Founder Mike says</dt>
              <dd className='ml0 mb3'>It???s all about the power of platform</dd>
              <dt className='f6 b mt2'>Still on the bucket list</dt>
              <dd className='ml0 mb3'>Seeing northern lights</dd>
              <dt className='f6 b mt2'>I always wanted to</dt>
              <dd className='ml0 mb3'>Ride in a submarine</dd>
              <dt className='f6 b mt2'>What Co-Founder Max says</dt>
              <dd className='ml0 mb3'>Please Execute (pE)</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>My teen idol</dt>
              <dd className='ml0 mb3'>DJ Bobo</dd>
              <dt className='f6 b mt2'>I do best</dt>
              <dd className='ml0 mb3'>
                Finding solutions to any kind of problem
              </dd>
              <dt className='f6 b mt2'>Overestimated</dt>
              <dd className='ml0 mb3'>Money</dd>
              <dt className='f6 b mt2'>Underestimated</dt>
              <dd className='ml0 mb3'>Pragmatism</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Christine} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Spokes Person</h4>
          <h3>Christine Maier</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Sunday evening</dt>
              <dd className='ml0 mb3'>Watching ??Tatort?? with my daughter</dd>
              <dt className='f6 b mt2'>I can do best</dt>
              <dd className='ml0 mb3'>
                Motivate people, work hard, live intensively
              </dd>
              <dt className='f6 b mt2'>I am not good at</dt>
              <dd className='ml0 mb3'>Stuck in traffic and Algebra</dd>
              <dt className='f6 b mt2'>Overrated</dt>
              <dd className='ml0 mb3'>
                Being online constantly, anti-age-creams
              </dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>Underrated</dt>
              <dd className='ml0 mb3'>
                Having time not to do anything, silence
              </dd>
              <dt className='f6 b mt2'>I live</dt>
              <dd className='ml0 mb3'>A wonderful, privileged life</dd>
              <dt className='f6 b mt2'>A must read</dt>
              <dd className='ml0 mb3'>
                Nassim Nicholas Taleb ??Skin In The Game??
              </dd>
              <dt className='f6 b mt2'>As a child I wanted to be</dt>
              <dd className='ml0 mb3'>Winnetous wife</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Philipp} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Head of Investors Club</h4>
          <h3>Philipp Steinberger</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Never without</dt>
              <dd className='ml0 mb3'>My Ibiza bracelets</dd>
              <dt className='f6 b mt2'>Favorite Place</dt>
              <dd className='ml0 mb3'>Cape Town</dd>
              <dt className='f6 b mt2'>My Charisma</dt>
              <dd className='ml0 mb3'>Dry sense of humour</dd>
              <dt className='f6 b mt2'>Most valueable lesson learnt</dt>
              <dd className='ml0 mb3'>
                If ???Plan A??? didn???t work, remember the alphabet has 25 more
                letters
              </dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>My teen idol</dt>
              <dd className='ml0 mb3'>Aristotle Onassis</dd>
              <dt className='f6 b mt2'>A perfect day</dt>
              <dd className='ml0 mb3'>
                A never ending lunch with family/friends on the beach
              </dd>
              <dt className='f6 b mt2'>Most grateful for</dt>
              <dd className='ml0 mb3'>My family</dd>
              <dt className='f6 b mt2'>Proud of</dt>
              <dd className='ml0 mb3'>My 2 boys, Sebastian and Max</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Waser} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Chief Financial Officer</h4>
          <h3>Guillaume Waser</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Still on the bucket list</dt>
              <dd className='ml0 mb3'>
                Riding the Tran-Siberian from Moscow to Beijing
              </dd>
              <dt className='f6 b mt2'>Favourite book</dt>
              <dd className='ml0 mb3'>
                The Snowball - Warren Buffett and the Business of Life
              </dd>
              <dt className='f6 b mt2'>Overrated</dt>
              <dd className='ml0 mb3'>Social media hyperactivity</dd>
              <dt className='f6 b mt2'>Underrated</dt>
              <dd className='ml0 mb3'>Global warming & ocean pollution</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>My teen idol</dt>
              <dd className='ml0 mb3'>Terje Haakonsen</dd>
              <dt className='f6 b mt2'>Must have seen</dt>
              <dd className='ml0 mb3'>Sunset in Formentera</dd>
              <dt className='f6 b mt2'>My Desktop</dt>
              <dd className='ml0 mb3'>Is a bit everywhere</dd>
              <dt className='f6 b mt2'>Never without</dt>
              <dd className='ml0 mb3'> lipstick</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Simon} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Chief of Staff</h4>
          <h3>Simon Koch</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Still on the bucket list</dt>
              <dd className='ml0 mb3'>Honeymoon</dd>
              <dt className='f6 b mt2'>I always wanted to</dt>
              <dd className='ml0 mb3'>Challenge myself</dd>
              <dt className='f6 b mt2'>Favorite Tool</dt>
              <dd className='ml0 mb3'>Kindle</dd>
              <dt className='f6 b mt2'>My teen idol</dt>
              <dd className='ml0 mb3'>Michael Jordan</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>I do best</dt>
              <dd className='ml0 mb3'>Inspire others</dd>
              <dt className='f6 b mt2'>Overestimated</dt>
              <dd className='ml0 mb3'>What we can achieve in a year</dd>
              <dt className='f6 b mt2'>Underestimated</dt>
              <dd className='ml0 mb3'>What we can achieve in a decade</dd>
              <dt className='f6 b mt2'>Favorite book</dt>
              <dd className='ml0 mb3'>The War of Art by Steven Pressfield</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Gianmarco} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Chief Communications Officer</h4>
          <h3>Gianmarco Timpanaro</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Where I'm from</dt>
              <dd className='ml0 mb3'>Born in the heart of beautiful Zurich</dd>
              <dt className='f6 b mt2'>My favourite destination</dt>
              <dd className='ml0 mb3'>Somewhere at the beach</dd>
              <dt className='f6 b mt2'>My favourite movie</dt>
              <dd className='ml0 mb3'>The Shawshank Redemption</dd>
              <dt className='f6 b mt2'>I can do without</dt>
              <dd className='ml0 mb3'>Micro management</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>My passion</dt>
              <dd className='ml0 mb3'>Race my motorcycle on race tracks</dd>
              <dt className='f6 b mt2'>I cannot do without</dt>
              <dd className='ml0 mb3'>Italian food and coffee</dd>
              <dt className='f6 b mt2'>Never forget to</dt>
              <dd className='ml0 mb3'>Be grateful</dd>
              <dt className='f6 b mt2'>Still on my bucket list</dt>
              <dd className='ml0 mb3'>Size the day</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Emanuele} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Investment Associate</h4>
          <h3>Emanuele Larocca</h3>

          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'> Mountains or Beach</dt>
              <dd className='ml0 mb3'>Both, on their own season</dd>
              <dt className='f6 b mt2'>How I live</dt>
              <dd className='ml0 mb3'>By my rules</dd>
              <dt className='f6 b mt2'>A must for reading</dt>
              <dd className='ml0 mb3'>
                Le citt?? invisibili (Invisible cities), by Italo Calvino
              </dd>
              <dt className='f6 b mt2'>Secret tip</dt>
              <dd className='ml0 mb3'>Be curious</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>I can do best</dt>
              <dd className='ml0 mb3'>Rational decisions</dd>
              <dt className='f6 b mt2'>I???m not good at</dt>
              <dd className='ml0 mb3'>Irrational decisions</dd>
              <dt className='f6 b mt2'>Rituals</dt>
              <dd className='ml0 mb3'>
                I never start watching a movie if I cannot finish it in one go
              </dd>
              <dt className='f6 b mt2'>Place of residence</dt>
              <dd className='ml0 mb3'>Zurich</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Jingling} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Investment Analyst</h4>
          <h3>Jingling Tu</h3>

          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Where I'm from</dt>
              <dd className='ml0 mb3'>China</dd>
              <dt className='f6 b mt2'>Still on my bucket list</dt>
              <dd className='ml0 mb3'>
                1. Travel around the world (now more than 20 countries) 2. Read
                as much as possible
              </dd>
              <dt className='f6 b mt2'>Favorite drink</dt>
              <dd className='ml0 mb3'>Diet coke</dd>
              <dt className='f6 b mt2'>One thing nobody knows about me</dt>
              <dd className='ml0 mb3'>
                {' '}
                I loved writing ancient Chinese poetry since I was in middle
                school, and I founded a poetry club with three of my classmates
              </dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>Favorite vacation spot</dt>
              <dd className='ml0 mb3'>Spain, Marbella</dd>
              <dt className='f6 b mt2'>Never without</dt>
              <dd className='ml0 mb3'>
                1. My phone. 2. My husband. 3. Books and reading
              </dd>
              <dt className='f6 b mt2'>A must for reading</dt>
              <dd className='ml0 mb3'>Fall of Giants by Ken Follet</dd>
              <dt className='f6 b mt2'>Overrated</dt>
              <dd className='ml0 mb3'>wealth and power</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Elena} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Investment Analyst</h4>
          <h3>Elena Orbetsova</h3>

          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Where I'm from</dt>
              <dd className='ml0 mb3'>Bulgaria</dd>
              <dt className='f6 b mt2'>Still on my bucket list</dt>
              <dd className='ml0 mb3'>Learning to ski</dd>
              <dt className='f6 b mt2'>Favorite drink</dt>
              <dd className='ml0 mb3'>Thyme tea</dd>
              <dt className='f6 b mt2'>One thing nobody knows about me</dt>
              <dd className='ml0 mb3'>
                I could be obsessive about various things
              </dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>Favorite vacation spot</dt>
              <dd className='ml0 mb3'>Golden Sands</dd>
              <dt className='f6 b mt2'>Never without</dt>
              <dd className='ml0 mb3'>My keys</dd>
              <dt className='f6 b mt2'>I do best</dt>
              <dd className='ml0 mb3'>Setting goals</dd>
              <dt className='f6 b mt2'>Passion</dt>
              <dd className='ml0 mb3'>cooking</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  )
];

export default class PageTransition extends Component {
  state = { index: 0 };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 10 ? 0 : state.index + 1
    }));

  render() {
    return (
      <div className='about'>
        <div className='aboutmain' onClick={this.toggle}>
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
