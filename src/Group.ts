/*
Defines Group and Member objects within context of group builder
 */

export interface Group { // representation of participant groupings
    group_name: string;
    group_id: number; // unique ID
    group_size: number;
    members: Member[]; //array of members assigned to group
}

export interface Member {

    assessment: boolean; // boolean indicating accordance to selection criteria
    first_name: string;
    last_name: string;
    group_assignment: number;
}