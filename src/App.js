import './App.css';
import './responsive.css'
import './scroll.css'
import Advertisment from './advertisment'
import Navbar from './navbar';
import Manufacturing from './manufacturing';
import Editor from './editor';
import Twitter from './twitter';
import Vccpremium from './vccpremium';
import Upevent from './upevent';
import Maincards from './maincards';
import { Infopartner, founder, tmt, techcircle, mergers, financial, vccpremium, upevents } from './data.js';
import Vcctv from './vcctv';
import Input from './input';
import Morestories from './morestories';
import Upeventrespon from './upeventrespon';
// import CardSlider from './cardslider';


function App() {
  return (
    <div>
      <Navbar />

      <Manufacturing />

      <Editor head="Editor's pick" img="./img/editor.png" st={{ right: "57px" }} pre="PREMIUM" name="ECONOMY" txt="EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall" date="30 September" customer="Madhurima Nandy"

        reliance="./img/reliance.png" edpop1="FINANCE" edpop1txt="RIL invests Rs 7600 crores in acquisitions to strengthen retail arm"

        tmt="./img/tmt.png" edpop2="TMT" edpop2txt="Dailyhunt parent raises close to $28 mn at $3.1 bn valuation"

        daily="./img/daily.png" edpop3="CONSUMER" edpop3txt="Delivery race among Indian grocery startups brings road safety risks"

        ad="Advertisement" sudhir="./img/sudhir.png"

        style={{ backgroundColor: " #e3e3e3" }}

      />

      <Twitter />


      <Maincards heading="Limited Partner" info={Infopartner} />

      <div className='big_container'>
        <div className='res_display '>
          <div className='ed_pop res_ed_pop_sudhir'>
            <div className='ad_bg'>
              <h5 className='ad_head'>Advertisment</h5>
              <div className='ad_img'>
                <img src="./img/sudhir2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Advertisment img="./img/adv2.png" width="100%" />

      <Vccpremium info={vccpremium} />

      <Upevent info={upevents} />
      <Upeventrespon />

      <Maincards heading="Founders" info={founder} />

      <div className='big_container'>
        <div className='res_display '>
          <div className='ed_pop res_ed_pop_sudhir'>
            <div className='ad_bg'>
              <h5 className='ad_head'>Advertisment</h5>
              <div className='ad_img'>
                <img src="./img/sudhir2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Advertisment img="./img/adv2.png" width="100%" />

      <Editor head="Most Popular" img="./img/tmttruck.png" st={{ display: "none" }} name="TMT" txt="Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax" date="30 September" customer="Madhurima Nandy"

        reliance="./img/consumer$.png" edpop1="CONSUMER" edpop1txt="Consumer firm Madbow bags $2 mn funding at $13 mn valuation"

        tmt="./img/economypop.png" edpop2="ECONOMY" edpop2txt="Indian shares hit three-week lows in broad-based selling"

        daily="./img/manupop.png" edpop3="MANUFACTURING" edpop3txt="HDFC Capital marks initial close at $1.88 bn for its affordable housing fund 3"

        ad="Advertisement" sudhir="./img/sudhir.png"
        style={{ display: "none" }}
      />

      <Advertisment img="./img/adv2.png" width="100%" />

      <div className='big_container'>
        <div className='res_display '>
          <div className='ed_pop res_ed_pop_sudhir'>
            <div className='ad_bg'>
              <h5 className='ad_head'>Advertisment</h5>
              <div className='ad_img'>
                <img src="./img/sudhir2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Vcctv />

      <Maincards heading="TMT" info={tmt} />

      <Input />

      <Maincards heading="TechCircle" info={techcircle} />

      <Advertisment img="./img/adv2.png" width="100%" />

      <div className='big_container'>
        <div className='res_display '>
          <div className='ed_pop res_ed_pop_sudhir'>
            <div className='ad_bg'>
              <h5 className='ad_head'>Advertisment</h5>
              <div className='ad_img'>
                <img src="./img/sudhir2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Maincards heading2="Mergers & Acquisitions" info={mergers} className="mergers_desk_display" heading3="M&A" />

      {/* <Maincards heading="M&A" info={mergers} className="mergers_respons_display" /> */}

      <Maincards heading="Financial" info={financial} />

      <Morestories />


    </div>
  );
}

export default App;
