import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Maps from './Map';
import Comment from './Comment';
import Chart from './Chart';

// Data
import homeData from '../utils/data';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// React player library
import ReactPlayer from 'react-player'

// Mui
import { Rating, TextareaAutosize } from '@mui/material';

const comments = [
    {
        id: 1,
        name: "سامان محلاتی",
        rate: 5,
        time: "۱۴ فروردین ۱۳۹۹",
        comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
    },
    {
        id: 2,
        name: "علی",
        rate: 1,
        time: "۱۳ اسفند ۱۳۹۹",
        comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
    },
    {
        id: 3,
        name: "محمد",
        rate: 3,
        time: "۱۴ فروردین ۱۳۹۹",
        comment: "اتاق خواب دوم اتاق گوشه ای با پنجره های دو نفره است. آشپزخانه دارای فضایی شگفت انگیز ، لوازم جدید و یک اتاق لباسشویی است."
    },
]


const PostDetail = () => {
    const param = useParams()
    const [commentRate, setCommentRate] = React.useState<number>(0);
    const [commentName, setCommentName] = React.useState<string>("");
    const [commentEmail, setCommentEmail] = React.useState<string>("");
    const [commentText, setCommentText] = React.useState<string>("");
    const [error, setError] = React.useState<boolean>(false);

    const [newComment, setNewComment] = useState({})

    const mainProduct: any = homeData?.find(item => item.id === Number(param.id))

    const commentHandler = () => {
        if (commentName && commentEmail && commentText) {
            let newComment = {
                id: comments.length + 1,
                name: commentName,
                rate: commentRate,
                time: "12 اسفند 1399",
                comment: commentText
            }
            comments.push(newComment)
            setNewComment(newComment)
            setError(false)
            clearForm()
        } else {
            setError(true)
        }
    }

    const clearForm = () => {
        setCommentRate(0)
        setCommentName("")
        setCommentEmail("")
        setCommentText("")
    }

    return (
        <section className='w-full overflow-hidden font-IR'>

            <div className='relative text-white-200 max-w-7xl lg:mt-6 mx-auto overflow-hidden'>
                <Swiper navigation={true} modules={[Navigation]} className='h-[27rem] lg:h-[35rem]'>
                    {
                        mainProduct.image.map((item: any) =>
                            <SwiperSlide key={mainProduct.id}>
                                <img className='object-cover w-full h-full brightness-50 lg:rounded-2xl shadow-xl' src={item} alt="home" />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                <div className='absolute bottom-0 z-30 w-full flex flex-col sm:flex-row sm:justify-around gap-y-4 py-7 px-4'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-4xl'>{mainProduct.title}</h1>
                        <div className='mt-1 flex items-center gap-x-1'>
                            <span>{mainProduct.location.country}</span>
                            <span>،</span>
                            <span>{mainProduct.location.city}</span>
                            <span>،</span>
                            <span>{mainProduct.location.area}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 text-xl mt-2 sm:text-2xl'>
                        <span>{mainProduct.price.toLocaleString()}</span>
                        <span>تومان</span>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 mt-7 px-4 gap-3 sm:grid-cols-4 max-w-4xl my-0 mx-auto'>

                <div className='flex flex-col items-center'>
                    <div className='w-12 h-12 bg-zinc-300 p-3 rounded-full overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                    </div>
                    <h2 className='text-center mt-2'>ارسال ایمیل</h2>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='w-12 h-12 bg-zinc-300 p-3 rounded-full overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </div>
                    <h2 className='text-center mt-2'>علاقه مندی</h2>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='w-12 h-12 bg-zinc-300 p-3 rounded-full overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                        </svg>
                    </div>
                    <h2 className='text-center mt-2'>اشتراک گذاری</h2>
                </div>

                <div className='flex flex-col items-center col-span-3 sm:col-span-1'>
                    <div className='w-12 h-12 bg-zinc-300 p-3 rounded-full overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="" viewBox="0 0 16 16">
                            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
                        </svg>
                    </div>
                    <h2 className='text-center mt-2'>چاپ کردن</h2>
                </div>
            </div>

            <div className='md:flex max-w-4xl my-0 mx-auto'>

                <div className='px-4 rounded-lg'>
                    <div className='flex flex-col gap-6'>
                        <div className='mt-12 border border-zinc-300 shadow-sm rounded-md overflow-hidden'>
                            <div className='bg-white-100 flex items-center flex-wrap w-full px-6 py-7 gap-2'>
                                <div className='bg-zinc-100 px-5 py-2 rounded-lg text-red shadow-sm'>{mainProduct.type}</div>
                                <div className='bg-zinc-100 px-5 py-2 rounded-lg text-zinc-600 shadow-sm'>اتاق خواب : {mainProduct.rooms}</div>
                                <div className='bg-zinc-100 px-5 py-2 rounded-lg text-zinc-600 shadow-sm'>متر مربع  {mainProduct.meter}</div>
                                <div className='bg-zinc-100 px-5 py-2 rounded-lg text-zinc-600 shadow-sm'>حمام ها : {mainProduct.bathroom}</div>
                            </div>
                            <div className='p-6 bg-white-100'>
                                <h2 className='text-lg'>نمای کلی</h2>
                                <pre className='whitespace-pre-wrap font-IR text-zinc-500'>{mainProduct.description}</pre>
                            </div>

                            <hr className='text-zinc-300' />

                            <div className='p-6  flex flex-col gap-y-4 bg-white-100'>
                                <h2 className='text-lg'>جزئیات</h2>
                                <div className='grid grid-cols-1 gap-y-3 sm:grid-cols-2'>
                                    <div className='flex gap-2'>
                                        <span className='text-zinc-500 w-20'>شناسه ملک :</span>
                                        <span className='text-zinc-800'>{mainProduct.id}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-zinc-500 w-20'>مساحت خانه :</span>
                                        <span className='text-zinc-800'>{mainProduct.meter}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-zinc-500 w-20'>اتاق ها :</span>
                                        <span className='text-zinc-800'>{mainProduct.rooms}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-zinc-500 w-20'>حمام ها :</span>
                                        <span className='text-zinc-800'> {mainProduct.bathroom}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-zinc-500 w-20'>قیمت :</span>
                                        <span className='text-zinc-800'>{mainProduct.price.toLocaleString()} تومان</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-zinc-500 w-20'>وضعیت :</span>
                                        <span className='text-zinc-800'>{mainProduct.type}</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-zinc-500 w-20'>سال ساخت :</span>
                                        <span className='text-zinc-800'>{mainProduct.year}</span>
                                    </div>
                                </div>
                            </div>

                            <hr className='text-zinc-300' />

                            <div className='flex flex-col gap-y-5 p-6 bg-white-100'>
                                <h1 className='text-lg'>پیوست ها</h1>
                                <div className='flex items-center flex-wrap gap-6 sm:gap-x-20'>
                                    <div className='flex items-center gap-x-3'>
                                        <div className='text-red bg-zinc-200 p-3 rounded-md shadow-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
                                            </svg>
                                        </div>
                                        <h3>test_property.pdf</h3>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <div className='text-red bg-zinc-200 p-3 rounded-md shadow-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-7.839 9.166v.522c0 .256-.039.47-.117.641a.861.861 0 0 1-.322.387.877.877 0 0 1-.469.126.883.883 0 0 1-.471-.126.868.868 0 0 1-.32-.386 1.55 1.55 0 0 1-.117-.642v-.522c0-.257.04-.471.117-.641a.868.868 0 0 1 .32-.387.868.868 0 0 1 .471-.129c.176 0 .332.043.469.13a.861.861 0 0 1 .322.386c.078.17.117.384.117.641Zm.803.519v-.513c0-.377-.068-.7-.205-.972a1.46 1.46 0 0 0-.589-.63c-.254-.147-.56-.22-.917-.22-.355 0-.662.073-.92.22a1.441 1.441 0 0 0-.589.627c-.136.271-.205.596-.205.975v.513c0 .375.069.7.205.973.137.271.333.48.59.627.257.144.564.216.92.216.357 0 .662-.072.916-.216.256-.147.452-.356.59-.627.136-.274.204-.598.204-.973ZM0 11.926v4h1.459c.402 0 .735-.08.999-.238a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.59-.68c-.263-.156-.598-.234-1.004-.234H0Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.141 1.141 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082H.79V12.57Zm7.422.483a1.732 1.732 0 0 0-.103.633v.495c0 .246.034.455.103.627a.834.834 0 0 0 .298.393.845.845 0 0 0 .478.131.868.868 0 0 0 .401-.088.699.699 0 0 0 .273-.248.8.8 0 0 0 .117-.364h.765v.076a1.268 1.268 0 0 1-.226.674c-.137.194-.32.345-.55.454a1.81 1.81 0 0 1-.786.164c-.36 0-.664-.072-.914-.216a1.424 1.424 0 0 1-.571-.627c-.13-.272-.194-.597-.194-.976v-.498c0-.379.066-.705.197-.978.13-.274.321-.485.571-.633.252-.149.556-.223.911-.223.219 0 .421.032.607.097.187.062.35.153.489.272a1.326 1.326 0 0 1 .466.964v.073H9.78a.85.85 0 0 0-.12-.38.7.7 0 0 0-.273-.261.802.802 0 0 0-.398-.097.814.814 0 0 0-.475.138.868.868 0 0 0-.301.398Z" />
                                            </svg>
                                        </div>
                                        <h3>test_property.docx</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-5 p-6 bg-white-100 border border-zinc-300 shadow-sm rounded-md'>
                            <h1 className='text-lg'>امکانات</h1>
                            <div className='grid grid-cols-2 gap-5 sm:grid-cols-3'>
                                {
                                    Object.entries(mainProduct.options).map((key: any, index: number) => (
                                        <div className='flex items-center gap-2'>
                                            {
                                                key[1].status ?
                                                    <>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 text-green-500 w-5" viewBox="0 0 16 16">
                                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                        </svg>
                                                        <h1>{key[1].name}</h1>
                                                    </>
                                                    :
                                                    <>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 text-red w-6" viewBox="0 0 16 16">
                                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                        </svg>
                                                        <h1>{key[1].name}</h1>
                                                    </>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        <div className='bg-white-100 border border-zinc-300 shadow-sm rounded-md'>
                            <div className='flex items-center justify-between p-6'>
                                <h1 className='text-lg'>موقعیت مکانی</h1>
                                <div className='flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                    <div className='mt-1 flex items-center gap-x-1 text-zinc-500'>
                                        <span>{mainProduct.location.country}</span>
                                        <span>،</span>
                                        <span>{mainProduct.location.city}</span>
                                        <span>،</span>
                                        <span>{mainProduct.location.area}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='overflow-hidden w-full flex items-center justify-center mb-5'>
                                <Maps location={mainProduct.location} />
                            </div>
                        </div>


                        <div className='p-6 flex flex-col gap-4 bg-white-100 border border-zinc-300 shadow-sm rounded-md'>
                            <h1 className='text-lg'>ویدیو ملک</h1>
                            <div className='overflow-hidden rounded-lg shadow-xl'>
                                <ReactPlayer
                                    url='https://aspb3.asset.aparat.com/aparat-video/bf4d244c8242c668821582b789414b644416504-320p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImQwYTY1OTlhNzExZjBjNjk5MzM0MzJiZmE2OWZiN2NkIiwiZXhwIjoxNjgxMjE5MjcwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.5DAZLROcOOc9H4l6LIzr2ee49UtvOxnRmY-PcoWhzZg'
                                    controls={true}
                                    width={"100%"}
                                    pip={true}
                                />
                            </div>
                        </div>


                        <div className='p-6 flex flex-col gap-4 bg-white-100 border border-zinc-300 shadow-sm rounded-md'>
                            <h1 className='text-lg'>بازدید های اگهی</h1>
                            <Chart />
                        </div>


                        <div className='p-6 flex flex-col gap-4 bg-white-100 border border-zinc-300 shadow-sm rounded-md'>
                            <div className='text-lg flex gap-1'>
                                <span>{comments.length}</span>
                                <span>دیدگاه</span>
                            </div>
                            <div>
                                <div className='flex flex-col gap-6'>
                                    {
                                        comments.map(item =>
                                            <Comment data={item} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='p-6 flex flex-col gap-4 bg-white-100 border border-zinc-300 shadow-sm rounded-md'>
                            <h1 className='text-lg'>افزودن دیدگاه</h1>
                            <div className='flex items-center gap-3'>
                                <h3>امتیاز</h3>
                                <Rating
                                    name="simple-controlled"
                                    value={commentRate}
                                    onChange={(event: any, newValue: any) => {
                                        setCommentRate(newValue);
                                    }}
                                />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <input type="text" value={commentName} onChange={(e) => setCommentName(e.target.value)} className='px-3 h-14 border border-zinc-300 rounded-md  focus:outline-none' placeholder='نام' />
                                    <span className={error ? !commentName ? 'bg-rose-300 text-rose-700 py-1 px-3 rounded-lg shadow-md w-36 ' : 'hidden' : 'hidden'}>نام را وارد کنید</span>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <input type="email" value={commentEmail} onChange={(e) => setCommentEmail(e.target.value)} className='px-3 h-14 border border-zinc-300 rounded-md focus:outline-none ' placeholder='ایمیل' />
                                    <span className={error ? !commentEmail ? 'bg-rose-300 text-rose-700 py-1 px-3 rounded-lg shadow-md w-36 ' : 'hidden' : 'hidden'}>ایمیل را وارد کنید</span>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <TextareaAutosize value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder=' نوشتن دیدگاه' minRows={7} className='p-3 border focus:outline-none border-zinc-300 rounded-md' />
                                    <span className={error ? !commentText ? 'bg-rose-300 text-rose-700 py-1 px-3 rounded-lg shadow-md w-36 ' : 'hidden' : 'hidden'}>نظر را وارد کنید</span>
                                </div>
                                <button onClick={commentHandler} className='bg-red text-white-200 px-2 shadow-lg py-3 rounded-lg text-lg w-48'>ارسال دیدگاه</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col h-full mb-8 md:mb-0'>
                    <div className='mt-12 mx-4 flex flex-col gap-7 bg-white-100 p-6 border border-zinc-300 shadow-sm rounded-md h-full'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-1 text-lg font-semibold'>
                                <span>تماس با</span>
                                <span>{mainProduct.saler.name}</span>
                            </div>
                            <div className='flex gap-3'>
                                <img className='h-20 w-20 rounded-full border border-zinc-400' src={mainProduct.saler.photo} alt="" />
                                <div>
                                    <h3>{mainProduct.saler.name}</h3>
                                    <h3>{mainProduct.saler.phone}</h3>
                                    <h3>{mainProduct.saler.email}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <input type="text" className='px-3 h-14 border border-zinc-300 rounded-md  focus:outline-none' placeholder='نام' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <input type="email" className='px-3 h-14 border border-zinc-300 rounded-md focus:outline-none ' placeholder='ایمیل' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <input type="text" className='px-3 h-14 border border-zinc-300 rounded-md  focus:outline-none' placeholder='تلفن' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <TextareaAutosize placeholder='پیام' minRows={7} className='p-3 border focus:outline-none border-zinc-300 rounded-md' />
                            </div>
                            <button onClick={commentHandler} className='bg-red text-white-200 px-2 shadow-lg py-2 md:w-full rounded-lg text-lg w-48'>ارسال پیام</button>
                        </div>
                    </div>

                    <div className='mt-12 mx-4 flex flex-col gap-7 bg-white-100 p-6 border border-zinc-300 shadow-sm rounded-md h-full'>
                        <h1>ماشین حساب وام</h1>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center border border-zinc-200 rounded-md px-3 bg-white-100'>
                                <input type="text" placeholder='قیمت' className='py-2 bg-transparent outline-none flex-1' />
                                <span>تومان</span>
                            </div>
                            <div className='flex items-center border border-zinc-200 rounded-md px-3 bg-white-100'>
                                <input type="text" placeholder='سپرده' className='py-2 bg-transparent outline-none flex-1'/>
                                <span>تومان</span>
                            </div>
                            <div className='flex items-center border border-zinc-200 rounded-md px-3 bg-white-100'>
                                <input type="text" placeholder='نرخ' className='py-2 bg-transparent outline-none flex-1'/>
                                <span>%</span>
                            </div>
                            <div className='flex items-center border border-zinc-200 rounded-md px-3 bg-white-100'>
                                <input type="text" placeholder='مدت وام' className='py-2 bg-transparent outline-none flex-1'/>
                                <span>سال</span>
                            </div>
                        </div>
                        <button className='bg-slate-800 text-white-100 py-2 rounded-lg'>محاسبه کنید</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PostDetail;