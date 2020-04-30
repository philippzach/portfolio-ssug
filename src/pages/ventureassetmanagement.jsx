import React from 'react';
import { Link, navigate } from 'gatsby';

import styled from 'react-emotion';
// import '../components/ssuc/button.css';
import useLocalStorage from 'react-use-localstorage';
import Logo from '../images/ssuc.svg';
import Seo from '../components/SEO/index';

const Container = styled.div`
  margin: 3em;
`;
const Image = styled.div`
  text-align: center;
`;
const Text = styled.div`
  max-width: 50em;
  margin: 0 auto;
`;
const Overflow = styled.div`
  font-family: sans-serif;
  padding: 1em;
  height: 400px;
  overflow: scroll;
  border: 1px solid black;
`;
const Button = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-around;
`;
const Paragraph = styled.p`
  line-height: 1.5em;
`;

const Terms = () => {
  if (typeof window !== 'undefined') {
    const [item, setItem] = useLocalStorage('terms', false);
    if (item) {
      navigate('/ventureassetmanagementtrue');
      return null;
    }
    return (
      <Container>
        <Seo
          title='SWISS STARTUP CAPITAL | Venture Asset Management'
          description='The Swiss Startup Group has founded Swiss Startup Capital AG as a Venture Asset Management division. Direct Investments - Indirect Investments - Corporate Venture Capital.'
          lang='en'
        />
        <Image>
          <img style={{ width: '185px' }} src={Logo} alt='SSUC Logo' />
        </Image>
        <Text>
          <h1 style={{ textAlign: 'center' }}>Terms and conditions</h1>
          <Overflow>
            <Paragraph>
              The visitor confirms that he understands that the information on
              the securities published on this website only concerns issuers
              which are not necessarily approved by the FINMA and which, in such
              case, should not be offered or distributed to non-Qualified
              investors in or from Switzerland. Some collective investment
              schemes on this website are indeed not subject to the supervision
              of the FINMA and investors therefore do not benefit from the
              protection offered by CISA. This website serves only for
              information purposes.
            </Paragraph>
            <Paragraph>
              Through this website, Swiss Startup Capital AG does not provide
              any investment, legal, accounting or tax advice. The information
              provided should not be considered as suitable for the personal
              situation of each investor and the collective investments schemes,
              securities or services offered are not necessary adapted, suitable
              and individualized to each investor. The material available on the
              website does not take into account the specific individualized
              investment objectives, financial situation or particular needs of
              any specific visitor. Therefore, visitors must carefully review
              and analyze the relevant documents (such as offering memoranda,
              prospectus, articles etc.) and assess the risk disclosures and
              legal disclaimers given therein before investing in any of the
              financial product published on the website. No investment should
              be made without carefully analyzing the suitability of the
              investment or transaction for the specific needs of the potential
              investor, in particular should be examined the legal, regulatory,
              tax, and accounting consequences of the investment or transaction,
              and impact of the investment or transaction on the liquidity and
              credit situation of the potential investor. The information on and
              the materials accessible through the website should not be
              considered by visitors as an alternative for the exercise of their
              own judgment, and it is recommended to potential investors, before
              taking any investment decision, to always consult a qualified
              professional advisor to obtain appropriate advises, in particular
              financial, legal, accounting or tax.
            </Paragraph>
            <Paragraph>
              Past performance should not be seen as an indication of future
              performance, which means that the value and any income arising
              from any investment referred to on this website may decline or
              rise and it is possible that an investor may not be able to
              recover the amount originally invested. The information published
              on this website mainly concerns financial products for which there
              is no recognized market. It may therefore be difficult for
              investors to sell their investment or to obtain reliable
              information about its value or the extent of the risks to which it
              is exposed.
            </Paragraph>
            <Paragraph>
              For legal, tax, or any other regulatory reasons, some or all of
              the services or products described on the website may not be
              offered worldwide without certain restrictions. In particular,
              some services offered by this website in the member area may not
              be available to nationals of other countries, in particular for US
              PERSONS.
            </Paragraph>
            <Paragraph>
              This website and its content and the materials accessible through
              it do not constitute, unless expressly stated in a document
              accessible via the website, a prospectus within the meaning of
              Articles 652a resp. 1156 of the Swiss Code of Obligations or a
              simplified prospectus within the meaning of Article 5 CISA.
            </Paragraph>
          </Overflow>
          <Button>
            <Link
              className='button -dark center'
              to='/ventureassetmanagementfalse'
            >
              I Decline
            </Link>
            <Link
              className='button -dark center'
              to='/ventureassetmanagementtrue'
              onClick={() => setItem(true)}
            >
              I Accept
            </Link>
          </Button>
        </Text>
      </Container>
    );
  }
  return null;
};

export default Terms;
