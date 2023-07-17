import React from "react";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #e5e5e5;

  .footer_font {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 88.02%;
    color: #828282;
    margin-top: 0.5rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="footer_font">개인정보 처리방침 | 이용 약관</div>
      <div className="footer_font">All rigths reserved @ Codestates</div>
    </FooterContainer>
  );
}

export default Footer;
