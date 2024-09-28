# Why do need to learn CSS?

- Used to syle and arrange the web content.

# What is CSS?

- CSS stands for Cascading Style Sheets.
- Describes how the HTML elments are going to be displayed on the screen or other media.

# who invented CSS?

- CSS was invented by Hakon Wium Lie and Bert Bos, in 1994.
- CSS version 1 was released in 1996
- CSS2 in 1998
- CSS3 in 1999. (Latest Version)

# CSS rules:

- CSS is rule based language where you define the styles on a speciifc elements on your web page.

- eg: lets apply color as green on a heading text.

- CSS rules syntax:

  - CSS rules start with a selector. This selects a particular elements or a group of elements that we are going to apply the styles.

  - provides the styles inside the curly braces, you can have multiple rules in form of key: value pairs

# ways to add CSS:

- There 3 different ways to add CSS:

  1.  Inline Styles
  2.  Internal Styles
  3.  External Styles (as best practice keep your all styles in separate CSS file)

- Every browser having a user agent styles sheets which will apply by default via browser.

1. Inline Styles:

   - It's way of writing CSS for a particular element (using style attribute)

2. Internal Styles:

- It's also a way of writing styles ussing <style></style> tag.

3. External Stylesheet

- It is wat of creating a seaparte CSS file and provide all the styles there.

- filename.css -> for external stylesheet provide .css extention.

- you need to line the external stylesheets to any HTML document/ web page.

priority rules:

!important > inline styles > internal styles > external Styles

Imp Notes:

- dont' use !important unless it it very important to use for overriding a particular style property.

- don't use inline styles directly in HTML pages, you must use it using JS only.

# Must use internal styles for above the fold content and use external styles for below the fold content.

- Among multiple selectors Try to use class name selector only.

# CSS selectors:

- A pattern used to select a particular HTML element that you want to style.

- types of CSS selectors:

1. universal selector (\*) -> generally use to apply user/dev specific default styles to override user agaent styles. It automatically appled to every HTML elements.

2. id(#) -> we need to id as attirbute in HTML tags and #idname provided in CSS to apply css rules.

3. class selector: (.)dot classname to apply the styles/css rules

4. Element: element name or html tag name and apply css rules.

5. attribute selector: [attribute name], [attribute="value"], [attribute$="value"], [attribute*="value"]:

https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

6. descendant selector:

   selects all the descedant elements

   combination of (element element, .classname-1 .classname-2)

7. child selector: (parent element > child element)

8. Adjacent sbiling selector: the childs of a same parent

9. General sibling selector: (element ~ element)

10. pseudo class selctor:

    a:hover

    refer all pesudo class: https://developer.mozilla.org/en-US/docs/Web/CSS/:active

11. pesudo element selector:

    ::palceholder

    refer all pseudo element: https://developer.mozilla.org/en-US/docs/Web/CSS/:active

CSS properties
