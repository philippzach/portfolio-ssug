import React from 'react';
import Company from '../../components/company-profile';
import LogoH from '../../../static/logos_portfolio/Logos-Portfolio-svg-idun-01.svg';

const Avaneo = () => (
    <Company 
        title="Idun Technologies"
        shortdesc=""
        image={LogoH}
        founded="11/2017"
        location="Zurich"
        management="Simon Bachmann, Séverine Chardonnens"
        investment="Pre-Seed"
        segment="Medical science, technology"
        website="https://www.iduntechnologies.ch"
        paragraph="IDUN Technologies Ltd. is a bioelectrode company based in Zurich, Switzerland. The ETH Zurich spinoff is developing and manufacturing soft and stretchable dry electrodes for biopotential monitoring (ECG, EEG, EMG) and stimulation. The patent-pending surface structure of these electrodes provides high quality signals with skin-friendly materials without electrolyte gel."
    />
)

export default Avaneo