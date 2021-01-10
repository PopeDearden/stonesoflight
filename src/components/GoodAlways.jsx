import '../App.scss'
import Zoom from 'react-reveal/Zoom';

function GoodAlways() {
    return (
        <div className="GoodAlways">
            <Zoom>

            <div className="Title">
                <h2>Good Always, LLC</h2>
            </div>
            <div className="Row2">
                <div className="Bubble">
                    <img id="BubbleImg" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/good_always_square_orange.jpg?v=1610248688" alt="good always logo"></img>
                    <div className="TextBox">
                        <h2>Stones of Light owns Good Always, LLC. This allows for Good Always' profits to help fund the education of impoverished children!</h2>
                    </div>
                    <a href="https://goodalways.com/pages/mission" target="_blank" rel="noreferrer">

                        <div className="LearnButton">
                            <h2>Learn More</h2>
                        </div>
                    </a>
                </div>
                <div className="Arrow2">

</div>
                <div className="Bubble">
                    <img id="BubbleImg" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/Artisan_products_home.jpg?v=1609485248" alt="good always products"></img>
                    <div className="TextBox">
                        <h2>Good Always, LLC markets and sells products that help end extreme poverty!</h2>
                    </div>
                    <a href="https://goodalways.com/" target="_blank" rel="noreferrer">

                        <div className="LearnButton">
                            <h2>Visit Good Always</h2>
                        </div>
                    </a>
                </div>
            </div>
            </Zoom>
        </div>
    );
}

export default GoodAlways;
