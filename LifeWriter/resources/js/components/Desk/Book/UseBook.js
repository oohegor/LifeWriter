import React, {useEffect, useState} from 'react';
import useSound from "use-sound";
import enterMp3 from "../../../../../public/audio/enter.wav";
import backspaceMp3 from "../../../../../public/audio/backspace.wav";
import spaceMp3 from "../../../../../public/audio/space.wav";
import firstLettersSoundMp3 from "../../../../../public/audio/first_keyboard.wav";
import secondLettersSoundMp3 from "../../../../../public/audio/second_fourth_keyboard.wav";
import thirdLettersSoundMp3 from "../../../../../public/audio/third_keyboard.wav";

// it will have two sides. If user logged in then all logic happens on back side and on the contrary all logic will be here
// so that's why we don't actually need pageId

// yes we don\t need page id but all logic should be implemented on back side
/**
 * General logic.
 */
const keyLocalStorage = 'localStoredBook';

// [{id: 1, position: 0.000001, text: ''}]; instead of "if (!pages.length) {"
const defaultEmptyPage = [{id: 1, position: 0.000001, text: 'you write here'}];
//     [
//     {
//         id: 2,
//         position: 200000.000002,
//         text: 'Working with data: filtering, sorting, etc should be done outside of a hook, inside its own small functions (preferably pure functions and functional composition), because testing such functions is very easy.\n' +
//             'If you want to add more functionality to your component, like implementing “Add to Cart” button, you can create a new hook (something like useAddToCart() function) using the same principles. Don’t add it to the existing hook. Just create a new one. Pass parameters to a new hook if you need to use some value in it. Always separate responsibilities.\n' +
//             'With a separation like this, when errors happen it will be much easier to find source of bugs. We now have a better quality, cleaner code.\n' +
//             'You can reuse custom hooks and business logic in other components.\n' +
//             'You can reuse your presentational component with a different set of hooks with their own logic.\n' +
//             'Your app is easier to fix in case if your framework introduces breaking changes with a new update.\n' +
//             'You can move business logic to another framework if you decide to switch to Vue or Angular for example, since our business logic is framework agnostic now.\n' +
//             'Separating your code into business and implementation logic can work in all kinds of applications, like backend or game development, and is called framework agnostic.\n' +
//             'This is a small example, but imagine a big component with a lot of logic and it becomes clear why this approach is better than just gluing everything together.\n' +
//             'If you want to find out more about advantages this approach offers, I would recommend you to google articles about separation of concerns, framework agnostic applications, pure functions.',
//         pageOptions: {},
//     },
//     {
//         id: 1,
//         position: 100000.000001,
//         text: 'Checking if Array of Objects Includes Object\n' +
//             'some() Function\n' +
//             'When searching for an object, includes() checks whether the provided object reference matches the one in the array. This is rarely what we want, because objects can have identical fields with corresponding values but different references.\n' +
//             '\n' +
//             'We can use the some() method to search by object\'s contents. The some() method takes one argument accepts a callback, which is executed once for each value in the array until it finds an element which meets the condition set by the callback function, and returns true.\n' +
//             '\n' +
//             'Let\'s look at some() in action to understand it better:' +
//             'Array.indexOf() Function\n' +
//             'In cases where we need the exact location of the element we\'re looking for, we can use the indexOf(elem) method, which looks for elem in the specified array and returns the index of its first occurrence, and -1 if the array does not contain elem.\n' +
//             '\n' +
//             'When searching for an object, includes() checks whether the provided object reference matches the one in the array. This is rarely what we want, because objects can have identical fields with corresponding values but different references.\n' +
//             '\n' +
//             'We can use the some() method to search by object\'s contents. The some() method takes one argument accepts a callback, which is executed once for each value in the array until it finds an element which meets the condition set by the callback function, and returns true.\n' +
//             '\n' +
//             'Let\'s look at some() in action to understand it better:' +
//             'Array.indexOf() Function\n' +
//             'For example, we can look for the first occurrence of a grade in an array containing grades:' +
//             'First half of the code: what is happening here is that we are separating logic for setting message and increasing/decreasing item quantity(value) into small pure functions. It’s a lot easier to test, refactor and maintain your business logic when it’s not all tangled up with other things like network requests and DOM updates.\n' +
//             'Second half of the code: Only Implementation/framework logic is left here. useQuantitySelector() is a custom hook which does only state manipulations.\n' +
//             'Things you can do in React Hook:\n' +
//             'Encapsulate state changes\n' +
//             'In cases where we need the exact location of the element we\'re looking for, we can use the indexOf(elem) method, which looks for elem in the specified array and returns the index of its first occurrence, and -1 if the array does not contain elem.\n' +
//             '\n' +
//             'When searching for an object, includes() checks whether the provided object reference matches the one in the array. This is rarely what we want, because objects can have identical fields with corresponding values but different references.\n' +
//             '\n' +
//             'We can use the some() method to search by object\'s contents. The some() method takes one argument accepts a callback, which is executed once for each value in the array until it finds an element which meets the condition set by the callback function, and returns true.\n' +
//             '\n' +
//             'For example, we can look for the first occurrence of a grade in an array containing grades:' +
//             'First half of the code: what is happening here is that we are separating logic for setting message and increasing/decreasing item quantity(value) into small pure functions. It’s a lot easier to test, refactor and maintain your business logic when it’s not all tangled up with other things like network requests and DOM updates.\n' +
//             'Second half of the code: Only Implementation/framework logic is left here. useQuantitySelector() is a custom hook which does only state manipulations.\n' +
//             'Things you can do in React Hook:\n' +
//             'Encapsulate state changes\n' +
//             'Implement side effects (like dom manipulations, network requests etc) inside useEffect() function (or componentDidMount() in case of class components).\n' +
//             'Other framework related job\n',
//         pageOptions: {},
//     }
// ];

