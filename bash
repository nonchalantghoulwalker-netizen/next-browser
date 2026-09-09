npx create-next-app@latest studyhub --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd studyhub
# Install Supabase client for database/auth/storage
npm install @supabase/supabase-js

# Install Lucide for beautiful, consistent icons
npm install lucide-react

# Initialize shadcn/ui (Press 'Y' and select default options when prompted)
npx shadcn@latest init

# Install base UI components we'll need immediately
npx shadcn@latest add button input card
