import Form from "@rjsf/core";
import styled from "styled-components";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  `
const Wrapper = styled.div`
  margin-bottom:10px;
  `
const Input = styled.input`
width:${props=>(props.name === `cardNumber` || props.name === `cardName`)?`15rem`:`4rem`} ;
border-radius: 5px;
border: 1.2px solid lightgrey;
padding: 5px 10px;
&:focus {
  border: 1.2px solid lightblue !important;
}
  `

const TextField = (props) => {
  const { cardDetails,setCardDetails } = useContext(CardContext)
  const { schema: { title, type } } = props
  console.log('props>>???',props)
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Input type="text"
        name={props.name}
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)}
      //   onChange={(event) => {
      //     console.log('event.target>>',event.target)
      //     cardDetails[event.target.name]=event.target.value
      //     console.log('cardDetails',cardDetails)
      //     props.setInfoDisplay(cardDetails)
      // }}
      />
    </Wrapper>
  )
};

export default TextField;


