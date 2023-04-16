import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props: any) => {

    return (
        <div className='bg-white-100 border border-zinc-300 shadow-sm transition-shadow hover:shadow-xl rounded-md'>
            <div className='p-3'>
                <div className='relative overflow-hidden rounded-md'>
                    <div className=''>
                        <img className='object-cover h-48 w-full' src={props.data.image[0]} alt="home" />
                    </div>
                    <div className='absolute bg-slate-800 w-full h-full top-0 bg-opacity-50'></div>
                    <h3 className='absolute bottom-2 right-2 text-white-100 font-bold text-lg'>{props.data.price.toLocaleString()}  تومان</h3>
                    <h4 className='absolute top-2 right-2 bg-slate-600 text-white-100 p-1 rounded-md shadow-sm font-medium'>{props.data.status}</h4>
                </div>
            </div>

            <div className='py-1 flex flex-col gap-2'>
                <h4 className='text-red text-sm px-3'>{props.data.type}</h4>
                <Link to={`/posts/post/${props.data.id}`}>
                    <h2 className='text-lg px-3 hover:text-red transition-all'>{props.data.title}</h2>
                </Link>
                <div className='flex items-center gap-1 text-zinc-500 px-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div className='mt-1 text-sm flex items-center gap-x-1'>
                        <span>{props.data.location.country}</span>
                        <span>،</span>
                        <span>{props.data.location.city}</span>
                        <span>،</span>
                        <span>{props.data.location.area}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 text-zinc-500 text-xs mt-1 px-3 mb-2'>
                    <div>
                        <span>تختخواب ها: </span>
                        {props.data.rooms}
                    </div>
                    <div>
                        <span>حمام ها: </span>
                        {props.data.bathroom}
                    </div>
                    <div>
                        <span>مترمربع: </span>
                        {props.data.meter}
                    </div>
                </div>

                <hr className='text-zinc-300' />

                <div className='flex items-center justify-between px-3 py-1'>
                    <div className='flex items-center gap-2'>
                        <img className='rounded-full h-10 w-10' src={props.data.saler.photo} alt="person" />
                        <h4 className='text-zinc-600 text-sm'>{props.data.saler.name}</h4>
                    </div>
                    <h3 className='text-xs text-zinc-600'>{props.data.time}</h3>
                </div>
            </div>
        </div>
    );
};

export default Post;