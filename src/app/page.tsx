import Hero from './components/Hero'
import Popular from './components/Popular'
import TopPicks from './components/TopPicks'
import Arrivals from './components/Arrivals'
import OurBlogs from './components/OurBlogs'
import Instagram from './components/Instagram'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
     <Hero/>
     <Popular/>
     <TopPicks/>
     <Arrivals/>
     <OurBlogs/>
     <Instagram/>
    {/* <Link href={`/product/1`} ><p>Hello</p></Link> */}
    
    </main>
  )
}
