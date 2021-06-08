import React from 'react';
import Page from './Page';
import useBook from './UseBook';

const Book = ({silentMode}) => {
    const {pages, handleTextareaChange, handleOnKeyDown, addPage, deletePage} = useBook(silentMode);

    const makePagination = (pages) => {
        let pageNumber = 1;

        return pages.map((page) => {
            return <Page
                key={page.position}
                positionIndex={page.position}
                text={page.text}
                number={pageNumber++}
                handleTextareaChange={handleTextareaChange}
                handleOnKeyDown={handleOnKeyDown}
                addPage={addPage}
                deletePage={deletePage}
            />
        })
    }

    return (
        <div className='book'>
            {makePagination(pages)}
        </div>
    )
}
export default Book;
