import React from "react"
import Header from "../header.js"
import styled from "styled-components"
import resumeData from "../data/resumeData.js"

const Wrapper = styled.div`
  margin: 3rem;
`

const Row = styled.div`
  display: flex;
  margin-bottom: 2rem;

  #basic-info {
    font-size: 2rem;
    font-weight: bold;
  }

  .left-category {
    width: 250px;

    font-size: 1.3rem;
    font-weight: bold;
  }

  .right-items {
    .item-name {
      font-size: 1.1rem;
      font-weight: bold;
    }

    .item {
      margin-bottom: 1rem;
    }
  }
`

export default () => (
  <Header>
    <Wrapper>
      <Row>
        <div className="left-category" id="basic-info">
          이주연
        </div>
        <div className="right-items">
          010 - 2415 - 2026
          <br />
          yyijoo@gmail.com
          <br />
          github.com/yyijoo
        </div>
      </Row>
      <Row>
        <div className="left-category">{resumeData[0].category}</div>
        <div className="right-items">
          {resumeData[0].contents.map(content => (
            <div>
              <div className="item-name">{content.itemName}</div>
              <div className="item">
                {content.items.map(item => (
                  <span>{item} </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Row>
    </Wrapper>
  </Header>
)
