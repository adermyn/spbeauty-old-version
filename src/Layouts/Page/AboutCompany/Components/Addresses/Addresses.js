import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='col d-inline-flex flex-column gap-4 m-4 p-4 justify-content-between BorderAdresses'>
            <div className='title d-inline-flex flex-column gap-4'>Адреса заведений
                <ListElement className='m-1'>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}

export default Addresses;