'use strict';

import React from 'react';
import {
    Link,
} from 'react-router';

import data from '../data/team-members';
import TeamMember from './TeamMember';

class IndexPage extends React.Component {
    render() {
        return (
            <div className="team-members">
                {data.map(
                    (teamMember, i) => (
                        <Link
                            className="team-member__preview"
                            key={i}
                            to={`/team-members/${teamMember.name}`}
                        >
                            <TeamMember {...teamMember}/>
                        </Link>
                    )
                )}
            </div>
        );
    }
}

export default IndexPage;
