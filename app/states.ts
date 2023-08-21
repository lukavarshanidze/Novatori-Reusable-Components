import { atom } from "recoil";

export const sortState = atom ({
    key: 'sort',
    default: localStorage.getItem('sort')|| 'asc'

})

export const limitState = atom({
    key:'limit',
    default:sessionStorage.getItem('limit')|| 20
})

export const categoryState = atom ({
    key: 'category',
    default: 'jewelery'
})

export const activeState = atom ({
    key: 'active',
    default: null
})
