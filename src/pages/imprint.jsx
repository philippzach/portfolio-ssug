import React, { Component } from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Title, Navbar } from 'components';
import Background from '../../static/imprint.jpg';
import Seo from '../components/SEO/index';

const Hero = styled.header`
 background-image: url("${Background}");
 background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:top;
height: 400px;
`;

const Imprint = () => (
  <Layout>
    <Seo title='Imprint' desc='Imprint and Contact Information' />
    <Hero>
      <Navbar />
    </Hero>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <>
        <Title>
          <h2>Imprint and Contact Information</h2>
        </Title>
        <p>Swiss Startup Group</p>
        <p>Färberstrasse 6</p>
        <p>8008 Zürich</p>
        <p>Switzerland</p>
        <a href='mailto:media@ssuf.ch'>media@ssuf.ch</a>

        <Title>
          <b>Authorised representative person(s)</b>
        </Title>
        <p>Mike Baur</p>
        <p>Max Meister</p>
        <p>Oliver Walzer</p>
        <p>Michael Widmer</p>

        <Title>
          <b>Commercial register entry</b>
        </Title>
        <p>Registered company name: Swiss Startup Group</p>
        <p>Commercial Register No: CHE-407.344.141</p>

        <Title>
          <b>VAT number</b>
        </Title>
        <p>CHE-407.344.141 MWST</p>

        <Title>
          <b>Disclaimer</b>
        </Title>
        <p className='lh-title'>
          This disclaimer is to be regarded as part of the internet publication
          which you were referred from. If sections or individual terms of this
          statement are not legal or correct, the content or validity of the
          other parts remain uninfluenced by this fact.
        </p>

        <p className='b'>Liability for the contents of this website</p>
        <p className='lh-copy'>
          The contents of our pages were created with the greatest care. For the
          correctness, completeness and topicality of the contents we can take
          over however no guarantee. As a service provider, we are responsible
          for our own content on these pages in accordance with general laws.
          However, we are not obliged to monitor transmitted or stored
          third-party information or to search for circumstances that indicate
          illegal activity. Obligations to remove or block the use of
          information in accordance with general laws remain unaffected by this.
          However, liability in this respect is only possible from the point in
          time at which we become aware of a concrete violation of the law. As
          soon as we become aware of such infringements, we will remove the
          content immediately.
        </p>

        <p className='b'>Liability for links to third party websites</p>
        <p className='lh-copy'>
          Our offer contains links to external websites. We have no influence on
          the content of these external websites. Therefore, we cannot assume
          any liability for these external contents. The respective provider or
          operator of the pages is always responsible for the contents of the
          linked pages. The linked pages were checked for possible legal
          infringements at the time of linking. Illegal contents were not
          recognisable at the time of linking. A permanent control of the
          contents of the linked pages is not reasonable without concrete
          evidence of an infringement. As soon as we become aware of any legal
          infringements, we will remove such links immediately.
        </p>

        <p className='b'>Copyright</p>
        <p className='lh-copy'>
          The operators of this website always endeavour to respect the
          copyrights of others or to use their own or licence-free works. The
          contents and works on this website created by the site operators are
          subject to copyright. Contributions of third parties are marked as
          such. The duplication, processing, distribution and any kind of use
          outside the limits of copyright law require the written consent of the
          respective author or creator. Downloads and copies of these pages are
          only permitted for private, non-commercial use.
        </p>

        <p className='b'>Privacy policy</p>
        <p className='lh-copy'>
          We attach great importance to the protection of your data. In order to
          inform you in full about the use of personal data, we kindly ask you
          to take note of the following data protection information.
        </p>

        <p className='b'>Personal data</p>
        <p className='lh-copy'>
          Personal data which you transmit electronically on this website, such
          as name, e-mail address, address or other personal details, will only
          be used by us for the purpose stated in each case, stored securely and
          not passed on to third parties. The provider automatically collects
          and stores information on the web server, such as the browser used,
          operating system, reference page, IP address, time of access, etc.
          These data cannot be assigned to any specific person without checking
          further data sources and we do not further evaluate these data as long
          as there is no illegal use of our website.
        </p>

        <p className='b'>Form data and comments</p>
        <p className='lh-copy'>
          When website visitors leave comments or form entries, the data entered
          and their IP addresses are stored. This is done to be on the safe side
          if someone writes illegal content (insults, left- or right-wing
          extremist propaganda, hate postings, etc.). In this case we are
          interested in the identity of the author.
        </p>

        <p className='b'> Cookies</p>
        <p className='lh-copy'>
          Cookies are small files that enable this website to store specific
          user-related information on the visitor's computer while our website
          is being visited. Cookies help us to determine the frequency of use
          and the number of users of our Internet pages, as well as to make our
          offers convenient and efficient for you. We use session cookies, which
          are only stored temporarily for the duration of your use of our
          website, and permanent cookies to record information about visitors
          who repeatedly access our website. The purpose of using these cookies
          is to provide optimal user guidance and to recognise visitors and to
          provide them with information about repeated visits to our website.The
          purpose of using these cookies is to provide optimal user guidance, to
          recognize visitors and to present a website that is as attractive and
          interesting as possible when used repeatedly. The content of a
          permanent cookie is limited to an identification number. Name, IP
          address etc. are not stored. An individual profile of your usage
          behaviour is not created. It is also possible to use our offers
          without cookies. You can deactivate the storage of cookies in your
          browser, restrict it to certain websites or set your web browser
          (Chrome, IE, Firefox,...) so that it notifies you as soon as a cookie
          is sent. You can also delete cookies from your PC's hard drive at any
          time. Please note, however, that in this case you must expect a
          restricted display of the page and limited user guidance.
        </p>

        <p className='b'>Privacy policy for the use of Facebook</p>
        <p className='lh-copy'>
          On our pages are plugins of the social network Facebook, 1601 South
          California Avenue, Palo Alto, CA 94304, USA integrated. You can
          recognize the Facebook plugins by the Facebook logo or the "Like"
          button on our page. You can find an overview of the Facebook plugins
          here: https://developers.facebook.com/docs/plugins/. When you visit
          our pages, the plugin establishes a direct connection between your
          browser and the Facebook server. Facebook receives the information
          that you have visited our site with your IP address. If you click the
          Facebook "Like" button while logged into your Facebook account, you
          can link the content of our pages to your Facebook profile. This
          allows Facebook to associate visiting our pages with your user
          account. We would like to point out that, as the provider of the
          pages, we do not have any knowledge of the content of the data
          transmitted or its use by Facebook. If you do not want Facebook to be
          able to assign visits to our pages to your Facebook user account,
          please log out of your Facebook user account.
        </p>

        <p className='b'>Privacy policy for the use of Twitter</p>
        <p className='lh-copy'>
          On our website, functions of the Twitter service are integrated. These
          functions are offered by Twitter Inc, Twitter, Inc. 1355 Market St,
          Suite 900, San Francisco, CA 94103, USA. By using Twitter and the
          functions of the Twitter buttons, the websites you visit are linked to
          your Twitter account and made known to other users. Data is also
          transferred to Twitter. We would like to point out that as the
          provider of the website we do not have any knowledge of the content of
          the transmitted data or its use by Twitter. Further information on
          this can be found in Twitter's privacy policy at
          https://twitter.com/privacy?lang=en. You can change your data
          protection settings on Twitter in the account settings at
          https://twitter.com/settings/account .
        </p>

        <p className='b'>Privacy policy for the use of Instagram</p>
        <p className='lh-copy'>
          On our website, functions of the Instagram service are integrated.
          These functions are offered by Instagram Inc., 1601 Willow Road, Menlo
          Park, CA, 94025, USA. If you are logged into your Instagram account,
          you can link the contents of our pages to your Instagram profile by
          clicking the Instagram button. This allows Instagram to associate
          visiting our pages with your user account. We would like to point out
          that, as the provider of the pages, we do not have any knowledge of
          the content of the transmitted data or its use by Instagram. For more
          information, please refer to Instagram's privacy policy at
          https://www.instagram.com/about/legal/privacy/.
        </p>

        <p className='b'>Right to Information</p>
        <p className='lh-copy'>
          You have the right at any time to obtain information about the data
          stored about you, its origin and recipient as well as the purpose of
          its storage.
        </p>
      </>
    </Wrapper>
  </Layout>
);

export default Imprint;
