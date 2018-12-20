import React from 'react';
import { Wrapper, Title } from 'components';
import LogoA from '../../static/logos_supporter/aisec.svg';
import LogoB from '../../static/logos_supporter/biathlon.svg';
import LogoC from '../../static/logos_supporter/cofundme.svg';
import LogoD from '../../static/logos_supporter/digitalfestival.svg';
import LogoE from '../../static/logos_supporter/innovationlab.svg';
import LogoF from '../../static/logos_supporter/investiere.svg';
import LogoG from '../../static/logos_supporter/microsoft.svg';
import LogoH from '../../static/logos_supporter/startglobal.svg';
import LogoI from '../../static/logos_supporter/startupweekend.svg';
import LogoJ from '../../static/logos_supporter/starus.svg';
import LogoK from '../../static/logos_supporter/testingtime.svg';
import LogoL from '../../static/logos_supporter/what.svg';
import LogoM from '../../static/logos_supporter/wngervieli.svg';
import LogoN from '../../static/logos_supporter/worldwebforum.svg';

import Logoa from '../../static/logos_sponsor/dieci.svg';
import Logob from '../../static/logos_sponsor/drink.svg';
import Logoc from '../../static/logos_sponsor/feldschlosschen.svg';
import Logod from '../../static/logos_sponsor/interio.svg';
import Logoe from '../../static/logos_sponsor/nespresso.svg';
import Logof from '../../static/logos_sponsor/on.svg';
import Logog from '../../static/logos_sponsor/redbull.svg';
import Logoh from '../../static/logos_sponsor/zurmetzg.svg';

const style = {
    justifyContent: "space-evenly",
    backgroundColor: "#f7f7f7",
    padding: "2em 0"
}

const Supporters = () => (
    <>
    <Wrapper style={{ paddingTop: '5rem', paddingBottom: '1rem' }}>
      <Title>Supporters and Eco System</Title>
      </Wrapper>
      <div className="flex flex-column flex-row-ns justify-center">
      <div className="pr3-ns mb4 mb0-ns w-100 w-50-ns bg-grey flex containersupporter" style={style}>
        <div className="logorow flex flex-column">
        <a href="https://aiesec.org" target="_blank">
            <img className="pa3" src={LogoA} />
        </a>
        <a href="https://www.biathlon-arena-lenzerheide.ch/de" target="_blank">
        <img className="pa3" src={LogoB} />
        </a>
        <a href="https://www.cofoundme.org/" target="_blank">
        <img className="pa3" src={LogoC} />
        </a>
        <a href="http://digitalfestival.ch/#partners" target="_blank">
        <img className="pa3" src={LogoD} />
        </a>
        <a href="https://innolabfribourg.ch/" target="_blank">
        <img className="pa3" src={LogoE} />
        </a>
        <a href="https://www.investiere.ch/" target="_blank">
        <img className="pa3" src={LogoF} />
        </a>
        <a href="https://www.microsoft.com/de-ch/" target="_blank">
        <img className="pa3" src={LogoG} />
        </a>
        </div>
        <div className="logorow flex flex-column">
        <a href="https://www.startglobal.org/" target="_blank">
        <img className="pa3" src={LogoH} />
        </a>
        <a href="https://startupweekend.ch/" target="_blank">
        <img className="pa3" src={LogoI} />
        </a>
        <a href="https://www.startus.cc/" target="_blank">
        <img className="pa3" src={LogoJ} />
        </a>
        <a href="https://www.testingtime.com/en/" target="_blank">
        <img className="pa3" src={LogoK} />
        </a>
        <a href="https://what.digital/" target="_blank">
        <img className="pa3" src={LogoL} />
        </a>
        <a href="https://www.wengervieli.ch" target="_blank">
        <img className="pa3" src={LogoM} />
        </a>
        <a href="https://worldwebforum.com/display/nextGen/Home" target="_blank">
        <img className="pa3" src={LogoN} />
        </a>
        </div>
      </div>
      <div className="w-100 w-50-ns pl3-ns flex items-center">
        <div className="pa3 measure">
          <h3>Supporters & Eco System</h3>
          <p className="lh-copy">
          As a key player within the Swiss ecosystem, we interact closely to a variety of stakeholders & startup organisations aiming to accelerate the development of the Switzerland's startup scene.
          </p>
        </div>
        </div>
      </div>
      <Wrapper style={{ paddingTop: '5rem', paddingBottom: '1rem' }}>
      <Title>Sponsors</Title>
      </Wrapper>
      <div className="flex flex-column flex-row-ns">
      <div className="w-100 w-50-ns pl3-ns flex items-center justify-center">
        <div className="pa3 measure">
          <h3>Sponsors</h3>
          <p className="lh-copy">
          We are grateful to have such amazing sponsors that support us during all our events and our complete journey.
          </p>
        </div>
        </div>
      <div className="pr3-ns mb4 mb0-ns w-100 w-50-ns bg-grey flex containersupporter" style={style}>
        <div className="logorow flex flex-column">
        <img className="pa3" src={Logoa} />
        <img className="pa3" src={Logob} />
        <img className="pa3" src={Logoc} />
        <img className="pa3" src={Logod} />
        </div>
        <div className="logorow flex flex-column">
        <img className="pa3" src={Logoe} />
        <img className="pa3" src={Logof} />
        <img className="pa3" src={Logog} />
        <img className="pa3" src={Logoh} />
        </div>
      </div>
      </div>
    </>
)

export default Supporters