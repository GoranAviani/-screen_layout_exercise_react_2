import React from 'react';
import './Content.css'

const Content = () => {

    return (
        <div class="content">
            <div class="info">
                <div class="infoTitle">
                    This is Info Title
                </div>
                <div class="infoText">
                    This is a lot of info text that is supposed to be displayed here, so here is more text
                    lets hope there is enoug of text here lets hope there is enoug of text here lets hope there is enoug of text here
                    lets hope there is enoug of text here
                </div>
            </div>
            <div className="infoButtons">
                <button className="redButton">Red button</button>
                <button className="ghostButton">Ghoooost button</button>
            </div>
            </div>
    )
}

export default Content;