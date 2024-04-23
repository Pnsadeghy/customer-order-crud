const paginateCollection = (data: object[], currentPage: number, limit: number, total: number) => {
    const from = ((currentPage - 1) * limit) + 1
    return {
        data,
        meta: {
            current_page: currentPage,
            per_page: limit,
            from,
            to: Math.min(from + limit - 1, total),
            total
        }
    }
}

export default paginateCollection