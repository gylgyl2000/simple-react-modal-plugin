import React, { useState } from "react"
import styled, { keyframes } from 'styled-components'

export default function HrnetModal({
    open,
    setOpen,
    title,
    titleColor,
    message,
    backdropBg,
    modalBg,
    xCloseColor,
    modalWidth,
    okButton,
    okButtonColor,
    okButtonColorHover,
    okButtonBg,
    okButtonBgHover,
    okButtonAction,
    cancelButton,
    cancelButtonColor,
    cancelButtonColorHover,
    cancelButtonBg,
    cancelButtonBgHover,

}) {
    const [isOkHover, setIsOkHover] = useState(false)
    const [isCancelHover, setIsCancelHover] = useState(false)
    const handleOkMouseEnter = () => setIsOkHover(true)
    const handleOkMouseLeave = () => setIsOkHover(false)
    const handleCancelMouseEnter = () => setIsCancelHover(true)
    const handleCancelMouseLeave = () => setIsCancelHover(false)
    const handleSubmit = () => {
        okButtonAction()
        setOpen((toggle) => !toggle)
    }
    
    return (
        <>
            {open ? (
                <StyleBody>
                    <Backdrop
                        aria-hidden='true'
                        style={{
                            backgroundColor: backdropBg
                        }}
                    >
                    </Backdrop>
                    <Wrapper>
                        <Modal
                            id="dialog-:r1:"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="dialog-:r1:-title"
                            style={{
                                width: modalWidth + 'px'
                            }}
                        >
                            <Dialog role="document">
                                <ModalContent
                                    style={{
                                        backgroundColor: modalBg
                                    }}
                                >
                                    <ModalHeader>
                                        <ModalHeaderClose
                                            role="button"
                                            title="Close"
                                            aria-label="Close"
                                            onClick={() => setOpen((toggle) => !toggle)}
                                            style={{
                                                color: xCloseColor
                                            }}
                                        >
                                            X
                                        </ModalHeaderClose>
                                        <ModalTitle
                                            id="dialog-:r1:-title"
                                            style={{
                                                color: titleColor
                                            }}
                                        >
                                            {title}
                                        </ModalTitle>
                                    </ModalHeader>
                                    <ModalBody>
                                        {message}
                                    </ModalBody>
                                    <ModalFooter>
                                        {okButton ? 
                                            <ModalBtn
                                                id='okButton'
                                                aria-label="Close Modal"
                                                type="button"
                                                onClick={handleSubmit}
                                                onMouseEnter={handleOkMouseEnter}
                                                onMouseLeave={handleOkMouseLeave}
                                                style={{
                                                    color: isOkHover ? okButtonColorHover : okButtonColor,
                                                    backgroundColor: isOkHover ? okButtonBgHover : okButtonBg
                                                }}
                                            >
                                                Ok
                                            </ModalBtn>
                                            : ''
                                        }
                                        {cancelButton ?
                                            <ModalBtn
                                                id='cancelButton'
                                                aria-label="Cancel Modal"
                                                type="button"
                                                onClick={() => setOpen((toggle) => !toggle)}
                                                onMouseEnter={handleCancelMouseEnter}
                                                onMouseLeave={handleCancelMouseLeave}
                                                style={{
                                                    color: isCancelHover ? cancelButtonColorHover : cancelButtonColor,
                                                    backgroundColor: isCancelHover ? cancelButtonBgHover : cancelButtonBg
                                                }}
                                            >
                                                Cancel
                                            </ModalBtn>
                                            : ''
                                        }
                                    </ModalFooter>
                                </ModalContent>
                            </Dialog>
                        </Modal>
                    </Wrapper>
                </StyleBody>
            ) : null}
        </>
    )
}

const StyleBody = styled.div`
    color: #e9ebf0;
    font-family: Apple-System,Arial,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,STXihei,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
`
const Backdrop = styled.div`
    pointer-events: unset;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1049;
`
const Wrapper = styled.div`
    margin: 20vh auto;
    height: 100%;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1050;
    outline: none;
`
const BounceIn = keyframes `
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`
const Modal = styled.div`
    display: block;
    margin: 20vh auto;
    max-width: calc(100% - 10px);
    outline: 0;
    overflow: visible;
    position: relative;
    z-zndex: 1050;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    animation-name: ${BounceIn};
    animation-timing-function: cubic-bezier(.68,-.55,.27,1.55);
`
const Dialog = styled.div``
const ModalContent = styled.div`
    border: none;
    border-radius: 6px;
    box-shadow: 0 4px 4px rgba(0,0,0,.12),0 0 10px rgba(0,0,0,.06);
    outline: 0;
    padding: 20px;
    position: relative;
`
const ModalHeader = styled.div`
    padding-right: 20px;
    & ::after {
        clear: both;
    }
    & ::after, ::before {
        content: " ";
        display: table;
    }
`
const ModalHeaderClose = styled.span`
    font-size: 12px;
    padding: 0;
    position: absolute;
    right: 20px;
    top: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    line-height: 1;
    outline: none !important;
`
const ModalTitle = styled.h4`
    display: block;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    text-align: left;
`
const ModalBody = styled.div`
    overflow: auto;
    max-height: 136px;
    margin-top: 20px;
    padding-bottom: 20px;
    position: relative;
    text-align: left;
`
const ModalFooter = styled.div`
    border-top: none;
    text-align: right;
    & ::after {
        clear: both;
    }
    & ::after, ::before {
        content: " ";
        display: table;
    }
`
const ModalBtn =styled.button`
    align-items: center;
    border: none;
    border-radius: 6px;
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
    transition: color .15s ease-out,background-color .15s ease-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
`