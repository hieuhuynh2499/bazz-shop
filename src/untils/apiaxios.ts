import instance from "../servicesAPI/axios";


export const fetchProduct = (id: number) => instance.get(`/${id}`);