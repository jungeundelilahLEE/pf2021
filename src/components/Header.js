import React from 'react';
import styled, { css } from 'styled-components';
import { Link, withRouter, useHistory } from 'react-router-dom';

function Header () {

    return (
        <>
        <StyledNav>
            <Name>
                JUNG EUN delilah LEE
            </Name>
            <ButtonBox>
            <Button1>
                ABOUT ME
            </Button1>
            <Button2>
                WORKS
            </Button2>
            <Button3>
                CONTACT
            </Button3>
            </ButtonBox>
        </StyledNav>
        </>
    )

}

const StyledNav = styled.div`
  display : flex;
  flex-direction : row;
  padding : 0 10%;
  border : 3px dashed pink;
`
const Name = styled.div`
  display : flex;
  flex-direction : row;
  color : blue;
`
const ButtonBox = styled.div`
  display : flex;
  flex-direction : row;
  border : 2px solid red;
`
const Button1 = styled.button`
  display : flex;
  border : 1px solid orange;
`
const Button2 = styled.button`
  display : flex;
  border : 1px solid orange;
`
const Button3 = styled.button`
  display : flex;
  border : 1px solid orange;
`

export default Header;