/*
Defines Group and Member objects within context of group builder
 */

import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export class Group extends Component<{}, GroupState> { // representation of participant groupings
    constructor(props: any, name: string) {
        super(props);
        this.state = {
            group_name: name, // unique ID
            group_id: 0,
            group_size: 0,
            members: [new Member(this.props)] //array of members assigned to group
        };
    }

    removeGroup() {

    }
    render() {
        return (
            <div className="boxed">
                <p>{this.state.group_name}</p>
                <div>
                    <button onclick="removeGroup()"><FontAwesomeIcon icon={faMinus}/></button>
                </div>
            </div>
        );
    }
}

interface GroupState {
    group_name: string,
    group_id: 0,
    group_size: 0,
    members: [Member]
}

export class Member extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            assessment : true, // boolean indicating accordance to selection criteria
            first_name : "John",
            last_name : "Doe",
            group_assignment : 0
        };
    }
}