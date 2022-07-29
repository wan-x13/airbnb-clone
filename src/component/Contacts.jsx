import photofluffy from "../assets/images/fluffykins.png"
import phoneIcon from "../assets/images/phone-icon.png";
import mailIcon from "../assets/images/mail-icon.png";
import styled from "styled-components";


const ContactContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 40px;

      
        `;

const ContactCard = styled.div`
display: flex;
flex-direction : column;
justify-content: center;
box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.25);
border-radius: 10px;
display: flex;
flex-direction: column;
padding: 13px;
padding-bottom: 20px;
background-color: white;
width : 450px;
      
`
const Contacts = () => {
    return (
        <ContactContainer>
                 <div className="contact-card">
                   <img src={photofluffy}/>
                   <h3>Fluffykins</h3>
                    <div className="info-group">
                     <img src={phoneIcon}/>
                      <p>(212) 555-2345</p>
                   </div>
                <div className="info-group">
                    <img src={mailIcon} />
                    <p>fluff@me.com</p>
                </div>
            </div>
            
        </ContactContainer>
    );
};

export default Contacts;