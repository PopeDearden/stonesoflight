import '../../App.scss'
import Zoom from 'react-reveal/Zoom';

function Mission() {
  return (
    <div className="Mission">
      <Zoom >
        <div className="Bubble">
          <img id="BubbleImg" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/DSC0093_2.jpg?v=1610162425" alt="Impoverished children need education">
          </img>
          <div className="TextBox">
            <h2><b id="highlight">Impoverished children in</b> rural <b id="highlight">Guatemala</b> don't have an opportunity to recieve an education...</h2>
          </div>
          {/* <a href="https://checkout.square.site/merchant/WFJDHKBHCFDKF/checkout/3NBHFIZQ4XMHWIJV65M25T54" target="_blank" rel="noreferrer">

            <div className="DonateButton">
              <h2>
                Donate
              </h2>
            </div>
          </a> */}
        </div>
        <div className="Arrow">

        </div>
        <div className="Bubble">
          <img id="BubbleImgTwo" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/colegio_tablets.png?v=1610163675">

          </img>
          <a href="https://colegiodelfuturo.com/" target="_blank" rel="noreferrer">

            <div className="LearnButton">
              <h2>Learn More</h2>
            </div>
          </a>
          <div className="TextBox">
            <h2>We provide these children with a <b id="highlight">high quality online education</b> through Colegio Del Futuro using a tablet or smartphone.</h2>
          </div>
        </div>
        <div className="Arrow">

        </div>
        <div className="Bubble">
          <img id="BubbleImgThree" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/NXL_7906.png?v=1610166307">

          </img>
          <div className="TextBox">
            <h2>We can only do this with your help! <b id="highlight">You can make a difference</b> in a child's life today!</h2>
          </div>
          {/* <a href="https://checkout.square.site/merchant/WFJDHKBHCFDKF/checkout/3NBHFIZQ4XMHWIJV65M25T54" target="_blank" rel="noreferrer">

            <div className="DonateButton">
              <h2>
                Donate
              </h2>
            </div>
          </a> */}
        </div>

      </Zoom>

    </div>
  );
}

export default Mission;
