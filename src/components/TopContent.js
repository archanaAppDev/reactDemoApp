import Wonderla from '../assets/wonderla.jpg';
import NandiHills from '../assets/nandi_hills.jpg';
import Iskcon from '../assets/isckon.jpeg';
import FunWorld from '../assets/fun_world.jpg';
import LalBagh from '../assets/lal_bagh.jpg';
import { TopContentCard } from './TopContentCard';
import { useState } from 'react';

export const TopContent = () => {

    const [topContent, isTohighlight] = useState([{ title: "Iskcon Bangalore", image: Iskcon, address: "Hare Krishna Hill, Chord Rd, Rajajinagar, Bengaluru, Karnataka 560010" },
    { title: "Nandi Hills", image: NandiHills, address: "Nandi Hills, Karnataka 562103" },
    { title: "Wonderla Amusement Park", image: Wonderla, address: "28th km, Mysore Rd, Bengaluru, Karnataka 562109" },
    { title: "Fun World", image: FunWorld, address: "Palace Grounds, Jayamahal Main Rd, opposite TV Tower, J.C.Nagar, Bengaluru, Karnataka 560006" },
    { title: "Lalbagh Botanical Garden", image: LalBagh, address: "Mavalli, Bengaluru, Karnataka 560004" }
    ]);

    function handleClick(index) {
        isTohighlight(topContent.map((content, i) => {
            if (i === index) {
                return { ...content, highlighted: !content.highlighted };
            }
            return content;
        }));
    }
    return (
        <section className="topContent">
            {topContent.map((content, index) => (
                <TopContentCard key={index} content={{ id: index, image: content.image, topContentTitle: content.title, address: content.address }} handleClick={() => handleClick(index)} />
            ))
            }
        </section>
    )
}
