import React, {Component} from 'react';
import logo from './logo.svg';
import {GroupList} from "./GroupList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Group} from "./Group";

export class GroupAdder extends React.Component<GroupAdderProps, {}> {
    constructor(props: any, g: string) {
        super(props);
        // let d = new Document();
        // let group_list = d.getElementById(g)
    }

    addGroup() {
        let d = new Document();
        let group_list = d.getElementById(this.props.g) as unknown;
        let gl = group_list as GroupList;
        if (group_list instanceof HTMLElement) {
            gl.addGroup(new Group(this.props, "New Group"));
        }
    }

    render() {
        return (
            <div className="GroupAdder">
                <div>
                    <button onClick={() => this.addGroup()}><FontAwesomeIcon icon={faPlus}/></button>
                </div>

            </div>
        );
    }
}

interface GroupAdderProps {
    props : any,
    g : string
}
