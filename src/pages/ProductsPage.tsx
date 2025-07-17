import { InputText } from "primereact/inputtext"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { useQuery } from "@tanstack/react-query"
import api from "../services/api"
import type { Product } from "../types/productType"
import { Skeleton } from "primereact/skeleton"
import StarPic from "../assets/star.png"

function ProductsPage() {
    const [searchKey, setSearchKey] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [filteredData, setFilteredData] = useState<Product[]>([])

    const fetchProducts = async () => {
        const { data } = await api.get("/products")
        return data
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    const Categories = [
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics"
    ]

    useEffect(() => {
        if (data) {
            let array = [...data]

            if (searchKey != '') {
                array = array.filter((product: Product) => product.title.toLowerCase().includes(searchKey.toLowerCase()))
            }

            if (selectedCategory != '') {
                array = array.filter((product: Product) => product.category == selectedCategory)
            }

            setFilteredData(array)
        }
    }, [data, searchKey, selectedCategory])

    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center">
                <div className="px-5 sm:px-20 w-[1280px]">
                    <div className="mt-[150px] max-sm:mt-[100px] max-lg:mt-[120px] mb-[50px] flex flex-col gap-5">
                        <p className="text-[#1b3434] text-3xl max-sm:text-lg max-md:text-xl max-lg:text-2xl">Products</p>
                        <InputText
                            style={{
                                borderStyle: "var(--tw-border-style)",
                                borderWidth: "1px",
                                borderColor: "#1b3434",
                                borderRadius: "calc(infinity * 1px)",
                                color: "#1b3434",
                                padding: "8px 16px",
                            }}
                            className="focus:!shadow-md focus:!shadow-[#0ead88]"
                            placeholder="Search"
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                        />
                        <div className="flex flex-wrap gap-3 max-md:text-sm text-base">
                            {
                                Categories.map((value, index) => {
                                    return (
                                        <div onClick={() => setSelectedCategory(value)} key={index} className={`${selectedCategory == value ? "bg-[#0ead88] text-white border-[#0ead88]" : "text-[#1b3434] hover:bg-gray-100 border-[#1b3434]"} cursor-default py-1 px-3 rounded-full border`}>{value}</div>
                                    )
                                })
                            }
                        </div>
                        {
                            searchKey != '' || selectedCategory != '' ?
                                <div
                                    onClick={() => {
                                        setSearchKey('')
                                        setSelectedCategory('')
                                    }}
                                    className="cursor-default text-red-500 max-md:text-sm text-base w-fit flex">
                                    <XMarkIcon className="w-5" />
                                    Clear filter
                                </div>
                                :
                                <></>
                        }
                    </div>
                    {
                        isError ?
                            <div className="flex flex-col items-center mb-[150px] max-sm:mb-[100px] max-lg:mb-[120px]">
                                <div className="w-1/12 min-w-20 flex">
                                    <ExclamationTriangleIcon className="text-red-500" />
                                </div>
                                <p className="text-red-500 font-bold text-2xl">{error.message}</p>
                                <p className="text-[#1b3434] text-base">Unable to load data</p>
                            </div>
                            :
                            <div className="grid max-[950px]:grid-cols-3 max-md:grid-cols-2 grid-cols-4 gap-x-5 gap-y-10 mb-[150px] max-sm:mb-[100px] max-lg:mb-[120px]">
                                {
                                    isLoading ?
                                        Array(4).fill(0).map((_, index) => (
                                            <div key={index} className="flex justify-center">
                                                <div className="h-[300px] w-[225px] max-lg:h-[250px] max-lg:w-[188px] max-[32rem]:h-[230px] max-[32rem]:w-[172px] bg-gray-100 text-[#1b3434] grid-rows-2 rounded-[15px] overflow-hidden border border-[#0ead88] shadow-gray-500 shadow-xl">
                                                    <div className="h-1/2 bg-white flex w-full justify-center p-1">
                                                        <Skeleton height="full" />
                                                    </div>
                                                    <div className="flex flex-col justify-between h-1/2 p-2">
                                                        <div className="flex flex-col gap-1">
                                                            <div className="text-sm max-[32rem]:text-[12px] line-clamp-2"><Skeleton /></div>
                                                            <div className="text-lg max-[32rem]:text-base font-bold"><Skeleton width="80px" /></div>
                                                        </div>
                                                        <Skeleton width="100px" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        filteredData?.map((product: Product, index: number) => {
                                            return (
                                                <div key={index} className="flex justify-center">
                                                    <div className="h-[300px] w-[225px] max-lg:h-[250px] max-lg:w-[188px] max-[32rem]:h-[230px] max-[32rem]:w-[172px] bg-gray-100 text-[#1b3434] grid-rows-2 rounded-[15px] overflow-hidden border border-[#0ead88] shadow-gray-500 shadow-xl">
                                                        <div className="h-1/2 bg-white flex w-full justify-center p-1">
                                                            <img src={product.image} />
                                                        </div>
                                                        <div className="flex flex-col justify-between h-1/2 p-2">
                                                            <div className="flex flex-col gap-1">
                                                                <p className="text-sm max-[32rem]:text-[12px] line-clamp-2">{product.title}</p>
                                                                <p className="text-lg max-[32rem]:text-base font-bold">$ {product.price}</p>
                                                            </div>
                                                            <div className="flex gap-1 w-fit items-center">
                                                                <div>
                                                                    <img src={StarPic} className="w-3" />
                                                                </div>
                                                                <p className="text-sm max-[32rem]:text-[12px]">{product.rating.rate} | {product.rating.count} reviews</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductsPage