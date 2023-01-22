import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import BlogPostCard2 from '../components/blog-post-card2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Unique Spiffy Coyote</title>
        <meta property="og:title" content="Unique Spiffy Coyote" />
      </Helmet>
      <div className="home-hero">
        <div className="home-container1">
          <h1 className="home-text">The Best Teacher is Parent</h1>
          <span className="home-text1">
            <span>
              Show love and affection: Children need to feel loved and valued in
              order to thrive. Show your love through physical affection, such
              as hugs and kisses, as well as verbal affirmations and acts of
              kindness.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <button className="home-button button">Get Started</button>
        </div>
      </div>
      <div className="home-features">
        <h1 className="home-text5">EXPLORE BY AGES</h1>
        <div className="home-container2">
          <Link to="/page">
            <FeatureCard2
              Ele="Pre School"
              rootClassName="rootClassName"
              className="home-component"
            ></FeatureCard2>
          </Link>
          <Link to="/ele">
            <FeatureCard2
              Ele="Elementary School"
              Preschool="Info for parents of children ages 5-8."
              rootClassName="rootClassName3"
              className="home-component1"
            ></FeatureCard2>
          </Link>
          <Link to="/ele">
            <FeatureCard2
              Ele="Middle School"
              Preschool="Info for parents of preteens ages 9-13."
              rootClassName="rootClassName2"
              className="home-component2"
            ></FeatureCard2>
          </Link>
          <FeatureCard2
            Ele="High School"
            Preschool="Info for parents of teens age 14-19."
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <div className="home-blog">
        <div className="home-container3">
          <BlogPostCard2
            title="Chiild Development"
            description="Children develop at different rates and in different ways, but there are certain milestones that most children reach at roughly the same age. These milestones include physical, cognitive, and social-emotional development.  As a parent, you can help support your child's development by providing a safe and stimulating environment, encouraging exploration and discovery, and helping your child learn new skills.  It's important to remember that every child is unique, and it's normal for children to develop at different rates. If you have concerns about your child's development, it's always a good idea to consult with your child's healthcare provider."
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName3"
          ></BlogPostCard2>
        </div>
        <div className="home-container4">
          <BlogPostCard2
            image_src="https://images.unsplash.com/photo-1610500795224-fb86b02926d7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGRpc2NpcGxpbmUlMjBjaGlsZHxlbnwwfHx8fDE2NzMxNzUzMDk&amp;ixlib=rb-4.0.3&amp;w=1500"
            profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></BlogPostCard2>
        </div>
        <BlogPostCard2
          title="Managing stress"
          image_src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHN0cmVzc3xlbnwwfHx8fDE2NzMxNzUzNDk&amp;ixlib=rb-4.0.3&amp;w=1500"
          description="Parenting can be stressful, and it's important to take care of yourself in order to be able to effectively care for your children.  Some ways to manage stress as a parent include setting aside time for yourself, getting regular exercise and enough sleep, seeking support from friends and family, and finding healthy ways to cope with stress, such as through relaxation techniques or hobbies.  It's also important to remember to be kind to yourself and not to expect perfection. Being a parent is a challenging but rewarding role, and it's okay to make mistakes and learn from them."
          profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
          rootClassName="rootClassName2"
        ></BlogPostCard2>
      </div>
      <footer className="home-footer">
        <span className="home-text6">© 2023 All Rights Reserved.</span>
        <div className="home-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon2">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon4">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>
    </div>
  )
}

export default Home
