import React from 'react';
import './Detail.css'

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) { //location.state가 없는 경우 Home으로 이동
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const { year, title, summary, poster, genres, rating, runtime } = location.state
            return (
                <div className="detail">
                    <img src={poster} alt={title} title={title} />
                    <div className="detail__data">
                        <h3 className="detail__title">{title}</h3>
                        <h5 className="detail__year">{year}</h5>
                        <h5 className="detail__rating">{rating}/10.0</h5>
                        <h5 className="detail__runtime">{runtime}분</h5>
                        <ul className="detail__genres">
                            {genres.map((genre, index) => {
                                return <li key={index} >{genre}</li>
                            })}
                        </ul>
                        <p className="detail__summary">{summary}</p>
                    </div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default Detail