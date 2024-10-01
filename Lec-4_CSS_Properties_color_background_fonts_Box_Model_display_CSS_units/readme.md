# properties of CSS (color, background, fonts and texts)

1. color: This is the CSS property which is used to provide color to the text.
2. background: used to provide a background color or background images.
3. Fonts: used to fonts(likewise font-family, font-weight, font-size)
4. texts: used to provide decoration to a particular text.

# Box Model:

- Everything displayed on the browser by CSS is box.
- Basically, box is fundemental concept in CSS that describes how the elements can be displayed on the web page.
- The intention to build boxes are to create fancy layouts of a web page.

- To build any boxes:

  - content
  - padding
  - margin
  - height
  - width
  - border

- Formaula for width: width of the content + left margin + right margin + left padding + right padding + left border + right border

= .my-box { 200 + 10 + 10 + 20 +20} = 260px

- Formula for height: height of the content + top margin + bottom margin + top padding + bottom padding + top border + bottom border

# What is box-sizing?

- It's a CSS property, to determine how the size of the box is being calculated.
- box-sizing is having 2 values:
  1.  content-box (default value)
  2.  border-box
- https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

# what is difference b/w intrinsic box size and extrinsic box size?

intrinsic size: default height and width of the content is going to consider.

extrinsic size: if explicity mention the height and width of the content or box.

# overflow property:

- When the content goes out of the conatainer that is know as overflow of the content.

- overflow: hidden | scroll | auto | visible

# display property:

- it helps you how to show you content.
- display: block | inline | inline-block | flex | grid (upcoming session)

# CSS units:

- It's value is being used to specify the size properties(height, width, padding, margin, border) for an element.

- px(pixels): dots on your browser or screen

- perentage (%): relative unit of the size of the containing element.

- vw and vh(viewport)

  - vw is the percentage of the viewport width
  - vh is the percentage of the viewport height
  - useful for responsive desgins.
  - 1vw = 1% of the view port width = approx (10px)
  - 1vh = 1% of the viewport height.

- em and rem:

  - These the relative units and size of the content will be deciding based on the parent element.

  - 1em = 16px (by default)

  - em vs rem

    EM: value wrt to immediate parent element.

    REM: value wrt to root element(html, :root)
