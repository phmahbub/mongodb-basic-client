import React from 'react';
import { Link } from 'react-router-dom';

const Blog2 = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 mx-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-4xl font-bold">Featured Blogs</h2>
                        <p className="font-serif text-sm dark:text-gray-400">Read the articles enrich yourself</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-fit w-full h-96 dark:bg-gray-500" src="https://nordicapis.com/wp-content/uploads/What-is-CORS-.png" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Know about CORS</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                            <Link 
                            to='/blog2/cors'
                            className="inline-flex items-center justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  w-50 col-1">
                            Read More
                            </Link>
                            
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-fit w-full h-96 dark:bg-gray-500" src="https://miro.medium.com/max/1000/1*JbDo7U0l62vYMfm1WxnA1g.png" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Know about Firebase</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                            <Link 
                            to='/blog2/firebase'
                            className="inline-flex items-center justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  w-50 col-1">
                            Read More
                            </Link>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-fit w-full h-96 dark:bg-gray-500" src="https://i.ytimg.com/vi/2k8NleFjG7I/maxresdefault.jpg" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Know about CORS</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                            <Link 
                            to='/blog2/cors'
                            className="inline-flex items-center justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  w-50 col-1">
                            Read More
                            </Link>
                        </article>
                        <article className="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-96 dark:bg-gray-500" src="https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png" />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Know about CORS</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2020</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                            <Link 
                            to='/blog2/cors'
                            className="inline-flex items-center justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  w-50 col-1">
                            Read More
                            </Link>
                        </article>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog2;