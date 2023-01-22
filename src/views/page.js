import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Unique Spiffy Coyote</title>
        <meta property="og:title" content="Page - Unique Spiffy Coyote" />
      </Helmet>
      <div className="page-banner">
        <div className="page-container1">
          <h1 className="page-text">
            How do I talk with my preschooler about their body?
          </h1>
          <span className="page-text01">
            <span>
              What should I keep in mind?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Preschool kids are learning to communicate about their body and
              its needs. They need you to teach them the right words for their
              body parts, and how to tell you how their body is feeling. Helping
              them communicate effectively now will help you care for them and
              will set them up to take care of themselves later in life.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              Think about how you want your kid to feel about their body when
              they’re adults. Little kids often have few boundaries about their
              bodies. Many love running around naked. As a parent, it’s your job
              to help them learn what’s appropriate and to do so in a way that
              does not make them feel ashamed of their bodies.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              Consider what words or tone may make your kid feel shame or
              embarrassment about their body (like saying, “Put a shirt on!
              That’s disgusting!”) and think about a different way of getting
              your kid to act appropriately (like saying, “Since we’re eating
              dinner, it’s time to put a shirt on.”).
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              It’s normal for preschoolers to touch their own genitals, so don’t
              worry if they do. Learn more about how to talk with your
              preschooler about sex and sexuality.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              Teach yourself about anatomy. Learn about sexual and reproductive
              anatomy so you can answer questions about body parts and their
              functions. Check out age-appropriate books for kids about anatomy
              and body diversity, and read them with your little one. Some good
              ones to start with are Who Has What?: All About Girls&apos; Bodies
              and Boys&apos; Bodies and Who We Are!: All About Being the Same
              and Being Different by Robie H. Harris.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>How do I talk about body parts?</span>
            <br></br>
            <br></br>
            <span>
              As your little one talks more and more, they’re going to need to
              know the names of all their body parts — including their genitals.
              Brush up on your basic anatomy. Bathtime, getting dressed in the
              morning, or putting on pajamas at night are all good times to go
              over what their body parts are. Books about anatomy are good
              tools, too. Who Has What?: All About Girls&apos; Bodies and
              Boys&apos; Bodies by Robie H. Harris is a good place to start.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              If you’re comfortable, use the real names for their body parts
              (like vulva, vagina, penis, and testicles) instead of nicknames.
              Using coded language for genitals can send the message that these
              parts are not to be talked about or are shameful. Your attitude
              matters, too. If you react very strongly (angry or embarrassed)
              when talking about genitals, your preschooler will get the message
              that they shouldn’t come to you with questions or concerns about
              their body. So try to stay calm and be open to answering their
              questions.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              Be clear about who is allowed to see or touch their genitals. A
              clear, simple rule about this can be helpful in preventing sexual
              abuse. For example, you could say, “Only me and dad and a doctor
              or nurse are allowed to see your vulva when we’re taking care of
              you. If anyone else wants to see or touch you there, or touches
              you in a way you don’t like, tell me right away.” Read more about
              talking about personal safety.
            </span>
          </span>
          <Link to="/" className="page-navlink button">
            Back
          </Link>
          <div className="page-container2">
            <input
              type="text"
              placeholder="Email here..."
              className="page-textinput input"
            />
            <button className="page-button button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
