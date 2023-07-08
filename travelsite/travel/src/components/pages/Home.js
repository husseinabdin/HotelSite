import React from 'react'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import MostPopular from '../HomeSection/popular/MostPopular'
import Download from '../HomeSection/Download/Download'
import Works from '../HomeSection/work/Works'
import Gallery from '../HomeSection/gallery/Gallery'

const Home = () => {
  return (
    <div>
<Hero/>
<HomeAbout/>
<MostPopular/>
<DestinationHome/>
<Download/>
<Works/>
<Gallery/>
    </div>
  )
}

export default Home