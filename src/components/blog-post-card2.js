import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{props.when}</span>
        </div>
        <h1 className="blog-post-card2-text1">{props.title}</h1>
        <span className="blog-post-card2-text2">{props.description}</span>
        <div className="blog-post-card2-container2">
          <div className="blog-post-card2-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              className="blog-post-card2-image1"
            />
            <span className="blog-post-card2-text3">{props.author}</span>
          </div>
          <span className="blog-post-card2-text4">Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  author: 'Jane Doe',
  when: '3 days ago',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  rootClassName: '',
  image_alt: 'image',
  profile_alt: 'profile',
  description:
    "Discipline:  Discipline is about teaching children appropriate behaviors and helping them learn self-control. It's not about punishment or making children feel bad.  Effective discipline involves setting clear and consistent rules, establishing consequences for inappropriate behavior, and offering positive reinforcement for good behavior.  It's also important to be patient and understanding, and to try to see things from your child's perspective.",
  title: 'Discipline',
  image_src:
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGNoaWxkfGVufDB8fHx8MTY3MzE3NDgxOQ&ixlib=rb-4.0.3&w=1500',
}

BlogPostCard2.propTypes = {
  author: PropTypes.string,
  when: PropTypes.string,
  profile_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  profile_alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard2
