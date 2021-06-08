import React, {useState} from 'react';

const Page = ({positionIndex, text, number, handleOnKeyDown, handleTextareaChange, addPage, deletePage}) => {
    const [open, setOpen] = useState(false);

    const selfClosingAssistant = (openState, needCheckTime) => {
        setOpen(openState);

        setTimeout(() => {
            setOpen(false);
        }, needCheckTime);
    }

    return (
        <div className='page'>
            <div className='page__body'>
                <textarea className='page__textarea'
                          type='text'
                          defaultValue={text}
                          onKeyDown={handleOnKeyDown}
                          onChange={(event) => handleTextareaChange(positionIndex, event.target.value)}
                />
                <span className='page__number'>{number}</span>

                <div className="page__manager">
                    <div onClick={() => selfClosingAssistant(!open, 6000)}
                         className={`page__manager_icon ${open ? 'active' : ''}`}>
                        <div className="page__manager_icon_block page__manager_icon_block_1">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="page__manager_icon_block page__manager_icon_block_2">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={`page__manager_buttons ${open ? 'active' : ''}`}>
                        <button className="page__manager_btn" onClick={() => addPage(positionIndex)}>Add new page</button>
                        <button className="page__manager_btn" onClick={() => deletePage(positionIndex)}>Delete this page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page;
