// extensible menu + state objects

export interface Menu {
    title: string;
    options: [string, (state: State) => State][];
    selected: number;
}

export interface State {

    id: number;
}