import Form from "@rjsf/core";
import styled from "styled-components";
import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../context/CardContext";
import { CardListContext } from "../context/CardListContext";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Info from "../components/Info";

const Container = styled.div`
  max-width: 450px;
  margin: auto;
  padding: 10px;
`;
const FormWrapper = styled.div`
  display:flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  padding: 10px 40px;
  border-radius: 5px;
  -webkit-box-shadow: 7px 9px 6px -8px rgba(0,0,0,0.59);
-moz-box-shadow: 7px 9px 6px -8px rgba(0,0,0,0.59);
box-shadow: 7px 9px 6px -8px rgba(0,0,0,0.59);
`;
const Title = styled.h1`
 text-align:center
`;

const CardWrapper = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: space-between;
margin-bottom: 10px;`

const ButtonWrapper = styled.div`
display: flex;
    justify-content: center;
    align-items: center;`

   const buttonstyle={
     background:'white',
     color:'black',
     border:`2px solid black`,
     minWidth:50,
     fontSize: 12,
      cursor: `pointer`
    } 


const AddNewCard = () => {
  const { cardDetails, setCardDetails } = useContext(CardContext)
  const { cardLists, setCardLists } = useContext(CardListContext)
  const [infoDisplay,setInfoDisplay] = useState({})
  const navigation = useNavigate()
  const schema = {
    type: "object",
    required: ["cardNumber", "validThrough", "cardName", "cvv"],
    properties: {
      cardNumber: {
        type: "string",
        title: "Card Number",
      },
      validThrough: {
        type: "string",
        title: "Valid Thru",
      },
      cardName: {
        type: "string",
        title: "Cardholder Name",
      },
      cvv: {
        type: "string",
        title: "Cvv",
      },
    },
  }


  function ObjectFieldTemplate({ TitleField, properties, title, description }) {
    return (
      <div>
        <TitleField title={title} />
        <CardWrapper className="row">
          {properties.map(prop => (
            <div
              key={prop.content.key}>
              <TextField {...prop.content.props} setInfoDisplay={setInfoDisplay}/>
            </div>
          ))}
        </CardWrapper>
      </div>
    );
  }


  const handleSubmit = ({ formData }) => {
    cardLists.push(formData)
    setCardLists(cardLists)
    navigation('/');
  }
  const handleChange = (change) => {
    console.log('change>>',change)
    // setInfoDisplay({...change.formData})
    //  setCardDetails({...cardDetails,...change.formData})
  }

  return (
    <Container>
      <Title>Credit Card</Title>
      <Button title={'Back'} style={buttonstyle} onClick={()=>navigation('/')}/>

      <FormWrapper>
        <Info infoDisplay={infoDisplay}/>
        <Form schema={schema}
          ObjectFieldTemplate={ObjectFieldTemplate} onSubmit={handleSubmit} onChange={handleChange}>
          <ButtonWrapper>

            <Button title={'Save Credit Card'} />
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Container>
  )
};

export default AddNewCard;


