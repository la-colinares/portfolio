import React from 'react';
import { HeroData } from '../../AppData';
import '../../scss/partial/_hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function index() {
    const socials = HeroData.socials;

    return (
        <section>
            <img src={HeroData.profile} alt={HeroData.profile_alt} className="profile" />
            <h1 className="hero-name">{HeroData.full_name}</h1>
            <h3 className="hero-title">{HeroData.title}</h3>
            <p className="hero-description">{HeroData.description}</p>
            <div className="hero-social">
                <ul>
                    {
                        socials && socials.map((social, index) =>
                            <li key={index}>
                                <a href={social.link} className="social-link" target="_blank">
                                    <FontAwesomeIcon className="social-icon" icon={social.icon} />
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}
