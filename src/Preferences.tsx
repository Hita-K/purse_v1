/*
Defines experimenter's preferences for a particular experiment
 */

export interface GroupPreference { // experimenter's preferences
    num_groups: number;
    group_sizes: [[number, number]]; // low to high
    group_assessments: [boolean]; // group_id: assessment success
    group_balanced: {string : boolean}; // group_id: (demographic category : is_balanced)
}