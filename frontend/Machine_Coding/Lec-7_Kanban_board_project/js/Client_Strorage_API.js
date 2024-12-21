/**

  Client Storage API:
  -------------------

  - It's browser API to store the data locally on user's machine(Client side)
  - It allows the website to store information such user preferences, session data, refresh token, or redirection url or cached the data without relying on the server.
  - It improves the user experience and user quickly enagaging with content.

  - There majorly 3 kind of storage APIs:

    1. Local storage
    2. Session storage
    3. Cookie

    1. Local storage:
      
      - use to store the data in key and value format at the client side.
      - Stoarge limit - 5MB - 10MB (varies by browser)
      - persist the data even if the browser has been closed
      - localStorage API:
         1. localStorage.setItem('key', 'value');
         2. localStorage.getItem('key');
         3. localStorage.removeItem('key');
         4. localStorgae.clear() 
       
      
    2. Session storage:

      - use to store the data in key and value format at the client side.
      - Stoarge limit - 5MB - 10MB (varies by browser)
      - persist the data if the browser session is lived, when the browser or the browser tab is getting closed then the whole data will be removed automatically.
      - sessionStorage API:
         1. sessionStorage.setItem('key', 'value');
         2. sessionStorage.getItem('key');
         3. sessionStorage.removeItem('key');
         4. sessionStorgae.clear() 

    3. Cookie:

      - use to store the small piece of information.
      - storage limit - around 4KB data you can store
      - if you make the bowser cookied disabled, it will stop working.  
 */
