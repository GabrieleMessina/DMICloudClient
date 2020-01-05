export interface Course {
    id: number,
    name: string,
    year: number,
    cfu: number,
    creatorId?: number,
    createdAt?: string,
    updatedAt?: string,
}

export const DumCourse:Course[] = [
    {
        id: 1,
        name: "Algoritmi",
        year: 2,
        cfu: 9,
        creatorId: 1,
        createdAt: "12 luglio 1900",
        updatedAt: "13 giugno 1980"
    },
    {
        id: 2,
        name: "Analisi I",
        year: 1,
        cfu: 6,
        creatorId: 1,
        createdAt: "16 luglio 1956",
        updatedAt: "13 settembre 1999"
    },
    {
        id: 3,
        name: "Architettura degli elaboratori",
        year: 1,
        cfu: 9,
        creatorId: 3,
        createdAt: "26 gennaio 1976",
        updatedAt: "22 ottobre 1989"
    }
];