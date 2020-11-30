import React from 'react'
import styled from 'styled-components';
import ComputerImg from '../images/computer1.jpg';
const ComputerImgStyle = styled.img`
    max-width: 100%;
    min-width: 100%;
    position: relative;
    left: 16px;
    bottom: 16px;
    // border-radius: 12px;
    -webkit-border-top-left-radius: 12px;
    -webkit-border-bottom-left-radius: 12px;
`;
function Blog() {
    return (
        <>
            <article>
                <h2>Blog</h2>
                <h3>How to organize your CSS</h3>
                <div>
                    <p>
                        In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
                    </p>
                    <p>
                        Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                    </p>
                </div>
                <a>dev.to</a>
            </article> 
            <figure>
                <ComputerImgStyle className="css-img" src={ComputerImg}/>
            </figure>
        </>
    )
}

export default Blog
