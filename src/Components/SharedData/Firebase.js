import React from 'react';

const Firebase = () => {
    return (
        <section className="py-6 sm:py-12 mx-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl font-bold">Why are you using firebase? What other options do you have to implement authentication?</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
                    <article className="flex flex-col">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-fit w-full h-96 dark:bg-gray-500" src="https://miro.medium.com/max/1000/1*JbDo7U0l62vYMfm1WxnA1g.png" />
                        </a>


                    </article>
                    <article>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-300 text-lg font-medium text-justify">
                            <span className="text-xl font-bold">Why firebase: </span> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Accelerate Development. Customize Your App. Trusted by +200,000 Devs. <br /><br />
                            <span className="text-xl font-bold">Firebase Alternatives:</span> However, firebase is good, there are lot of alternatives --- <br /> <br />
                            <img src="https://blog.back4app.com/wp-content/uploads/2022/07/Best-Firebase-Alternatives.webp" alt="" />
                        </p>

                    </article>

                </div>
            </div>
        </section>
    );
};

export default Firebase;