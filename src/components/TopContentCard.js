import { BoxCard } from "./BoxCard"
import { FaMapMarkerAlt } from 'react-icons/fa';
import './NotesCard.css'

export const TopContentCard = ({ content, onClick }) => {
    const openGoogleMaps = () => {
        const address = encodeURIComponent(content.address);
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
        window.open(mapsUrl, '_blank');
    };
    return (
        <li className="topContentCard">
            <div className="box wrapContent">
                <h2>{content.topContentTitle}</h2>
                <img src={content.image} alt={content.name} style={{ width: "200px", height: "150px" }} />
                <span className="icon-text" onClick={onClick}>
                    <FaMapMarkerAlt />
                    <p onClick={openGoogleMaps} className="topContentTitle">{content.address}</p>
                </span>
            </div>
        </li>
    )
}    