/**
 * Business logic. Pure, testable, atomic functions.
 */

/**
 * Returns a random number between min (exclusive) and max (exclusive)
 *
 * @param {int} min
 * @param {int} max
 * @return {int}
 */
const getRandomValueByRange = (min, max) => {
    min += 0.000000001;
    return Math.random() * (max - min) + min;
}

const sortPagesByPosition = (pages) => pages.sort((a, b) => a.position - b.position);

const getDataFromStorage = () => {
    let ifAuth = false;
    if (ifAuth) {
        // getDataFromDb axios get query
        return null;
    }

    let pages = JSON.parse(localStorage.getItem(keyLocalStorage)) ?? defaultEmptyPage;
    return sortPagesByPosition(pages);
}

const saveDataInStorage = (pages) => {
    localStorage.setItem(keyLocalStorage, JSON.stringify(pages));

    //    id: pages.length + 1,   // TODO here we will add id for pages

    //     // const packets = {
    //     //     firstname: this.state.firstname,
    //     //     lastname: this.state.lastname,
    //     //     email: this.state.email,
    //     //     phone: this.state.phone,
    //     //     NatID: this.state.ID,
    //     //     userLevel: this.state.userLevel,
    //     //     password: this.state.password
    //     // };
    //     // axios.post('/library', {book: bookData})
    //     //     .then(
    //     //         response => alert(JSON.stringify(response.data))
    //     //     )
    //     //     .catch(error => {
    //     //         console.log('ERROR:: ', error.response.data);
    //     //
    //     //     });
    //
    //     // axios.put(`/library/${bookData}`)
    //     //     .then(
    //     //         response => alert(JSON.stringify(response.data))
    //     //     )
    //     //     .catch(error => {
    //     //         console.log('ERROR:: ', error.response.data);
    //     //
    //     //     });
}

// const getPageById = (pages, id) => {
//     return pages.find(x => x.id === id);
// }

const getPageIndexByPosition = (position, pages) => {
    return pages.findIndex(page => page.position === position);
}

/**
 * Update pages.
 *
 * @param {int} position
 * @param {string} text
 * @param {Array} pages
 * @return {Object}
 */
const updatePage = (position, text, pages) => {
    let pageIndex = getPageIndexByPosition(position, pages);
    pages[pageIndex].text = text;

    return pages;
}

