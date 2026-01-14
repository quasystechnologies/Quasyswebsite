import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import './Blog.css';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
      category: "Technology",
      date: "2025-01-15",
      author: "Saravanan M",
      readTime: "5 min read",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png"
    },
    {
      id: 2,
      title: "How SaaS Products Are Scaling in the Modern Market",
      excerpt: "Understanding the key factors that contribute to successful SaaS product scaling in today's competitive landscape.",
      category: "SaaS",
      date: "2025-01-10",
      author: "Subash K",
      readTime: "7 min read",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png"
    },
    {
      id: 3,
      title: "Digital Marketing Strategies for Indian Businesses",
      excerpt: "Effective digital marketing strategies tailored for the Indian market and how to implement them successfully.",
      category: "Digital Marketing",
      date: "2025-01-05",
      author: "Priya S",
      readTime: "6 min read",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png"
    },
    {
      id: 4,
      title: "Enhancing Security with Modern CCTV Solutions",
      excerpt: "Learn about the latest advancements in CCTV technology and how they can enhance security for businesses.",
      category: "Security Systems",
      date: "2024-12-28",
      author: "Rajesh N",
      readTime: "4 min read",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png"
    },
    {
      id: 5,
      title: "Career Opportunities in Python Development",
      excerpt: "Exploring the growing demand for Python developers and the career paths available in this field.",
      category: "Training & Career",
      date: "2024-12-20",
      author: "Anand K",
      readTime: "5 min read",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png"
    },
    {
      id: 6,
      title: "Best Practices for Mobile App Development",
      excerpt: "Essential best practices every mobile app developer should follow to create successful applications.",
      category: "Technology",
      date: "2024-12-15",
      author: "Saravanan M",
      readTime: "8 min read",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png"
    }
  ];

  const categories = ['all', 'Technology', 'SaaS', 'Digital Marketing', 'Security Systems', 'Training & Career'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="blog">
      <Helmet>
        <title>Technology Insights & Blog | Latest Trends - QUASYS</title>
        <meta name="description" content="Read the latest insights on technology, SaaS, digital marketing, and industry trends from QUASYS Technologies. Stay updated with our expert analysis and tips." />
        <meta name="keywords" content="Best Software Technologies 2025, How SaaS Products Scale, Digital Marketing Trends India, Python Career Opportunities" />
        <link rel="canonical" href="https://www.quasys.in/blog" />
      </Helmet>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Insights & Blog</h2>
          <p>Stay updated with the latest trends and insights in technology</p>
        </motion.div>
        
        <div className="blog-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="blog-grid">
          {filteredPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              className="blog-post"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">
                    <FaCalendarAlt /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-author">
                  <span className="author-name">
                    <FaUser /> {post.author}
                  </span>
                  <span className="read-time">
                    <FaTag /> {post.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="no-results">
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;