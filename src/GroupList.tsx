import React, {Component} from "react";
import {Group} from "./Group";

export class GroupList extends Component<{}, GroupListState> {
    constructor(props: any, group_number: number) {
        super(props);
        this.state = {
            // groups : [new Group(this.props, "A"), new Group(this.props, "B")]
            groups : [new Group(this.props, "A")],
            groupA : new Group(this.props, "A"),
            groupB : new Group(this.props, "B")
        }
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
                <ul>{this.state.groupA.render()}</ul>
                <ul>{this.state.groupB.render()}</ul>
                <div>{this.getGroups()}</div>
            </div>
        );
    }
}

interface GroupListState {
    groups: Group[],
    groupA : Group,
    groupB : Group
}