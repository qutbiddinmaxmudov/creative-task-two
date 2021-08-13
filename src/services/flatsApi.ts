import axios from "axios"
import { FlatInterface } from "../types"


export const flatsApi = {
  async fetchFlats(): Promise<FlatInterface[]>{
    const { data } = await axios.get('https://trycode.pw/c/6X7WT.json')
    return data
  }
}