export interface AppStateValue {
    serverData: Array <
      {
        id: string
        label: string
        path: string
      } 
    >
    containerMaxWidth: number
    containerRatio: number
    containerShadow: boolean
    imageShadow: boolean
    showNextPrev: boolean
  }