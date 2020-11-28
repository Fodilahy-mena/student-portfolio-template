import React from 'react'
import JeromeImg from '../images/jerome1.jpg';
import styled from 'styled-components';

const DetailsImgStyle = styled.img`
    max-width: 100%;
    min-width: 100%;
    border-radius: 12px;
`;


function PersonalDetails() {

    return (
        <>
            <figure>
                <DetailsImgStyle className="details_img" src={JeromeImg} alt=""/>
            </figure>
            <div>
                <div className="details_wrapper">
                    <div>
                        <h1>Jerome Emilien</h1>
                        <span className="details_job">Front-end developer</span>
                    </div>
                    <ul className="links_social">
                        <li>
                            <a className="icon icon_email" href="">
                                <i className="ri-mail-fill"></i>
                                <span>jerome.emi@onja.org</span>
                            </a>
                        </li>
                        <li>
                            <a className="icon icon_phone" href="">
                                <i className="ri-phone-fill"></i>
                                <span>(+ 261) 34 14 988 04</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
                <p>Mpamolavola tena manosika tena, izay vonona hianatra sy hamorona rindranasa UI aplikasiona miavaka.</p>
            </div>
        </>
    )
}

export default PersonalDetails
