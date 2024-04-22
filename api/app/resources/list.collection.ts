const listCollection = (data: object[], currentPage: number, limit: number, total: number) => ({
    data,
    currentPage,
    totalPage: total > 0 ? Math.ceil(total / limit) : 1,
    total
})

export default listCollection