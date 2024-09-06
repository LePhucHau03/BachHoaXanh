
// định dạng hiển thị tiền trong header
export const formatter = (number) => {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"

    }).format(number);
};