'use strict';

import React from 'react';

class TeamMember extends React.Component {
    render() {
        const props = this.props;
        const name = props.name;

        return (
            <div
                className="team-member"
            >
                <img
                    src={`http://placehold.it/300/555555/EA882E?text=${name}`}
                />
                <h3 className="team-member__name">{name}</h3>
                <h4 className="team-member__job-title">{props.jobTitle}</h4>
            </div>
        );
    }
};

export default TeamMember;
