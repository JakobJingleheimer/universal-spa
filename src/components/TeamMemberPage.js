'use strict';

import React from 'react';
import {
    Link,
} from 'react-router';

import data from '../data/team-members';
import TeamMember from './TeamMember';

class TeamMemberPage extends React.Component {
    render() {
        const name = this.props.params.name;
        const teamMember = data.filter(teamMember => teamMember.name === name)[0];

        if (!teamMember) return;

        return (
            <TeamMember {...teamMember} />
        );
    }
}

export default TeamMemberPage;
