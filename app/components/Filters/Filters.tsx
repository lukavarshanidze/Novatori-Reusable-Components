import { categoryState, limitState, sortState } from "@/app/states"
import { useRecoilState } from "recoil"

export default () => {

    const [sort, setSort] = useRecoilState(sortState)
    const[limit, setLimit] = useRecoilState(limitState)
    const[category, setCategory] = useRecoilState(categoryState)

    
    const sortFunction = (e:any) => {
        setSort(e.target.value)
        localStorage.setItem('sort',e.target.value)
      
      }
      
      const limitFunction = (e:any) => {
        setLimit(e.target.value)
        sessionStorage.setItem('limit', e.target.value)
      }
      const categoryFunction = (e:any) => {
        setCategory(e.target.value)
      
      }

    return(
        <>
      <select  value={sort} onChange={sortFunction}>
        <option>asc</option>
        <option>desc</option>
      </select>
      <select value={category} onChange={categoryFunction}>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>
      <input type='number' value={limit} onChange={limitFunction}/>
        
        </>
    )
}