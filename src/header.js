import React, { Fragment } from "react"
import logo from "./data/image/logo.png"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderDiv = styled.div`
  width: 100%;
  height: 70px;
  poistion: relative;
  border-bottom: solid 0.5px #d3d3d3;
  vertical-align: middle;
  line-height: 70px;
  display: flex;
  align-items: center;

  .link {
    margin-left: 2rem;
    text-decoration: none;
    color: #666666;
  }

  .logo-img {
    height: auto;
    width: auto;
    max-width: 50px;
    max-height: 45px;
  }
`

export default ({ children }) => (
  <Fragment>
    <HeaderDiv>
      <img src={logo} className="logo-img" />
      <Link to={`/resume/`} className="link">
        resume
      </Link>
    </HeaderDiv>

    {children}
  </Fragment>
)
