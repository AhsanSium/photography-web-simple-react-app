import React from 'react';
import arrow1 from '../../../Images/Arrow1.png';
import arrow2 from '../../../Images/Arrow2.png';
import Menu from '../../Shared/Menu/Menu';

const Header = () => {
    return (
        <div className="Header_Wrapper">
            <Menu></Menu>
            <div className="Header">
                
                <div class="arrows prev item item1">
                    <img src={arrow2} alt="Arrow Img" />
                </div>

                <div className="Header_Content item item2">
                    <h3>A picture is worth a thousand words</h3>
                    <p>
                    It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos.
                    </p>
                    <button>View Gallery</button>
                </div>

                <div class="arrows next item item3">
                    <img src={arrow1} alt="Arrow Img" />
                </div>
                
            </div>
        </div>
    );
};

export default Header;