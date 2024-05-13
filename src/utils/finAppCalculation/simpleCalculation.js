
export const sumOfTrueValue = (values) => {
    return (values.filter((e) => e.status === true)).reduce((n, {value}) => n + value, 0)
}