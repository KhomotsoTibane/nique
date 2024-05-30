import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface BookingProps {
  name: string;
  guests: string;
  time: string;
  email: string;
  date: Date;
}

export default function Email({ name, email, guests, date, time }: BookingProps) {
  return (
    <Html>
      <Head />
      <Preview>Reservation confirmation</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* <Section style={logoContainer}>
            <Img src={"/assets/images/nique.png"} width="120" height="120" alt="Nique logo" />
          </Section> */}
          <Heading style={h1}>Nique Reservation confirmation</Heading>
          <Text style={heroText}>
            Dear {name}, Thank you for choosing Nique. We are pleased to confirm your reservation as
            follows:
          </Text>

          <Text style={heroText}>
            <Section>
              <Row>
                <Column>{`Booking Name: ${name}`}</Column>
              </Row>
              <Row>
              <Column>{`Guests: ${guests}`}</Column>
              </Row>
              <Row>
              <Column>{`Date: ${date}`}</Column>
              </Row>
            </Section>
          </Text>

     
          <Section>
            <Row style={footerLogos}>
              <Column style={{ width: "66%" }}>
                {/* <Img src={`${baseUrl}/static/slack-logo.png`} width="120" height="36" alt="Slack" /> */}
              </Column>
              <Column>
                <Section>
                  <Row>
                    <Column>
                      <Link href="/">
                        {/* <Img
                          src={`${baseUrl}/static/slack-twitter.png`}
                          width="32"
                          height="32"
                          alt="Slack"
                          style={socialMediaIcon}
                        /> */}
                      </Link>
                    </Column>
                    <Column>
                      <Link href="/">
                        {/* <Img
                          src={`${baseUrl}/static/slack-facebook.png`}
                          width="32"
                          height="32"
                          alt="Slack"
                          style={socialMediaIcon}
                        /> */}
                      </Link>
                    </Column>
                    <Column>
                      <Link href="/">
                        {/* <Img
                          src={`${baseUrl}/static/slack-linkedin.png`}
                          width="32"
                          height="32"
                          alt="Slack"
                          style={socialMediaIcon}
                        /> */}
                      </Link>
                    </Column>
                  </Row>
                </Section>
              </Column>
            </Row>
          </Section>

          <Section>
            <Link
              style={footerLink}
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our blog
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our Menu
            </Link>
            
         
            <Text style={footerText}>
              Nique, <br />
              46 Pretoria Street Gauteng<br />
              <br />
              All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left" as const,
  marginBottom: "50px",
};

const footerLink = {
  color: "#b7b7b7",
  textDecoration: "underline",
};

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
};

// const socialMediaIcon = {
//   display: "inline",
//   marginLeft: "32px",
// };

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
};

// const logoContainer = {
//   marginTop: "32px",
// };

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
};




// const text = {
//   color: "#000",
//   fontSize: "14px",
//   lineHeight: "24px",
// };
