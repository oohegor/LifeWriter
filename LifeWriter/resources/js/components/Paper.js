import React, {useState} from 'react';
import useSound from "use-sound";

import enterMp3 from '../../../public/audio/enter.wav'
import backspaceMp3 from '../../../public/audio/backspace.wav'
import spaceMp3 from '../../../public/audio/space.wav'
import firstLettersSoundMp3 from '../../../public/audio/first_keyboard.wav'
import secondLettersSoundMp3 from '../../../public/audio/second_fourth_keyboard.wav'
import thirdLettersSoundMp3 from '../../../public/audio/third_keyboard.wav'

export default function Paper()
{
    const [silentMode, setSilentMode] = useState(false);
    const [isStandardKeyboardPressed, setIsStandardKeyboardPressed] = useState(0);
    const [eventNeedDelay, setEventNeedDelay] = useState(false);

    const [enter] = useSound(enterMp3);
    const [backspace] = useSound(backspaceMp3);
    const [space] = useSound(spaceMp3);
    const [firstKeyboard] = useSound(firstLettersSoundMp3);
    const [secondFourthKeyboard] = useSound(secondLettersSoundMp3);
    const [thirdKeyboard] = useSound(thirdLettersSoundMp3);

    const handleOnKeyDown = (e) => {
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

    // not next line text
    // @todo need refactor
    const [textareaValue, setTextarea] = useState({});

    const onPaste = (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        const elem = textareaValue;
        const clipboardData = ev.clipboardData || window.clipboardData;
        const pastedData = clipboardData.getData('Text');
        let index = elem.selectionStart;
        for (let i = 0; i < pastedData.length; i++) {
            const strChar = pastedData.charAt(i);
            elem.value = elem.value.slice(0, index) + strChar + elem.value.slice(index);
            if (textareaValue && elem.clientHeight < elem.scrollHeight) {
                elem.value = elem.value.slice(0, index) + elem.value.slice(index + 1);
                break;
            }
            index = index + 1;
        }
    }

    const handleTextareaChange = (ev) => {
        const elem = textareaValue;
        if (elem.clientHeight < elem.scrollHeight) {
            elem.value = elem.value.slice(0, elem.selectionStart - 1) + elem.value.slice(elem.selectionStart);
        }
    }
    // end of this block

    // @todo need separate paper functionality and edit buttons
    return (
        <div className="paper">
            <div className="paper__body">
                <textarea
                    onChange={handleTextareaChange}
                    onPaste={onPaste}
                    ref={textarea => {
                        setTextarea(textarea);
                        }}
                    onKeyDown={silentMode ? null : handleOnKeyDown}
                    type="text"
                />
                <span className="paper__number">1.</span>
            </div>
            <input
                type="checkbox"
                onChange={() => {
                    setSilentMode(!silentMode)
                    }}
            />
        </div>
    )
}
