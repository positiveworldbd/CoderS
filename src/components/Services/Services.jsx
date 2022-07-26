import React, { Component } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import ServiceOffer from './ServiceOffer'
import Data from '../../data/Services.json';

export class Index extends Component {

    render() {
        let serviceItem = [];

        serviceItem = Data.map((item, index) =><ServiceOffer key={index}  no= {item.no} serviceImg={item.serviceImg} serviceTitle={item.serviceTitle} serviceContent={item.serviceContent}/>);

        return (
            <section className="services-area pt-120 pb-90 bg-light" id="services">
                <div className="servicesItem">
                    <div className="container">

                        <SectionTitle SectionTitle="services" 
                                        description="As a Software Engineer, I offer a lot of services to my clients with a 100% satisfaction guarantee. Just find your desire and contact me."   
                        />

                        <div className="row">

                            {serviceItem}

                            <div className="loadMoreService text-center pt-50">
                                <a href="services.html" className="coder-btn dark-btn big-btn">load More</a>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        )
    }
}

export default Index