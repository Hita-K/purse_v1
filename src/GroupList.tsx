import React, {Component} from "react";
import {Group} from "./Group";

export class GroupList extends Component<{}, GroupListState> {
    constructor(props: any, group_number: number) {
        super(props);
        this.state = {
            id : "group B",
            groups : [new Group(this.props, "A")]
        }
    }

    addGroup(group : Group) {
        this.state.groups.push(group);
    }

    createGroups(group_num : number) {
        //
    }

    getGroups() {
        var index;
        var a = []
        for (index = 0; index < this.state.groups.length; ++index) {
            a[index] = <ul>{this.state.groups[index].render()}</ul>
        }

        return a
    }

    render() {
        return (
            <div className="GroupList">
                <div>{this.getGroups()}</div>
            </div>
        );
    }
}

interface GroupListState {
    id: string,
    groups: Group[]
}