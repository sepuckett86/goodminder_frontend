import React from 'react';
import 'components/style/Intro.css';
import { Link } from 'react-router-dom';

export default () => {
  return(
    <main>
        <section id='callToAction' className='comfortaa'>
          <div id='outerDiv'>
            <div id='div1'>
              <div id='introMiddle'>
              <br />
              <h1 id='callHeader1'><div className='focusOnYou'><div>Focus on the Good</div></div>
                <hr />
              </h1>
              <h2 id='callHeader2'><span style={{backgroundColor: "white"}}>Goodminder</span> is a <b>free web-app</b> to catalogue ideas that make life worth living.
                <b> Collect</b> and <b>create</b> text meaningful to <b>you</b>.</h2>
                <br />
              <div className='followUp'>
                <br />
                <a id='followUpButton' href='#followUp'  className="btn btn-custom">Learn More</a>
              </div>
              <br />
              </div>
            </div>
            <div id='div2'>
            </div>
          </div>
        </section>
        <section id='followUp'>
          <div id='div3'>
            <div id='inspirationList' className="container">
              <ul>
                <li>Record positive life experiences to read at a later date.</li>
                <li>Collect inspiring sayings, quotes, snippets.</li>
                <li>Be inspired by prompts that help you remember what you live for.</li>
                <li>Create a personal random thought generator.</li>
                <li>Export all of your saved thoughts, including as a PDF that can be printed as a book.</li>
              </ul>
              <div>
                <div style={{flexDirection: 'row', display: 'flex', width: '100%', justifyContent: 'center'}}>
                  <a className='btn-small btn-left btn' href='/about' style={{minWidth: '20%'}}>
                    About
                  </a>
                  <a className='btn-small btn-center btn' href='/examples' style={{minWidth: '20%'}}>
                    Examples
                  </a>
                  <a className='btn-small btn-right btn' href='/FAQ' style={{minWidth: '20%'}}>
                    FAQ
                  </a>
                </div>
              </div>
              <br />
              <div>
                <Link to='/' id='pressMe' className="btn btn-custom">Get Started</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
  )
}
