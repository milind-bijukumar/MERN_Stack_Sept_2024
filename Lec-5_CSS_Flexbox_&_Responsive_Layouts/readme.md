Dummy text:
First article: Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.

Second Article:Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.

Third Article: Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.

Cray food truck brunch, XOXO +1 keffiyeh pickled chambray waistcoat ennui. Organic small batch paleo 8-bit. Intelligentsia umami wayfarers pickled, asymmetrical kombucha letterpress kitsch leggings cold-pressed squid chartreuse put a bird on it. Listicle pickled man bun cornhole heirloom art party.

1. Introduction to CSS:

   - CSS rules
   - CSS Selectors (use class based or element or attribute selectors)
   - ways to add CSS - as best practices must use (internal for aove the fold content and external for below the fold content)
   - precedence of the CSS files: (Highest to Lowest)

     inline > internal > external > 3rd party CSS library > user agent style sheets

2. Buidling normal flow layouts:

   - Box Model (content, margin, padding, border, height, width)
   - box-sizing propertt (content-box and border-box) -> to build RWD use border-box
   - margin, padding -> (TRBL)
   - overflow property
   - CSS units (px, %, vw and vh, em and rem)

3. Flexbox:

- Flexbox stands for flexible box.
- Allows to build any complex and responsive web layouts.
- Flexbox terminologies and properties: refer the notes.

# Assigments: Fix the problem for odd or even number of aricles that needs to be displayed parallel to respective articles.

# Reference guide:

1. https://css-tricks.com/snippets/css/a-guide-to-flexbox/

2. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox

# Responsive Web Design (RWD): means adapt the layouts on any devices.

- To build any complex reponsive web pages you need to follow these things:

  1. Use viewport meta tag: tells to browser the particular document can open in any devices and set the initial device width with some value.

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

2. Breakpoints for all the ranges of devices

   breakpoint for different devices:

   1. mobile: 320px - 480px
   2. tablets/fablets: 768px - 1024px
   3. laptop: >1200px
   4. for larger desktop or TV: >=2500px

3. use media queries to define you break points

4. Write those media quries

   @media only screen and (max-width: 480px) {
   //write you devices specific styles
   }

   @media only screen and (min-width: 481px) and (max-width: 768px) {
   // write your devices specific styles
   }

# completethe food subscription project

1. desktop and latop view: show the design as is as per the PNG file

2. tablet - use 2 column layout

3. mobile - use single column layout
