import profile from './assets/profile.png';

import { faFacebookMessenger, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import rageMockup from './assets/projects/rage_music.png';
import jetpicMockup from './assets/projects/jetpic.png';

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
    public static readonly projects_title = 'Projects'

    public static readonly projects = [
        { image: rageMockup, title: 'Rage Media Station', link: 'https://play.google.com/store/apps/details?id=com.lacolinares.ragemusicph'},
        { image: jetpicMockup, title: 'Jetpic Express', link: 'https://github.com/la-colinares/JetPicExpress'},
    ]
}