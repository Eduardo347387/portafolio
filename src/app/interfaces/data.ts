export interface skills {
    name: string
    path: string
    color:string
}

export interface project {
    img: string,
    name: string
    description: string
    skills: skills[]
    gitHub: string
    liveSite:string
}
