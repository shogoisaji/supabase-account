export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      comments: {
        Row: {
          comment: string
          created_at: string | null
          id: number
          profile_id: string | null
          recommend: boolean
          stock_book_id: number
          updated_at: string | null
        }
        Insert: {
          comment: string
          created_at?: string | null
          id?: number
          profile_id?: string | null
          recommend: boolean
          stock_book_id: number
          updated_at?: string | null
        }
        Update: {
          comment?: string
          created_at?: string | null
          id?: number
          profile_id?: string | null
          recommend?: boolean
          stock_book_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_stock_book_id_fkey"
            columns: ["stock_book_id"]
            referencedRelation: "stock_books"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          batch: number
          id: number
          migration: string
        }
        Insert: {
          batch: number
          id?: number
          migration: string
        }
        Update: {
          batch?: number
          id?: number
          migration?: string
        }
        Relationships: []
      }
      password_reset_tokens: {
        Row: {
          created_at: string | null
          email: string
          token: string
        }
        Insert: {
          created_at?: string | null
          email: string
          token: string
        }
        Update: {
          created_at?: string | null
          email?: string
          token?: string
        }
        Relationships: []
      }
      personal_access_tokens: {
        Row: {
          abilities: string | null
          created_at: string | null
          expires_at: string | null
          id: number
          last_used_at: string | null
          name: string
          token: string
          tokenable_id: number
          tokenable_type: string
          updated_at: string | null
        }
        Insert: {
          abilities?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: number
          last_used_at?: string | null
          name: string
          token: string
          tokenable_id: number
          tokenable_type: string
          updated_at?: string | null
        }
        Update: {
          abilities?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: number
          last_used_at?: string | null
          name?: string
          token?: string
          tokenable_id?: number
          tokenable_type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          email: string
          id: string
          is_admin: boolean | null
          name: string | null
        }
        Insert: {
          avatar_url?: string | null
          email: string
          id: string
          is_admin?: boolean | null
          name?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string
          id?: string
          is_admin?: boolean | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      rentals: {
        Row: {
          created_at: string | null
          id: number
          profile_id: string | null
          rental_date: string
          return_date: string
          returned_date: string | null
          stock_book_id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          profile_id?: string | null
          rental_date: string
          return_date: string
          returned_date?: string | null
          stock_book_id: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          profile_id?: string | null
          rental_date?: string
          return_date?: string
          returned_date?: string | null
          stock_book_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rentals_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rentals_stock_book_id_fkey"
            columns: ["stock_book_id"]
            referencedRelation: "stock_books"
            referencedColumns: ["id"]
          }
        ]
      }
      stock_books: {
        Row: {
          author: string | null
          created_at: string | null
          id: number
          image: string | null
          isbn: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          author?: string | null
          created_at?: string | null
          id?: number
          image?: string | null
          isbn?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          author?: string | null
          created_at?: string | null
          id?: number
          image?: string | null
          isbn?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
