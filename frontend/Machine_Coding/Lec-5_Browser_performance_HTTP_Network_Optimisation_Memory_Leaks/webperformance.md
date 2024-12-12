# What is web performance?

- Web performance refers to quickly and efficiently loading a website and run's in user's browser.
- Includes page load speed, user interaction responsivenes and smooth functionality.

# what is perceived web performance?

- refers to user perception not the technical measurements.
- It's all about user's experience not just the page load or server response times.

# why web performance matters?

    1. User statisfaction:
        - user prefers a fast and responsive website, regardless of load time.

    2. Enagement:

        - A fast and responsive site encourages the users to say and engage with the content

    3. Conversion rate:

        - Users most likely to stay on a fast website, which leads to conversion rate as compared to slower website.

    4. Brand Image
        - An application feels to load fast, responsive with good services and products and provides the better enaging content for the end users..

    5. SEO and Rankings:

        - Search engine like google search engine consider the speed index in their ranking alogrithms, so  slower speed index can positively impact SEO.

    # What is the tool to use for the web peformance?

      - Lighthouse too is used to measure the web performnace.
      - show it via chrome browser tool.


    # What are the metrics of the web performance? (Aslo known web vitals)

      1. FCP (First Contentful Paint):

           - Time for the browser to render the first content from DOM, excluding the background images.
           - Good thershold: Less than 1.8s to 2.0s
      2. LCP (Largest Contenful paint):

           -Time for the largest content element (images or bigger text block) on the web page visible.
           - Good Threshold: 2.5s
      3. TBT - (Total Blocking Time):

           - Total amount of time during which the main theread is blocked, preventing the user interaction.
           - Good Threshold: 200ms = 0.02

     4. CLS (Cummulative layout shift):

           - The total count of all suddent layout chnages from start to finish. A layout shift happens When a visible element changes the position from one rendered frame to the next.
           - Good Threshold: Less than 0.1(not in seconds)

    5. SI (Speed index):

         - Average time taken for web page to be displayed/rendered on the browser.

         - Good Threshold: <5s (try to make every webpage load under <3s)

# How does a browser renders a web page?

    1. Download the HTML
    2. Parse the HTML - build DOM tree
    3. Download and parse the CSS - Build CSSOM tree
    4. Download and execute the JS - The browser to download the JS and execute the JS.
    5. Build the render tree = DOM + CSSOM
    6. Layout - the browser detrmines the position and size of each element inthe render tree.
    7. paint - The browser displays the text, images, colors and other contents  on the screen.

# How to web performnace?

- you have identify the render blocking elements -> Who blocks the HTML parsing. (Who are those -> Bigger images, CSS, JS)

- image optimisation techniques:

  - Identify the LCP (larget/bigger images)
  - ask design to provide the optimised version of the bigger images.
  - lazy loading for images loading="lazy"

- CSS Optimisation techquinues:

  - Removed the unused CSS:

    - identify the unused CSS - chrome bowser tool -> lighthouse- > web performance metrics can idetify the unused CSS/JS

    - Split the CSS:

      1.  critical CSS (above the fold):
          CSS required for above the fold content to be displayed on the screen first load/paint
      2.  non critical CSS : CSS code required for below the fold content that needs to be displayed.

    - Use critical CSS via style tag

    - Use lazy loading to download the non-critical CSS

    - CSS class name has be shoter.

- JS Optimisation techniques:

  - Split JS - larger JS - into different JS files and making sue to the include scripts at the end of your body tags.

  - Defer and async attributes can used in script tag to download the thridy pary CSS either along with HTML parser or after the HTML DOM tree.

  - How to use it?

    <script defer async src="https://example.com/vendor-scrtpt.js"></script>

  - async vs defer - refers the note.

  # Memory Leak Problems:

  1.  Global variables:

      - It may pollute the variables globally (modifed via functions).
      - try to avoid using global variables. create a function or modules so that scope of variables you limited under a function or under module.

  2.  closure and scope:

      - Processing a large amount of data via closure, so handle it carefully
      - Eg: data = { large data } -> de-reference it -> data = null;

  3.  Handling the events:

      - Attach events via addEventListener('eventname', ()=>{
        // logic
        })

      - Detach the events via removeEventListener('sameeventname', ()=>{
        // call the function
        })

  4.  setInterval():

      - retuns the timerId
      - clearInterval()
      - timerId = null;

  5.  promises:

      - custom promises -> via new Promise((resolve, reject)=>{}) -> there might be a possibilty you created the but you forget to consume then this create a memory leak problem

      - you have to consume the promise:

        - then, catch, finally
        - async/await
