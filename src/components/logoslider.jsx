import React from 'react';
import '../styles/logoslider.css';
import LogoA from '../../static/logo_partner/lg-amag.svg';
import LogoB from '../../static/logo_partner/lg-gold.svg';
import LogoC from '../../static/logo_partner/lg-helvetia.svg';
import LogoD from '../../static/logo_partner/lg-redbull.svg';
import LogoE from '../../static/logo_partner/lg-richemont.svg';
import LogoF from '../../static/logo_partner/lg-start.svg';
import LogoG from '../../static/logo_partner/lg-wenger.svg';
import LogoH from '../../static/logo_partner/lg-west.svg';

const Slider = () => (
    <div className="slider">
	<div className="slide-track">
		<div className="slide">
		  <a href="http://www.amag.ch" target="_blank">
			<img className="iconspa" src={LogoA} height="100" width="250" alt="" />
		  </a>
		</div>
		<div className="slide">
		<a href="http://www.goldbachgroup.com" target="_blank">
			<img className="iconspa" src={LogoB}  height="100" width="250" alt="" />
		  </a>
		</div>
		<div className="slide">
		<a href="https://www.helvetia.com" target="_blank">
			<img className="iconspa" src={LogoC}  height="100" width="250" alt="" />
			</a>
		</div>
		<div className="slide">
		<a href="https://www.redbullmediahouse.com" target="_blank">
			<img className="iconspa" src={LogoD}  height="100" width="250" alt="" />
			</a>
		</div>
		<div className="slide">
		<a href="https://www.richemont.com" target="_blank">
			<img className="iconspa" src={LogoE}  height="100" width="250" alt="" />
			</a>
		</div>
	<div className="slide">
	<a href="http://startupinvest.ch" target="_blank">
			<img className="iconspa" src={LogoF}  height="100" width="250" alt="" />
			</a>
	</div>
	<div className="slide">
	<a href="https://www.wengervieli.ch" target="_blank">
			<img className="iconspa" src={LogoG}  height="100" width="250" alt="" />
			</a>
	</div>
	<div className="slide">
	<a href="http://www.westhive.com" target="_blank">
			<img className="iconspa" src={LogoH}  height="100" width="250" alt="" />
			</a>
	</div>
	<div className="slide">
		  <a href="http://www.amag.ch" target="_blank">
			<img className="iconspa" src={LogoA} height="100" width="250" alt="" />
		  </a>
		</div>
		<div className="slide">
		<a href="http://www.goldbachgroup.com" target="_blank">
			<img className="iconspa" src={LogoB}  height="100" width="250" alt="" />
		  </a>
		</div>
		<div className="slide">
		<a href="https://www.helvetia.com" target="_blank">
			<img className="iconspa" src={LogoC}  height="100" width="250" alt="" />
			</a>
		</div>
		<div className="slide">
		<a href="https://www.redbullmediahouse.com" target="_blank">
			<img className="iconspa" src={LogoD}  height="100" width="250" alt="" />
			</a>
		</div>
		<div className="slide">
		<a href="https://www.richemont.com" target="_blank">
			<img className="iconspa" src={LogoE}  height="100" width="250" alt="" />
			</a>
		</div>
	<div className="slide">
	<a href="http://startupinvest.ch" target="_blank">
			<img className="iconspa" src={LogoF}  height="100" width="250" alt="" />
			</a>
	</div>
	<div className="slide">
	<a href="https://www.wengervieli.ch" target="_blank">
			<img className="iconspa" src={LogoG}  height="100" width="250" alt="" />
			</a>
	</div>
	<div className="slide">
	<a href="http://www.westhive.com" target="_blank">
			<img className="iconspa" src={LogoH}  height="100" width="250" alt="" />
			</a>
	</div>
	</div>
</div>
);

export default Slider