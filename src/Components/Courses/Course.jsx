import React from 'react';

const courseData = [
    {
        title: 'JavaScript Course',
        description: 'Learn the fundamentals of JavaScript programming.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-86vRuxOArrVRmMgerLZ5pi8yCs6U7zsQ&s',
        alt: 'JavaScript Course',
        color: 'bg-yellow-500' // added a color property
    },
    {
        title: 'Ruby Course',
        description: 'Master the Ruby programming language.',
        image: 'https://miro.medium.com/v2/resize:fit:540/1*7e9D-oPWPIKBe2AQv862aA.png',
        alt: 'Ruby Course',
        color: 'bg-red-500' // added a color property
    },
    {
        title: 'HTML & CSS Course',
        description: 'Learn the building blocks of web development.',
        image: 'https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png',
        alt: 'HTML & CSS Course',
        color: 'bg-orange-500' // added a color property
    },
    {
        title: 'Java Course',
        description: 'Dive into Java programming with our course.',
        image: 'https://imageio.forbes.com/specials-images/imageserve/5e7cdb76281468000685c675/0x0.jpg?format=jpg&crop=640,360,x0,y60,safe&height=900&width=1600&fit=bounds',
        alt: 'Java Course',
        color: 'bg-green-500' // added a color property
    },
    {
        title: 'Python Course',
        description: 'Explore the world of Python programming.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ii4_6NE2r_GhG6m_ZWtwwadDgOy46vp2lw&s',
        alt: 'Python Course',
        color: 'bg-blue-500' // added a color property
    },
    {
        title: 'DSA Course',
        description: 'Master Data Structures and Algorithms.',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240213174747/dsa-new.webp',
        alt: 'DSA Course',
        color: 'bg-purple-500' // added a color property
    },
    {
        title: 'C & C++ Course',
        description: 'Learn the fundamentals of C and C++ programming.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXFhHy9osx8RxQcIrBqsy6E8jaC3k0kFHpA&s',
        alt: 'C & C++ Course',
        color: 'bg-pink-500' // added a color property
    }
];

const CourseCard = ({ title, description, image, alt, color }) => {
    return (
        <div className={`bg-white dark:bg-zinc-700 rounded-lg shadow-md p-4 ${color} hover:${color} hover:scale-105 transition duration-300 ease-in-out`}>
            <img src={image} alt={alt} className="w-full h-48 object-cover rounded-lg mb-2" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Buy Now</button>
        </div>
    );
};

const CourseList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {courseData.map((course, index) => (
                <CourseCard key={index} {...course} />
            ))}
        </div>
    );
};

const Course = () => {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-800 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center mb-4">Choose a Programming Language Course</h1>
            <CourseList />
        </div>
    );
};

export default Course;