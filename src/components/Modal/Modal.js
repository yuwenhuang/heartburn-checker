import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavBar from '../Layouts/NavBar';

const ModalWrap = styled.div`
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  width: 25%;
  height: auto;
  margin: 40px auto;
`;
const Question = styled.text`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
`;
const AnswerWrap = styled.div`
  flex-direction: row;
`
const AnswerButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 18px;
`;

const ActionButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
`;

class Modal extends Component {
  renderContent(){
    return(
      <Question>
      This is the question
      </Question>
    )
  }

  renderAnswers(){
      return(
          <AnswerWrap>
              <AnswerButton>AnswerButton</AnswerButton>
              <AnswerButton>AnswerButton</AnswerButton>
          </AnswerWrap>
      )
  }

  renderFooter(){
      return(
          <ActionButton>ActionButton</ActionButton>
      )
  }

  render(){
      return (
          <ModalWrap>
              {this.renderContent()}
              {this.renderAnswers()}
              {this.renderFooter()}
          </ModalWrap>
      )
  }
}

export default Modal;
