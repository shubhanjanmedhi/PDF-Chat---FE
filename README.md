# PDF Chat -- Client (Frontend)
Chat based RAG Application where you can upload one or multiple PDF files and chat with it

**Pre-requisite:** Node.js must be installed in your system

**Optional:** If you want to use Authentication

    Step 0.1: Create a `.env` file to the project root

    Step 0.2: Add
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your clerk public key>
    CLERK_SECRET_KEY=<your clerk secret key>

    Step 0.3: Update `layout.tsx` and replace the current `return()` with the commented content

Step 1: Open `terminal` and run `npm install`

Step 2: Now run `npm run dev`

Step 3: That's it! Your PDF Chat Client is ready at: "`localhost:3000`" 
