export const sortList= (list,type, sortBy) => {
    if(sortBy==='asc')
     return [...list].sort((a, b) => a[type] > b[type] ? 1 : -1);
    else if(sortBy === 'desc') return [...list].sort((a, b) => a[type] < b[type] ? 1 : -1);
    else return [...list];
}

export const searchFunction = (list, value, searchBy) => {
    return [...list].filter((el)=> searchBy.some(type => el[type].toString().toLowerCase()
    .includes(value.toLowerCase())) )
}