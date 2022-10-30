import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const FAQ = ({ data, location }) => {
		const siteTitle = data.site.siteMetadata.title;

		return (
				<Layout location={location} title={siteTitle}>
						<Seo title="About" />
						<Link to="/">
								<h1>{siteTitle}</h1>
						</Link>

						<h3><b>personal info:</b></h3>
						<p><u><b>birthday?</b></u></p>
						<p>2005/03/30</p>

						<p><u><b>nationality?</b></u></p>
						<p>vietnamese 100%</p>

						<p><u><b>which part in vietnam?</b></u></p>
						<p>ho chi minh city</p>

						<p><u><b>height?</b></u></p>
						<p>180cm</p>

						<p><u><b>brother(s), sister(s) if any?</b></u></p>
						<p>one of each, they are both younger</p>

						<p><u><b>intended major?</b></u></p>
						<p>computer science</p>
						
						<p><u><b>sleep schedule?</b></u></p>
						<p>10:00pm and up at 5:00am</p>
						
						<p><u><b>why so early?</b></u></p>
						<p>I go to school by bus and my school is far away</p>

						<p><u><b>what about summer, still wake up that early?</b></u></p>
						<p>yes! in summer I do early morning marathon running</p>

						<p><u><b>interesting, what are your hobbies?</b></u></p>
						<p>marathon, swimming, recreational programming and studying</p>

						<p><u><b>what??? studying??</b></u></p>
						<p>right! I study when it gets boring</p>
						
						<p><u><b>role model, if any?</b></u></p>
						<p>my grandmother, tho I call her "bà ngoại". She rises up very early to go to the church and exercise with her friends. I want to be determined like her!</p>

						
						<h3><b>misc:</b></h3>
						<p><u><b>music?</b></u></p>
						<p>usually from Modern Talking, lately I have been listening to a lot of Aphex Twin</p>

						<p><u><b>languages?</b></u></p>
						<p>vietnamese, english</p>

						<p><u><b>ok, what about programming languages?</b></u></p>
						<p>ok ok :^) c/c++, javascript/typescript, python, pascal, nim, and currently learning haskell</p>

						<p><u><b>thank you, is there anything more you want to say?</b></u></p>
						<p>oh, if you have time, there is a blog section where I seldom (will be more often) post about random stuff</p>

				</Layout>
		);
};

export default FAQ;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
