export interface Data {
    activity: string,
    type: string,
    participants: number,
    price: number,
    link: string,
    key: string,
    accessibility: 0.3
}

export type DeleteMethod = (index: number) => Promise<void>;
export type BtnMethod = () => Promise<void>