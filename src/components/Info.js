import  styled  from "styled-components";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

const InfoContainer=styled.div`
display: flex;
flex-direction: column;
background: #42a5f6;
padding: 60px 30px 15px 30px;
min-height: 60px;
border-radius: 10px;
margin-bottom: 15px;
color: white;
justify-content: space-between;
`

const LowerSectionWrapper=styled.div`
display: flex;
justify-content: space-between;
font-size: 12px;
`




const Info = (props) => {
    const { cardDetails } = useContext(CardContext)
    console.log('props>>>',props)
    const {infoDisplay}=props
    return(
        <InfoContainer>
            <div>{infoDisplay.cardNumber?infoDisplay.cardNumber:`-`}</div>
            <LowerSectionWrapper>
                <div>
                    <div>{`cardholder name`}</div>
                    <div>{cardDetails.cardName?cardDetails.cardName:`-`}</div>
                </div>
                <div>
                    <div>{`valid thru`}</div>
                    <div>{cardDetails.validThru?cardDetails.validThru:`-`}</div>
                </div>
            </LowerSectionWrapper>
        </InfoContainer>
      )  
  };
  
export default Info;


