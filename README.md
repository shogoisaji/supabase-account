## Supabase Account Sample



### supabase連携
```
supabase init
npx supabase link --project-ref <domain>
npx supabase gen types typescript --linked > lib/database.types.ts
```

### next.config.js
```
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ["<domain>.supabase.co"],
    },
  };
```
  
![スクリーンショット 2023-10-24 184637](https://github.com/shogoisaji/supabase-account/assets/131496728/d0b41fdc-08dd-48e8-a17c-3163f9942162)
