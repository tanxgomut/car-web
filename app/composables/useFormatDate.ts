export const useFormatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}