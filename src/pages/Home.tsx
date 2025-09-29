// Home.tsx Conceptual Layout Page
import { Header } from '../components/layout/Header';
// import { Footer } from '../components/layout/Footer';
// import { Container } from '../components/layout/Container';

// Import all sections 
 import { Hero } from '@/sections/Hero';
// import { About } from '../sections/About';
// import { WhyChooseUs } from '../sections/WhyChooseUs';
// import { Services } from '../sections/Services';
// import { Team } from '../sections/Team';
// import { Testimonials } from '../sections/Testimonials';
// import { ConsultationForm } from '../sections/ConsultationForm';

export const Home = () => {
    return (
        <>
          <Header />

            {/* <main> */}
              {/* Hero is full-bleed */}
              <Hero />
            {/*  */}
              {/* Unified container for main narrative */}
              {/* <Container> */}
                {/* <div className="space-y-20">  */}
                  {/* <About /> */}
                  {/* <WhyChooseUs /> */}
                  {/* <Services /> */}
                  {/* <Team /> */}
                  {/* <Testimonials /> */}
                {/* </div> */}
              {/* </Container> */}
            {/*  */}
              {/* Strong full-width CTA */}
              {/* <ConsultationForm /> */}
            {/* </main> */}
{/*  */}
            {/* <Footer /> */}
        </>
    )
}