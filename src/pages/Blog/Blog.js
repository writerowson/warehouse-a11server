import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <h3 className='text-danger mt-5'>Difference between Node.JS and Javascript</h3>
            <div className='container text-start'>
                <p><b>Ans :</b>
                    <li>JavaScript is a high-level programming language. NodeJs is a runtime environment for JS. </li>
                    <li>Browsers has own JS engines to run Javascript of web pages and Javascript only can run in Browser. By Nodejs we can Javascript outside of browser. </li>
                    <li>In front end devlopment we use Javascript, In server side/back end development we use nodejs </li>
                    <li>JS use in client side, NodeJs use in server side</li>
                </p>
            </div>
            <h3 className='text-danger mt-5'>Using of NodeJs and MongoDb</h3>
            <div className='container text-start'>
                <p><b>Ans :  </b> NodeJs is a runtime environment for JS. Which allows developers to use JS outside broswer and create server side application and APIs.Mongo Db is database engine.  Developers use nodeJs to run JS code and MongoDb to store data.  NodeJs helps developer to connect those stored data from it's server side with client side   </p>
            </div>
            <h3 className='text-danger mt-5'>Differences between SQL and NoSQL</h3>
            <div className='container text-start'>
                <p><b>Ans :</b>
                    <li>SQL is safe and versatile while NoSQL is much flexible and dynamic than SQL </li>
                    <li>SQL database scaled vertically while NoSQL database scaled horizontally </li>
                    <li>SQL database are relational and NoSQL database are non-relational.</li>
                    <li>SQL database storage model is table-based but NoSQL databases storage model is document, key-value,key-value pairs, wide column: tables, graph.</li>
                </p>
            </div>
        </div>
    );
};

export default Blog;