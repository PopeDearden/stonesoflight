import '../../App.scss'

function Contact() {
  return (
    <div className="Contact">
      <div className="Title">
        <h2>We want to hear from you!</h2>
        <p>Please don't hesitate to reach out!</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{margin: '20px', textAlign: 'center'}}>
            <strong>USA Contact:</strong>
            <p></p>
            <h3>Scott & Adriane Kim Hosking</h3>
            <p>Call or Text<br></br>
              435-851-4989</p>
            <p>
              62 East 200 South<br></br>
              Ephraim, Utah 84627</p>
          </div>
          <div style={{margin: '20px', textAlign: 'center'}}>
           
            <strong>Guatemala Contact:</strong>
            <p></p>
            <h3>Nixon Lima</h3>
            <p>Teléfono:<br/> (502) 5524-6675</p>
            <p>Lote 254-A, Barrio El Centro,<br/>
16013 Chisec, Alta Verapaz, Guatemala</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
