# NextJs App!

NextJs Application

# Steps.

Install dependencies

```bash
$ pnpm install
```

Start your Mockoon server on Port 3002

```bash
$ npm install -g @mockoon/cli
$ mockoon-cli start --data ./mockoon.json
```

Start the application

```bash
$ pnpm dev
```

# Questions

- Describe your thoughts about your code.
  > The code is clean and follows NextJs best practices.

- Which libraries did you use and why.
  > "styled-components" was used for styling and creating reusable CSS components, "html-react-parser" for rendering the HTML blog content (body) returned from the API, "reading-time" for generating the time it takes to read the blog content, "jest-fetch-mock" for mocking the javascript fetch API in the jest test written. Every other thing was done natively.

- What did you enjoy about the challenge? What are you proud of?
  > I'm happy I was able to implement and extend the application beyond what was expected.

- What was not so great?
  > It would have been nice to have an API designed specifically for each blog post, I had to filter out each rendered blog post from the list of blog posts everytime, this is not optimal since the data could be fetched (and cached) directly instead.

- How would you improve it if you had more time?
  > I would implementn ii8n features, I noticed this was part of the response sent back, and perhaps implementation some deployment process with docker would be nice. Also better styling for error and not-found pages, more jest test cases 
