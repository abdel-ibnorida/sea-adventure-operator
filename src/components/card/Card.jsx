import './index.css'
import arrowIcon from '../../assets/icons/right-arrow-alt.svg'
const Card = ({data}) => {
    return (
        <div className='card'>
            <div className='price_boatTyoe'><span>{data.budget.value}{data.budget.currencyCode}</span>{data.budget.costType}</div>
            <div className='title'>{data.title}</div>
            <div className='container_departurePort'>
                <div className='departure'>
                    Partenza da
                    <span>{data.departure.Port}</span>
                </div>
                <div className='boat_Type'>
                    <span>{data.boatType}</span>
                    <span>{data.numberOfDays} giorni</span>
                </div>
            </div>
            <div className='container_date'>
                <span>{data.departureDate}</span>
                <img src={arrowIcon} alt="arrow_icon" />
                <span>{data.arrivalDate}</span>
            </div>
            <div className='container_reservations_info'>
                <span>{data.reservations} {data.reservationsType}</span>
                <span>Disponibilità:{data.reservationsAvailable}</span>
            </div>
            <button>Prenota</button>
        </div>
    )
}
export default Card;