import React, { Component } from 'react';
import CastMember from './CastMember'

class CastMemberList extends Component {
    render() {
        let isNotEmptyObject = Object.keys(this.props.castData).length
        if (isNotEmptyObject) {
            return (
                <ul className="cast-members">
                    {this.props.castData.cast.map((castMember, i) => {
                        if (i < 10) {
                            return (
                                <CastMember key={i} castMember={castMember} />
                            )
                        }
                        else {
                            //break
                        }
                    })}
                </ul>
            );
        }
        else {
            return <span>Loading...</span>
        }
    }
}

export default CastMemberList;
