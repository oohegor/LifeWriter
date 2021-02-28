import React, {useState} from 'react';
import useSound from "use-sound";

import enterMp3 from '../../../public/audio/enter.wav'
import backspaceMp3 from '../../../public/audio/backspace.wav'
import spaceMp3 from '../../../public/audio/space.wav'
import firstLettersSoundMp3 from '../../../public/audio/first_keyboard.wav'
import secondLettersSoundMp3 from '../../../public/audio/second_fourth_keyboard.wav'
import thirdLettersSoundMp3 from '../../../public/audio/third_keyboard.wav'

export default function AllClipboard()
{
    const [isStandardKeyboardPressed, setIsStandardKeyboardPressed] = useState(0);
    const [eventNeedDelay, setEventNeedDelay] = useState(false);

    const [enter] = useSound(enterMp3);
    const [backspace] = useSound(backspaceMp3);
    const [space] = useSound(spaceMp3);
    const [firstKeyboard] = useSound(firstLettersSoundMp3);
    const [secondFourthKeyboard] = useSound(secondLettersSoundMp3);
    const [thirdKeyboard] = useSound(thirdLettersSoundMp3);

    const handleOnKeyDown = (e) => {
        console.log('type =>', e);

        switch (e.code) {
            case 'Enter':
                if (!eventNeedDelay) {
                    setEventNeedDelay(true);
                    enter();

                    setTimeout(() => {
                        setEventNeedDelay(false);
                    }, 700);
                }
                break;

            case 'Backspace':
                if (!eventNeedDelay) {
                    setEventNeedDelay(true);
                    backspace();

                    setTimeout(() => {
                        setEventNeedDelay(false);
                    }, 100);
                }
                break;

            case 'Space':
                space();
                break;

            case 'Tab':
            case 'CapsLock':
            case 'ShiftLeft':
            case 'ShiftRight':
            case 'ControlLeft':
            case 'ControlRight':
            case 'AltLeft':
            case 'AltRight':
            case 'ContextMenu':
            case 'F1':
            case 'F2':
            case 'F3':
            case 'F4':
            case 'F5':
            case 'F6':
            case 'F7':
            case 'F8':
            case 'F9':
            case 'F10':
            case 'F11':
            case 'F12':
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                // without sound
                break;

            default:
                if (isStandardKeyboardPressed === 0) {
                    firstKeyboard();
                    setIsStandardKeyboardPressed(1);
                } else if (isStandardKeyboardPressed === 1) {
                    secondFourthKeyboard();
                    setIsStandardKeyboardPressed(2);
                } else if (isStandardKeyboardPressed === 2) {
                    thirdKeyboard();
                    setIsStandardKeyboardPressed(3);
                } else if (isStandardKeyboardPressed === 3) {
                    secondFourthKeyboard();
                    setIsStandardKeyboardPressed(0);
                }
                break;
        }
    };

    const temporaryStyle = {
        width: '80%',
        size: '20px',
        backgroundColor: "lightPink",
        padding: "20px",
        fontFamily: "Arial",
        textAlign: "center"
    };

    return (
        <div style={{minHeight: '150px'}}>
            <p>
                <strong>Keyboard Event</strong>
            </p>
            <textarea
                onKeyDown = {handleOnKeyDown}
                style={temporaryStyle}
                defaultValue='onKeyPress event - write here something'
                rows={4}
                cols={50}
            />
            <br/>
            <input
                onChange={() => {setEventNeedDelay(!eventNeedDelay)}}
                type="checkbox"
            />
            {eventNeedDelay ?
                (<p>
                    <span>key not pressed</span>
                </p>) : null
            }
        </div>
    )
}
