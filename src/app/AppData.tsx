import profile from './assets/profile.png';

import { faFacebookMessenger, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export class HeroData {
    public static readonly profile = profile
    public static readonly profile_alt = "Lowi Adrian Colinares"
    public static readonly full_name = HeroData.profile_alt
    public static readonly title = "Android Developer"
    public static readonly description = "A passionate, skilled, and motivated Software Developer based in Taytay, Rizal, PH\nwith 5 years experience in building Native Android applications."

    public static readonly socials = [
        { link: "http://m.me/Lh0w1e", icon: faFacebookMessenger },
        { link: "https://www.instagram.com/lacolinares/", icon: faInstagram },
        { link: "https://www.linkedin.com/in/lacolinares/", icon: faLinkedin },
        { link: "https://github.com/la-colinares", icon: faGithub },
    ]
}

export class ProjectsData {
    public static readonly projects = 'Projects'
}