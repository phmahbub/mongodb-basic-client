import React from 'react';

const CORS = () => {
    return (
        <section className="py-6 sm:py-12 mx-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl font-bold">What is CORS?</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
                    <article className="flex flex-col">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-fit w-full h-96 dark:bg-gray-500" src="https://nordicapis.com/wp-content/uploads/What-is-CORS-.png" />
                        </a>


                    </article>
                    <article>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-300 text-lg font-medium text-justify">
                            CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources. The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail.

                            This is a security concern for the browser. CORS comes into play to disable this mechanism and allow access to these resources. It will add a response header access-control-allow-origins and specify which origins are permitted. CORS ensures that we are sending the right headers.{" "} <br /><br />
                            <p>How CORS works?: <br />
                                An API is a set procedure for two programs to communicate. This means that API resources are consumed by other clients and servers.
                            </p>
                            <img src="https://i0.wp.com/www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/same-origin.jpg?w=810&ssl=1" alt="" />
                            <p>
                                The client and the server have the same origin. In this example, accessing resources will be successful. You’re trying to access resources on your server, and the same server handles the request.</p>
                            <img src="https://i0.wp.com/www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/diffrent-origin.jpg?resize=728%2C177&ssl=1" alt="" />
                            <p>
                                The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail.

                                This is a security concern for the browser. CORS comes into play to disable this mechanism and allow access to these resources. It will add a response header access-control-allow-origins and specify which origins are permitted. CORS ensures that we are sending the right headers.</p>
                                <img src="https://blog.back4app.com/wp-content/uploads/2022/07/Best-Firebase-Alternatives.webp" alt="" />
                        </p>

                    </article>

                </div>
            </div>
        </section>
    );
};

export default CORS;