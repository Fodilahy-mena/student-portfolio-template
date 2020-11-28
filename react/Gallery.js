import React from 'react'
import styled from 'styled-components';
import InteriorImg from '../images/interior1.png';
const GalleryImgStyle = styled.img`
    max-width: 100%;
    min-width: 100%;
    border-radius: 12px;
`;
function Gallery() {
    return (
        <>
            <figure>
                <GalleryImgStyle className="gallery_img--demo" src={InteriorImg} alt=""/>
                
            </figure>
            <div>
                <div className="img--demo_tools">
                    <p>#HTML</p>
                    <p>#CSS</p>
                    <p>#responsive</p>
                </div>
                <h2>My Gallery</h2>
                <p className="img--demo_description first--demo_description">In this project, I worked with HTML and CSS to create a responsive page. The design is from devchallenge.io</p>
                <p className="img--demo_description">Amin'ity tetikasa ity dia nampiasa HTML sy CSS aho hamoronana pejy izay azo abeazina sy akelezina. Ny famolavolana dia avy amin'ny devchallenge.io</p>
                <a href="https://j-emilien-interior-consultant.netlify.app/">
                    <button className="img--demo_btn btn_demo">Demo</button>
                </a>
                <a href="">
                    <button className="img--demo_btn btn_code">Code</button>
                </a>
            </div>
        </>
    )
}

export default Gallery
