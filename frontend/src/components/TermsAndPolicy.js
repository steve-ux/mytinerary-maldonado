import React from "react";
import Cover from "../assets/travel_policy.jpg";
import Logotipo from "../assets/Mytinerary con nombre sin texto.svg";
import { Link } from "react-router-dom";

function TermsAndPolicy() {
  return (
    <div className="TermsAndPolicy">
      <img
        className="cover"
        style={{ animation: "myAnim 2s ease 0s 1 normal forwards" }}
        src={Cover}
      />

      <div className="logotipo-city">
        <img src={Logotipo} />
      </div>
      <br/>
      <h1 className="privacy">
        Privacy Policy{" "}
        <Link as={Link} to={"/"}>
          MyTinerary
        </Link>
      </h1>
      <p>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>
      <p>
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
      </p>
      <h2>Interpretation and Definitions</h2>
      <p>
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </p>
      <h3>Definitions</h3>
      <p>For the purposes of this Privacy Policy:</p>
      <p>
        Account means a unique account created for You to access our Service or
        parts of our Service.
      </p>
      <p>
        Business, for the purpose of the CCPA (California Consumer Privacy Act),
        refers to the Company as the legal entity that collects Consumers'
        personal information and determines the purposes and means of the
        processing of Consumers' personal information, or on behalf of which
        such information is collected and that alone, or jointly with others,
        determines the purposes and means of the processing of consumers'
        personal information, that does business in the State of California.
      </p>
      <p>
        Company (referred to as either "the Company", "We", "Us" or "Our" in
        this Agreement) refers to TermsFeed.com website. For the purpose of the
        GDPR, the Company is the Data Controller.
      </p>
      <p>
        Consumer, for the purpose of the CCPA (California Consumer Privacy Act),
        means a natural person who is a California resident. A resident, as
        defined in the law, includes (1) every individual who is in the USA for
        other than a temporary or transitory purpose, and (2) every individual
        who is domiciled in the USA who is outside the USA for a temporary or
        transitory purpose.
      </p>
      <p>
        Cookies are small files that are placed on Your computer, mobile device
        or any other device by a website, containing the details of Your
        browsing history on that website among its many uses.
      </p>
      <p>
        Data Controller, for the purposes of the GDPR (General Data Protection
        Regulation), refers to the Company as the legal person which alone or
        jointly with others determines the purposes and means of the processing
        of Personal Data.
      </p>
      <p>
        Device means any device that can access the Service such as a computer,
        a cellphone or a digital tablet.
      </p>
      <h2>Types of Data Collected</h2>
      <h3>Personal Data</h3>
      <p>
        While using Our Service, We may ask You to provide Us with certain
        personally identifiable information that can be used to contact or
        identify You. Personally identifiable information may include, but is
        not limited to:
      </p>
      <ol>
        <li>Name</li>
        <li>Last Name</li>
        <li>Email</li>
        <li>Image</li>
        <li>Country</li>
      </ol>
      <h3>Usage Data</h3>
      <p>
        Usage Data may include information such as Your Device's Internet
        Protocol address (e.g. IP address), browser type, browser version, the
        pages of our Service that You visit, the time and date of Your visit,
        the time spent on those pages, unique device identifiers and other
        diagnostic data.
      </p>
      <p>
        When You access the Service by or through a mobile device, We may
        collect certain information automatically, including, but not limited
        to, the type of mobile device You use, Your mobile device unique ID, the
        IP address of Your mobile device, Your mobile operating system, the type
        of mobile Internet browser You use, unique device identifiers and other
        diagnostic data.
      </p>
      <h2>Changes to this Privacy Policy</h2>
      <p>
        We may update Our Privacy Policy from time to time. We will notify You
        of any changes by posting the new Privacy Policy on this page.
      </p>
      <p>
        We will let You know via email and/or a prominent notice on Our Service,
        prior to the change becoming effective and update the "Last updated"
        date at the top of this Privacy Policy. You are advised to review this
        Privacy Policy periodically for any changes. Changes to this Privacy
        Policy are effective when they are posted on this page.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, You can contact us:
        By visiting this page on our social network.
      </p>
    </div>
  );
}

export default TermsAndPolicy;
