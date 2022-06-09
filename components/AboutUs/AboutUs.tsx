import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import { Vision, Mission, Story, Founder } from '../../import/importAssets'
import './AboutUs.module.css'
const AboutUs = () => {
    return (
        <Container>
            <div className="my-6 justify-content-center">
                <div className="my-3 d-flex border border-black">
                    <div className="col-md-8 col-lg-6">
                        <h1 className='text-primary text-opacity-75'>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam laudantium ut saepe laboriosam est iusto vitae hic consequuntur, possimus temporibus natus consequatur. Velit saepe voluptatem illo dolor, aperiam itaque.</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illum quibusdam culpa doloremque sit consequatur, hic alias nulla optio aspernatur rerum, ut dolorem dolor voluptatem accusantium, debitis aperiam harum rem?</p>
                    </div>
                    <div className="col-md-5 col-lg-6 d-none d-lg-block">
                        <Image src={Story} alt="Story" className="side-image img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                    </div>
                </div>

                <div className="my-3 d-flex border border-black">
                    <div className="col-md-3 col-lg-6">
                        <h1 className='text-primary text-opacity-75'>Vision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam laudantium ut saepe laboriosam est iusto vitae hic consequuntur, possimus temporibus natus consequatur. Velit saepe voluptatem illo dolor, aperiam itaque.</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illum quibusdam culpa doloremque sit consequatur, hic alias nulla optio aspernatur rerum, ut dolorem dolor voluptatem accusantium, debitis aperiam harum rem?</p>
                    </div>
                    <div className="col-md-3 col-lg-6 d-none d-lg-block">
                        <Image src={Vision} alt="Vision" className="side-image img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                    </div>
                </div>

                <div className="my-3 d-flex border border-black">
                    <div className="col-md-3 col-lg-6">
                        <h1 className='text-primary text-opacity-75'>Mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam laudantium ut saepe laboriosam est iusto vitae hic consequuntur, possimus temporibus natus consequatur. Velit saepe voluptatem illo dolor, aperiam itaque.</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illum quibusdam culpa doloremque sit consequatur, hic alias nulla optio aspernatur rerum, ut dolorem dolor voluptatem accusantium, debitis aperiam harum rem?</p>
                    </div>
                    <div className="col-md-3 col-lg-6 d-none d-lg-block">
                        <Image src={Mission} alt="Vision" className="side-image img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                    </div>
                </div>

                <div className="my-3 d-flex border border-black">
                    <div className="col-md-3 col-lg-6">
                        <h1 className='text-primary text-opacity-75'>Executives</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam laudantium ut saepe laboriosam est iusto vitae hic consequuntur, possimus temporibus natus consequatur. Velit saepe voluptatem illo dolor, aperiam itaque.</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illum quibusdam culpa doloremque sit consequatur, hic alias nulla optio aspernatur rerum, ut dolorem dolor voluptatem accusantium, debitis aperiam harum rem?</p>
                    </div>
                    <div className="col-md-3 col-lg-6 d-none d-lg-block">
                        <Image src={Founder} alt="Vision" className="side-image img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default AboutUs