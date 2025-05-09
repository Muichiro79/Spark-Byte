/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MONGO_URI: string;
    readonly VITE_JWT_SECRET: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  