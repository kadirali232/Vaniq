import React from "react";
import './Blog.css';

import image11 from '../../assets/image11.jpg';
import image22 from '../../assets/image22.jpg';
import image33 from '../../assets/image33.jpg';
import image44 from '../../assets/image44.png';

const Blog = () => {
    const blogPosts = [
      {
        title: 'Vaniq: Revolutionizing Personal Banking',
        date: 'July 1, 2024',
        description: 'Vaniq introduces new features to simplify personal banking, making it easier for users to manage their finances and track expenses effectively.',
        image: image11,
      },
      {
        title: 'How Vaniq Ensures Secure Transactions',
        date: 'June 15, 2024',
        description: 'Learn how Vaniq prioritizes user security with advanced measures to protect your transactions and personal information.',
        image: image22,
      },
      {
        title: 'Exclusive Preview: Regens Restaurant Opens for Vaniq Users',
        date: 'June 15, 2024',
        description: 'Vaniq Black members are invited to an exclusive preview of Regens, the newest dining sensation in Soho. Experience a unique culinary journey before anyone else!',
        image: image33,
      },
      {
        title: 'Vaniq Marathon: Running for Children in Need',
        date: 'June 10, 2024',
        description: 'Exclusively for Vaniq Black users, join us for the Vaniq marathon race and support the Children in Need charity! This is a fantastic opportunity to run for a great cause while making a difference in the lives of children.',
        image: image44,
      },
    ];

  return (
    <div className="blog-container">
      <h1>Vanity Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-description">{post.description}</p>
            <p className="blog-date">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
