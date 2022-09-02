import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import './responsive.css'
import './scroll.css'
import './skeleton.css'
// import Advertisment from './advertisment'
import Navbar from './navbar';
import Manufacturing from './manufacturing';
import Editor from './editor';
import Twitter from './twitter';
import Vccpremium from './vccpremium';
import Upevent from './upevent';
import Maincards from './maincards';
import { upevents } from './data.js';
import Vcctv from './vcctv';
import Input from './input';
import Morestories from './morestories';
import Upeventrespon from './upeventrespon';
import Footer from './footer';
import Skeleton from './skeleton';
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
    {/* <Skeleton /> */}
    {loader === false ? <Skeleton /> :
      <>

        <Advertisment img="./img/walk in kholer.png" width="100%" />
        {
          info.map((item, index) => {
            if (item.section_slug === "top-stories") {
              return (
                <>
                  <Manufacturing item={item} />
                  {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
                </>
              )

            }
            if (item.section_slug === "editors-pick") {
              return (<>
                <Editor item={item} />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
                <Input />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
                <Twitter />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}


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


              </>)
            }
            if (item.section_slug === "limited-partner") {
              return (<>
                <Maincards item={item} />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
                <Advertisment img="./img/adv2.png" width="100%" />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
              </>)
            }
            if (item.section_slug === "vccircle-premium") {
              return (<>
                <Vccpremium item={item} />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
                <Upevent info={upevents} />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
                <Upeventrespon />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
              </>)
            }
            if (item.section_slug === "founders") {
              return (<>
                <Maincards item={item} />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
                <Advertisment img="./img/adv2.png" width="100%" />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
              </>)
            }
            if (item.section_slug === "most-popular") {
              return (<>
                <Editor item={item} />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}


              </>)
            }
            if (item.section_slug === "vcc-tv") {
              return (<>
                <Vcctv item={item} />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
                <Advertisment img="./img/adv2.png" width="100%" />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
              </>)
            }
            if (item.section_slug === "tmt") {
              return (<>
                <Maincards item={item} />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}

              </>)
            }
            if (item.section_slug === "financials") {
              return (<>
                <Maincards item={item} />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
                <Advertisment img="./img/adv2.png" width="100%" />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
              </>)
            }
            if (item.section_slug === "more-stories") {
              return (<>
                <Morestories item={item} />
                {item.section_border === "1" ? <div className='big_container'><hr className=' line_brder' /></div> : null}
              </>)
            }
            if (item.section_slug === "mergers-acquisitions") {
              return (<>
                <Maincards item={item} />

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
