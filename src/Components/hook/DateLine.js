
export const verifyDeadline = ({ deadline }) => {
    if(!deadline){
        return
    }
    const date = new Date()
    const [year, month, day] = deadline.split("-").map(Number);

    if (
        year > date.getFullYear() ||
        (year === date.getFullYear() && month > date.getMonth() + 1) ||
        (year === date.getFullYear() && month === date.getMonth() + 1 && day > date.getDate())
    ) {
        return 1
    } else {
        return 2
    }
};