// import React from 'react';

import useTitle from "./useTitle";

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className="my-12 px-12 ">
            <div className="bg-slate-300 p-12">
                <div className="my-4 ">
                    <h2 className="text-3xl font-bold mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <div className="mb-4">
                        <h2 className="border-b-4 border-indigo-500 mb-4 text-2xl ">Access token:</h2>
                        <p>An access token is a credential that is used to authenticate and authorize a user is access to protected resources or services. It is typically issued by an authentication server (such as OAuth or OpenID Connect) after the user successfully logs in or grants permission. The access token contains information about the user is identity and permissions.</p>
                        <h2 className="border-b-4 border-indigo-500 mb-4  text-2xl ">Refresh token:</h2>
                        <p>A refresh token is a credential that is used to obtain a new access token when the current access token expires. It is usually issued alongside the access token and has a longer expiration time. The refresh token is securely stored on the client-side, typically in a cookie or local storage.</p> <br /><span className="text-2xl mb-4 text-indigo-500">Summary:</span>
                        <p> store access and refresh tokens on the client-side, it depends on the specific context and security requirements. Commonly, access tokens are stored in memory or as a secure HTTP-only cookie, while refresh tokens are stored as an HTTP-only cookie or in a secure storage mechanism like local storage or session storage. Storing tokens securely is crucial to prevent unauthorized access or tampering. <br /> It is important to follow security best practices and consider the specific requirements of my application when determining how and where to store access and refresh tokens on the client-side.</p>
                    </div>
                </div>
                <div className="my-4 ">
                    <h2 className="text-3xl font-bold mb-4">Compare SQL and NoSQL databases?</h2>
                    <h2 className="border-b-4 border-indigo-500 mb-4 w-12 text-2xl ">SQL:</h2>
                    <ol>
                        <li>SQL databases follow a relational data model. Data is organized into tables with predefined schemas, and relationships between tables are established through primary and foreign keys.</li>
                        <li>SQL databases are generally vertically scalable, meaning they can handle increased workload by upgrading hardware resources like CPU, RAM, or storage. Scaling horizontally (across multiple servers) can be challenging.</li>
                        <li>SQL databases enforce a rigid schema where the structure of the data must be predefined. Any changes to the schema may require altering existing tables and migrating data.</li>
                        <li>
                            SQL databases use the SQL query language for defining and manipulating data. SQL provides a standardized way to interact with the database and perform complex queries using joins, aggregations, and other operations.
                        </li>
                        <li>SQL databases are suitable for applications that require complex querying, transactions, and data integrity, such as e-commerce platforms, financial systems, and content management systems.</li>
                    </ol>
                    <h2 className="border-b-4 border-indigo-500 w-16 mb-4 text-2xl ">NoSQL:</h2>
                    <ul>
                        <li>NoSQL databases use various data models, including key-value, document, columnar, and graph. They provide flexibility in storing and retrieving unstructured or semi-structured data without requiring a fixed schema.</li>
                        <li>NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers, allowing for easy scaling by adding more nodes to the cluster.</li>
                        <li> NoSQL databases are schema-less or have flexible schemas. They allow for dynamic and evolving data structures, making it easier to handle unstructured or changing data.</li>
                        <li>NoSQL databases have their own query languages, which vary depending on the type of NoSQL database. Some use SQL-like query languages, while others use APIs or object-oriented approaches for data retrieval and manipulation.</li>
                        <li>NoSQL databases are well-suited for handling large amounts of unstructured or rapidly changing data, real-time applications, content caching, social networks, and IoT applications.</li>
                    </ul> <br /><span className="text-2xl mb-4 text-indigo-500">Summary:</span>
                    <p>It is worth noting that these are general comparisons, and specific databases within the SQL and NoSQL categories may have different features and capabilities. The choice between SQL and NoSQL databases depends on the specific requirements of  application, the nature of your data, scalability needs, and performance considerations.</p>
                </div>
                <div className="my-4 ">
                    <h2 className="text-3xl font-bold mb-4">What is express js? What is Nest JS?</h2>
                    <div>
                        <h2 className="border-b-4 border-indigo-500 mb-4  text-2xl ">ExpressJs:</h2>
                        <p>Express.js is a minimalistic and unopinionated web framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js focuses on being lightweight and offers a low-level, middleware-based approach to handling HTTP requests and responses. <br /><span className="text-2xl mb-4 text-indigo-500">Objective:</span> <br /> Routing: Express.js allows you to define routes and handle different HTTP methods (GET, POST, PUT, DELETE, etc.) to handle specific endpoints. <br />Middleware: Express.js relies heavily on middleware functions, which can be used for various purposes like handling request/response modifications, authentication, logging, error handling, and more.</p>
                        <p>
                            <h2 className="border-b-4 border-indigo-500 mb-4 text-2xl ">NestJS:</h2>
                            NestJS is a full-featured, opinionated framework for building scalable and maintainable server-side applications. It is built on top of Express.js and incorporates concepts from Angular, providing a similar architecture and development experience. <br /> <span className="text-2xl  mb-4 text-indigo-500">Objective</span><br /> Dependency Injection: NestJS has a built-in dependency injection (DI) system, allowing for better code organization, testability, and loose coupling between components. <br /> TypeScript: NestJS is built with TypeScript, which enables developers to use strong typing, decorators, and other modern language features for better tooling and developer experience. <br />
                            Middleware and Interceptors: <br /> NestJS supports middleware and interceptors similar to Express.js, allowing for request/response manipulation, logging, error handling, and more.
                        </p>
                    </div>
                </div>
                <div className="my-4  ">
                    <h2 className="text-3xl font-bold mb-4">What is MongoDB aggregate and how does it work?</h2>
                    <p>In MongoDB, the aggregate operation is a powerful method for processing and analyzing data within a collection. It allows you to perform complex data manipulations, transformations, and aggregations on the documents in a collection.

                        The aggregate operation works by applying a series of stages to the documents in the collection, where each stage performs a specific operation on the data. These stages are applied sequentially, and the output of one stage becomes the input for the next stage. This allows for flexible and expressive data processing pipelines.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;