import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row justify-content-between align-self-stretch gap-2'>
            <Option className='flex-grow-1 me-5 mt-1 mb-1'>{props.children}</Option>
            <EditIcon></EditIcon>
            <RemoveIcon></RemoveIcon>
        </div>
    );
}

export default ListElement;