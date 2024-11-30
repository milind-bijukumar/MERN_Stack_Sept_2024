# Cascading in CSS

- CSS stands for Cascading stylesheet.
- Basically cascading is the process of determining how the the styles are applied on a particular element with multiple rules.

# How this cascading works?

- The applied CSS rules / styles follow the top to bottom approach and the later style can override the earlier styles.

- It woks based on importance, specificity, source order and inheritance.

# Specificity:

- When multiple CSS rules are applied to a particular element, specifiity determines which rule is applied.

- How this specificity is going to calculate?

  weightage 0 0 0 0

  Inline styles 1 0 0 0

  ID 0 1 0 0

  class/attribute 0 0 1 0
  /pseduo-classes

  element/pseudo-element 0 0 0 1

# inheritance: (reusability)

- Some CSS properties are inherited from the parent elements to child element such color and font-size, font-family.

- If no specific rules are applied to an element, it will inherit those properties from its parent element.

# positioning in CSS

- In CSS position property is used to control the element withing its containing element.

- position: static(default) | relative | absolute | fixed | sticky

- if the don't provide any position value then by default it will taking static, there no affect of left, right, top and bottom properties.
