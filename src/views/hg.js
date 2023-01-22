import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './hg.css'

const Hg = (props) => {
  return (
    <div className="hg-container">
      <Helmet>
        <title>hg - Unique Spiffy Coyote</title>
        <meta property="og:title" content="hg - Unique Spiffy Coyote" />
      </Helmet>
      <div className="hg-banner">
        <div className="hg-container1">
          <h1 className="hg-text">
            <span>HIGH SCHOOL</span>
            <br></br>
          </h1>
          <span className="hg-text03">
            <span className="hg-text04">
              Most teens say their parents are their biggest influence when it
              comes to making decisions about sex. You don’t need to have all
              the answers, you just need to be there for them. You can help them
              stay safe in real life and online, and you can help them learn the
              skills they need to deal with bullying and peer pressure. Make
              sure your teen knows the real facts about things like sex,
              pregnancy, STDs, consent, and the responsibilities that go along
              with relationships.
            </span>
            <br></br>
            <br></br>
            <span>What should I keep in mind?</span>
            <br></br>
            <br></br>
            <span>
              The body changes that come with puberty usually end in the teen
              years. Most teens complete puberty by age 16. That means their
              growth spurts stop, their periods become more regular, and the
              pitch of their voices stop changing.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              Of course, that’s most teens, not all. If your teen is still
              growing after age 16 or hasn’t passed through other developmental
              milestones, they may feel ashamed or embarrassed about being
              different from their classmates and friends. They may worry that
              there’s something wrong with them. Your teen may also be getting
              distorted images of what teen bodies look like from TV and movies,
              because adult actors often play teen characters. You can help them
              deal with those feelings.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              Emotions run high in the high school years, especially when it
              comes to their feelings about their bodies. They may look and
              think like adults one moment and like children the next. Keep in
              mind that even if your teen looks mature, their mind is still
              growing. In fact, their brain won’t stop developing until they’re
              well into their 20s.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              Figure out what your values are when it comes to body image. Do
              you want them to believe that all bodies are beautiful? Do you
              want them to value strength and fitness? Is health the most
              important factor, above looks or anything else? Defining your own
              values can help you decide what to say to your teen.
            </span>
            <br></br>
          </span>
          <Link to="/" className="hg-navlink button">
            Back
          </Link>
          <div className="hg-container2">
            <input
              type="text"
              placeholder="Email here..."
              className="hg-textinput input"
            />
            <button className="hg-button button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hg
