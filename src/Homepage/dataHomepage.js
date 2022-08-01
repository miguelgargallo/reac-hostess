//primary insertion images
import iphone13pro from "../images/hero_iphone13pro_avail__iy77cld0zwii_medium_2x.jpg";
import iphoneSE from "../images/hero_iphonese_avail__eg8srhcnpo66_medium_2x.jpg";
import ipadAirTitle from "../images/promo_logo_ipadair__frwnnsqveeye_medium_2x.png";
import ipadAir from "../images/promo_ipadair_avail__ferd4bfpcdm6_medium_2x.jpg";

//grid insertion images
import developerConference from "../images/promo_wwdc_announce__dr6w8rxice4i_medium_2x.jpg";
import developerConferenceTitle from "../images/wwdc22_logo__f39kr8derwya_medium_2x.png";
import studioDisplay from "../images/promo_studiodisplay_avail__d1cx9j73ooq6_medium_2x.jpg";
import watchSeriesTitle from "../images/hero_logo_watch_lte__fy5faj6xg7m2_medium_2x.png";
import watchSeries from "../images/hero_watch_lte__b8er858e34gi_medium_2x.jpg";
import mothersDay from "../images/promo_mothersday__eddgvflf4ys2_large_2x.jpg";
import shiningGirlsTitle from "../images/promo_logo_shining_girls__cqmv34ixg4wi_large_2x.png";
import shiningGirls from "../images/promo_shining_girls__dcjn8g4xb2qa_large_2x.jpg";
import iPhone13 from "../images/promo_iphone13_avail__frc36u35m0ii_large_2x.jpg";
import appleTV from "../images/logo_light__cfvl40z2nzau_large_2x.png";

export const navbarItems = [

  {
    id: 2,
    linkUrl: "https://bcnhostess.com/alta",
    name: "Inscríbete",
    color: "#06c",
  },
  {
    id: 3,
    linkUrl: "https://bcnhostess.com/presupuesto/",
    name: "Presupuesto",
    color: "#06c",
  },
  {
    id: 4,
    linkUrl: "https://bcnhostess.com/conocenos/",
    name: "Conócenos",
    color: "#06c",
  },
  {
    id: 5,
    linkUrl: "https://bcnhostess.com/contacto/",
    name: "Contacto",
    color: "#06c",
  },
];

export const navbarItemsMobile = [
  
  {
    id: 2,
    linkUrl: "https://bcnhostess.com/alta",
    name: "Inscríbete",
    color: "#06c",
  },
  {
    id: 3,
    linkUrl: "https://bcnhostess.com/presupuesto/",
    name: "Presupuesto",
    color: "#06c",
  },
  {
    id: 4,
    linkUrl: "https://bcnhostess.com/conocenos/",
    name: "Conócenos",
    color: "#06c",
  },
  {
    id: 5,
    linkUrl: "https://bcnhostess.com/contacto/",
    name: "Contacto",
    color: "#06c",
  },
];

export const primaryInsertionItems = [
  {
    id: 1,
    pre: "",
    title: "iPhone 13 Pro",
    subtitle: "Oh. So. Pro.",
    imagePath: iphone13pro,
    dark: false,
  },
  {
    id: 2,
    pre: "The new",
    imageTitle: iphoneSE,
    title: "iPhone SE",
    subtitle: "Love the power. Love the price.",
    imagePath: iphoneSE,
    dark: false,
  },
  {
    id: 3,
    pre: "",
    title: "",
    imageTitle: ipadAirTitle,
    subtitle: "Light. Bright. Full of might.",
    imagePath: ipadAir,
    dark: true,
  },
];

export const gridInsertionItems = [
  {
    id: 1,
    pre: "",
    imageTitle: developerConferenceTitle,
    subtitle:
      "The Worldwide Developers Conference is coming. Join us online June sixth to tenth.",
    position: "end",
    color: "white",
    link1: "Learn more",
    imagePath: developerConference,
    widthImage: "50%",
  },
  {
    id: 2,
    pre: "",
    title: "Studio Display",
    subtitle: "A sight to be hold.",
    position: "start",
    color: "black",
    link1: "Learn more",
    link2: "Buy",
    imagePath: studioDisplay,
  },
  {
    id: 3,
    pre: "",
    imageTitle: watchSeriesTitle,
    subtitle: "It's our largest display yet.",
    position: "start",
    color: "black",
    link1: "Learn more",
    link2: "Buy",
    imagePath: watchSeries,
    widthImage: "40%",
  },
  {
    id: 4,
    pre: "",
    title: "iPhone 13",
    subtitle: "Your new superpower.",
    position: "start",
    color: "black",
    link1: "Learn more",
    link2: "Buy",
    imagePath: iPhone13,
  },
  {
    id: 5,
    pre: "Mother's Day",
    title: "Discover gifts that will make Mom's year.",
    position: "start",
    color: "black",
    link1: "Shop",
    imagePath: mothersDay,
  },
  {
    id: 6,
    preImage: appleTV,
    imageTitle: shiningGirlsTitle,
    subtitle: "Reality is a metter of perspective.",
    position: "end",
    color: "white",
    link1: "Stream now",
    linkColor: "white",
    imagePath: shiningGirls,
    widthImage: "60%",
  },
];
