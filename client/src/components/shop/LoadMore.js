import React from 'react'

const LoadMore = (props) => {
    const { filterss, cates } = props;
    const [pages, setPages] = filterss.page
    const [results, setResults] = filterss.result
    return (
        <nav aria-label="..." className="mx-auto container">
            <ul className="pagination mt-5">
                {

                    results > pages * 9 ? ""
                        : <li className="page-item ">
                            <a className="page-link" href="#" tabIndex={-1} onClick={() => setPages(pages - 1)}>Previous</a>
                        </li>


                }

                {

                    results > pages * 9 ? ""
                        : <li className="page-item active"><a className="page-link" href="#" onClick={() => setPages(pages - 1)}>1</a></li>


                }
                {

                    results < pages * 9 ? ""
                        : <li className="page-item"><a className="page-link" href="#" onClick={() => setPages(pages + 1)}>2</a></li>

                }
                {

                    results > pages * 9 ? ""
                        : <li className="page-item">
                            <a className="page-link" href="#" onClick={() => setPages(pages + 1)}>Next</a>
                        </li>


                }
            </ul>
        </nav>
    )
}

export default LoadMore
