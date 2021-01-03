import React from 'react';

const Show = (props) => {
    return (
        <>
            <p className="info">{props.info?`About ${props.info.totalResults} results (${props.info.searchTime})`:""}</p>
            {props.result.length > 0 ? (props.result.map((res)=>(
                <div className="card">
                    <div className="card_detail">
                        <div className="card_link">
                            <a href={res.link}>
                                <p> {res.displayLink}</p>
                            </a>
                        </div>
                        <div className="card_title">
                            <a href={res.link}>
                                <p>{res.title}</p>
                            </a>
                        </div>
                        <div className="card_disc">
                            <p>{res.snippet}</p>
                        </div>

                    </div>
                </div>
            ))
            ) : ""}
        </>
    )
}
export default Show;