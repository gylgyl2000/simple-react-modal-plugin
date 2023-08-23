import { useState } from "react"
import { HrnetModal } from "./lib"
import styled from 'styled-components'

export default function App() {
    const [openModal, setOpenModal] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const handleMouseEnter = () => setIsHover(true)
    const handleMouseLeave = () => setIsHover(false)
    const handleModal = () => setOpenModal((toggle) => !toggle)
    const handleOkButtonAction = () => console.log('Dispatch a function on submit')

    const hrnetModalMessage = 'Employee successfully created!'

    return (
        <BodyMain>
            <HomeButton
                style={{
                    backgroundColor: isHover ? '#25b3f5' : '#169de0'
                }}
                onClick={(e) => handleModal(e)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Open modal
            </HomeButton>

            <HrnetModal
                open={openModal}
                setOpen={setOpenModal}
                title={''}
                titleColor={''}
                message={hrnetModalMessage}
                backdropBg={'rgba(15,19,26,.8)'}
                modalBg={'#292d33'}
                xCloseColor={'#a4a9b3'}
                modalWidth={'400'}
                okButton={true}
                okButtonColor={'#fff'}
                okButtonColorHover={'#fff'}
                okButtonBg={'#169de0'}
                okButtonBgHover={'#25b3f5'}
                okButtonAction={handleOkButtonAction}
                cancelButton={true}
                cancelButtonColor={'#a4a9b3'}
                cancelButtonColorHover={'#e9ebf0'}
                cancelButtonBg={'transparent'}
                cancelButtonBgHover={'#5c6066'}
            />
        </BodyMain>
    )
}

const BodyMain = styled.main`
    margin: 20vh auto;
    text-align: center;
`
const HomeButton= styled.button`
    align-items: center;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-size: 14px;
    font-weight: 400;
    justify-content: center;
    line-height: 20px;
    margin-bottom: 0;
    overflow: hidden;
    padding: 8px 12px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color .15s ease-out;background-color .15s ease-out;
    user-sselect: none;
    vertical-align: middle;
    white-space: nowrap;
`