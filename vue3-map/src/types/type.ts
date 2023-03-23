export interface typeList {
  list: itemOpts[]
}

export interface itemOpts {
  mark?: number
  finsh?: number
  score?: number
  behavior?: string
  id?: number
  name: string
  total?: number
  total2?: number
  value?: number
  value2?: number
}

export interface formOpts {
  isEdit1: boolean
  headName1: string
  isEdit2: boolean
  headName2: string
  isEdit3: boolean
  headName3: string
  isEdit4: boolean
  headName4: string
  isEdit5: boolean
  headName5: string
}