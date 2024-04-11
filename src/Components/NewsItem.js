import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://i.cbc.ca/1.6883244.1687368875!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/toronto-trudeau-20190904.jpg" className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description}
                </p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>

        </div>

    )
  }
}

export default NewsItem