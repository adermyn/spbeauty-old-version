import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 216px;
`;

const Input = styled.input`
    outline: none;
    border-radius: 0px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    border-radius: 24px;
    color: #E2E8F0;
    width: 100%;
    padding: 8px 16px;
    &:hover {
        background: #F8FAFC;
    }
    &:focus {
        background: white;
    }
`;

const SearchIconWrapper = styled.div`
    position: absolute;
    box-sizing:border-box;
    border-radius: 24px;
    right: 5px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    top:50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  {/* Устанавливает ширину поля и включает относительное положение */}
            <Input className='p-2' placeholder='Найти'/>
            <SearchIconWrapper className='p-2'>  {/* Устанавливает абсолютное положение внутри поля ввода */}
                <IconOnlyButton icon={<SearchIcon/>}/>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;