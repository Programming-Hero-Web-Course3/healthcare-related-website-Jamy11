import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

const Banner = () => {
    return (
        <div id='home'>
            <Carousel>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={`/images/1.jpg`}
                        alt="First slide"
                        fluid />
                    <Carousel.Caption className='text-black'>
                        <h3>Dr. Silia Goldson</h3>
                        <p>Dr. Silia Goldsen, MD is a Internal Medicine Specialist in Brooklyn, NY.  She is accepting new patients.  Be sure to call ahead with Dr. Goldsen to book an appointment.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={`/images/2.jpg`}
                        alt="Second slide"
                        fluid />

                    <Carousel.Caption className='text-black'>
                        <h3>Dr. Chang Lee</h3>
                        <p>Dr. Chang Lee	is	a	graduate	of	Villanova
                            University.	He	obtained	his	medical	degree	at	Thomas	Jefferson	University	in
                            Philadelphia.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={`/images/3.jpg`}
                        alt="Third slide"
                        fluid />

                    <Carousel.Caption className='text-black'>
                        <h3>Dr. Omer Jamy</h3>
                        <p>Assistant professor and specialist in Hematology Oncology at Norther California Capital Hospital</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner