const formatPrice = (price: any) => {
    if (!price) return price
    
    let newPrice = price.replace(/\B(?=(\d{3})+(?!\d))/g , ",")
    return newPrice
}

export default formatPrice