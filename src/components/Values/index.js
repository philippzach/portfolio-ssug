import React from 'react'
import Passion from '../../../static/values-heart.svg';
import Performance from '../../../static/values-tacho.svg';
import Initiative from '../../../static/values-brain.svg';
import Team from '../../../static/values-team.svg';
import Quality from '../../../static/values-diamond.svg';
import Learning from '../../../static/values-book.svg';
import './styles.css'

const FlipCard = () => (
  <div className="flip-card-container">
  <div className="flip-card-row">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Passion} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Passion</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback lh-copy pa2">Passion about innovation and entrepreneurship is at our heart</p>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Performance} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Performance</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback pa2">As we challenge the status quo in the society with the new business models, we challenge us to exceed client expectation and thereby building amazing companies</p>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Initiative} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Initiative</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback lh-copy pa2">As entrepreneurs ourselves, we think beyond our assigned tasks and create new opportunities for the SSUF</p>
    </div>
  </div>
  </div>
</div>
<div className="flip-card-row">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Team} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Team</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback pa2">As great things in business are never done by one person, we solve challenges together with trust, respect, structure and by valuing each others expertise</p>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Quality} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Quality</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback lh-copy pa2">We take full responsibility for our work and what we do, we do well</p>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Learning} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Learning</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback lh-copy pa2">We never stop learning</p>
    </div>
  </div>
  </div>
</div>
</div>
);

export default FlipCard;
/*
      name: 'Passion'
      'Passion about innovation and entrepreneurship is at our heart',
      css: 'linear-gradient(to top, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',

      name: 'Performance'
      'As we challenge the status quo in the society with the new business models, we challenge us to exceed client expectation and thereby building amazing companies',
      css: 'linear-gradient(135deg, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',
    
      name: 'Initiative'
      'As entrepreneurs ourselves, we think beyond our assigned tasks and create new opportunities for the SSUF',
      css: 'linear-gradient(120deg, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',

      name: 'Team'
      'As great things in business are never done by one person, we solve challenges together with trust, respect, structure and by valuing each others expertise',
      css: 'linear-gradient(120deg, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',

      name: 'Quality'
      'We take full responsibility for our work and what we do, we do well',
      css: 'linear-gradient(-225deg, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',

      name: 'Learning'
      'We never stop learning',
      css: 'linear-gradient(to top, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',
*/

