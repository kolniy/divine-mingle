const filterInterest = (items, userSearch) => {
    let filteredItems = items.filter((item) => {
        return item.interestName.toLowerCase().includes(userSearch.toLowerCase())
    })

    return filteredItems
}

export default filterInterest