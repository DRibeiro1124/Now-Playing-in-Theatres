import React, { Component } from 'react';

class CastMember extends Component {
    render() {
        const { castMember } = this.props
        return (
            <li className="cast-member"> 
                <strong>{castMember.name}</strong> as <strong>{castMember.character}</strong>
            </li>
        );
    }
}

export default CastMember;