/**
 * Implementation/framework logic. Encapsulating state effects.
 *
 * @return {Object}
 */
const useBook = (silentMode) => {
    // ------------------------------------------------
    // ----------------- Typing sound -----------------
    // ------------------------------------------------
    const [queueNumber, setQueueNumber] = useState(1);
    const [soundNeedDelay, setSoundNeedDelay] = useState(true);

    const [enter] = useSound(enterMp3);
    const [backspace] = useSound(backspaceMp3);
    const [space] = useSound(spaceMp3);
    const [firstKeyboard] = useSound(firstLettersSoundMp3);
    const [secondFourthKeyboard] = useSound(secondLettersSoundMp3);
    const [thirdKeyboard] = useSound(thirdLettersSoundMp3);

    const soundMap = new Map();
    soundMap.set('Enter', () => {
        if (soundNeedDelay) {
            enter();
            setDelayForSound(700);
        }
    });
    soundMap.set('Backspace', () => {
        if (soundNeedDelay) {
            backspace();
            setDelayForSound(100);
        }
    });
    soundMap.set('Space', () => space());
    soundMap.set('DefaultSoundInQueue', () => {
        if (queueNumber === 1) {
            firstKeyboard();
        } else if (queueNumber === 2 || queueNumber === 4) {
            secondFourthKeyboard();
        } else if (queueNumber === 3) {
            thirdKeyboard();
        }

        if (queueNumber === 4) {
            setQueueNumber(1);
        } else {
            setQueueNumber(queueNumber + 1);
        }
    });

    const noSoundKeys = [
        'Tab', 'CapsLock', 'ContextMenu',
        'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight',
        'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    ];

    const setDelayForSound = (delayTime = 400) => {
        setSoundNeedDelay(false);

        setTimeout(() => {
            setSoundNeedDelay(true);
        }, delayTime);
    }

    const handleOnKeyDown = (event) => {
        if (silentMode || noSoundKeys.includes(event.code)) {
            return;
        }

        if (soundMap.has(event.code)) {
            soundMap.get(event.code)();
        } else {
            soundMap.get('DefaultSoundInQueue')();
        }
    };
    // ------------------------------------------------
    // --------------- End typing sound ---------------
    // ------------------------------------------------

    // ------------------------------------------------
    // -------------- Textarea processing -------------
    // ------------------------------------------------

    const [pages, setPages] = useState([]);

    // Construct page data on init app
    useEffect(() => {
        setPages(getDataFromStorage());
    }, []);

    const handleTextareaChange = (position, text) => {
        let updatedPages = updatePage(position, text, pages);
        setPages(updatedPages);

        saveDataInStorage(updatedPages);
    }

    // all these add delete page functionality I need to do on back side, or I will die
    const addPage = (pagePosition) => {
        let index = getPageIndexByPosition(pagePosition, pages);
        let frontPart = pages.slice(0, index + 1);
        let lastPart = pages.slice(index + 1);

        let newPagePosition = getRandomValueByRange(
            pages[index].position,
            pages[index + 1]?.position ?? pages[index].position + 1000000
        );

        let updatedPages = [...frontPart, {
            position: newPagePosition,
            text: '',
        }, ...lastPart];

        setPages(updatedPages);
        saveDataInStorage(updatedPages);
    }

    const deletePage = (pagePosition) => {
        if (pages.length === 1) {
            return;
        }

        let index = getPageIndexByPosition(pagePosition, pages);
        let frontPart = pages.slice(0, index);
        let lastPart = pages.slice(index + 1);
        let updatedPages = [...frontPart, ...lastPart];

        setPages(updatedPages);
        saveDataInStorage(updatedPages);
    }

    // maybe it doesn't need because of automatic save machine
    // and it can be export to file function
    // OR IT SHOULDN't be here - this is TOOL button
    const saveData = () => {
        // just save all pages
        // saveDataInStorage(pages);
    }

    return {pages, handleOnKeyDown, handleTextareaChange, addPage, deletePage};
}

export default useBook;
