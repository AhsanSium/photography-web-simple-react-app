import React from 'react';
// import offset1 from '../../../Images/offset_comp_772626-opt1.png';
// import offset2 from '../../../Images/offset_comp_772626-opt2.png';
// import offset3 from '../../../Images/offset_comp_772626-opt3.png';

const Body = () => {
    return (
        <div className="Body_Wrapper">
            <div className="Image_Section">
                <div className="Image Image1">
                    
                </div>
                <div  className="Image Image2">

                </div>
                <div  className="Image Image3">

                </div>
                {/* <img className='offset1' src={offset1} alt="" />
                <img className='offset2' src={offset2} alt="" />
                <img className='offset3' src={offset3} alt="" /> */}
            </div>
            <div className="Text_Section">
                <h2>About Us</h2>
                <p>
                Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit
                </p>
            </div>
        </div>
    );
};

export default Body;