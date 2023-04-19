import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div className='m-5 gap-5'>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex justify-content-between gap-5 mt-5'>
                <General></General>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses></Addresses> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;