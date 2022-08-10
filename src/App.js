import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import './responsive.css'
import './scroll.css'
// import Advertisment from './advertisment'
import Navbar from './navbar';
import Manufacturing from './manufacturing';
import Editor from './editor';
import Twitter from './twitter';
import Vccpremium from './vccpremium';
import Upevent from './upevent';
import Maincards from './maincards';
// import { Infopartner, founder, tmt, techcircle, mergers, financial, vccpremium, upevents } from './data.js';
import { upevents } from './data.js';
import Vcctv from './vcctv';
import Input from './input';
import Morestories from './morestories';
import Upeventrespon from './upeventrespon';
import Footer from './footer';
import Loader from './loader';
// import Premium from './premium';
// import CardSlider from './cardslider';
// import Manufacturingtwo from './manufacturingtwo';

import Advertisment from './advertisment'



function App() {
  const [info, setInfo] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios.get("https://run.mocky.io/v3/25b66855-89a3-45a5-8db6-85fc85041185")
      .then(response => {
        console.log(response.data.section_list[0].stories_list)
        setInfo(response.data.section_list);
        setLoader(true)
      })
  }, [])


  return (<>
    <Navbar />
    {loader === false ? <Loader /> :
      <>
        <Advertisment img="./img/walk in kholer.png" width="100%" />
        {
          info.map((item, index) => {
            if (item.section_slug === "top-stories") {
              return (
                <Manufacturing item={item} />
              )

            }
            if (item.section_slug === "editors-pick") {
              return (<>
                <Editor item={item} />
                <Input />
                <Twitter />
              </>)
            }
            if (item.section_slug === "limited-partner") {
              return (<>
                <Maincards item={item} />
                <Advertisment img="./img/adv2.png" width="100%" />
              </>)
            }
            if (item.section_slug === "vccircle-premium") {
              return (<>
                <Vccpremium item={item} />
                <Upevent info={upevents} />
                <Upeventrespon />
              </>)
            }
            if (item.section_slug === "founders") {
              return (<>
                <Maincards item={item} />
                <Advertisment img="./img/adv2.png" width="100%" />
              </>)
            }
            if (item.section_slug === "most-popular") {
              return (<>
                <Editor item={item} />


              </>)
            }
            if (item.section_slug === "vcc-tv") {
              return (<>
                <Vcctv item={item} />
                <Advertisment img="./img/adv2.png" width="100%" />
              </>)
            }
            if (item.section_slug === "tmt") {
              return (<>
                <Maincards item={item} />

              </>)
            }
            if (item.section_slug === "financials") {
              return (<>
                <Maincards item={item} />
                <Advertisment img="./img/adv2.png" width="100%" />
              </>)
            }
            if (item.section_slug === "more-stories") {
              return (<>
                <Morestories item={item} />
              </>)
            }
            if (item.section_slug === "mergers-acquisitions") {
              return (<>
                <Maincards item={item} />
                {/* <Premium /> */}
                <Footer />
              </>)
            }
            return null;
          })
        }
      </>

    }
  </>
  );
}

export default App;
