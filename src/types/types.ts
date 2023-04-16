type home = {
    id: number ,
    type: string ,
    status: string ,
    image: string[], 
    price: number ,
    title: string ,
    location: object ,
    rooms: number ,
    bathroom: number ,
    meter: number ,
    time: string ,
    saler: user
    description?: string ,
    year: number , 
    options: searchOptions
}

type searchOptions = {
    pool: object ,
    grass: object ,
    televisionCable: object ,
    barbecue: object ,
    dryer: object ,
    gym: object ,
    laundry: object ,
    microwave: object ,
    wifi: object ,
    airConditioning: object ,
    jacuzzi: object ,
    refrigrator: object
}

type user = {
    id: number ,
    name : string ,
    phone: string ,
    job?: string
    photo?: string ,
    email?: string ,
    comment?: string
}

type search = {
    id: number ,
    name: string ,
    unavailable: boolean
}

type blog = {
    id: number ,
    photo: string ,
    type: string ,
    title: string ,
    author: user ,
    time: string
}

export type {search , user , home , blog }