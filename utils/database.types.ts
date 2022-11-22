export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
        }
      },
      posts: {
        Row: {
          id: string
          created_at: string | null
          title: string
          post_text: string
          author_id: string
          subreddit_id: string
          post_image?:string | null
        }
        Insert: {
          id: string
          created_at: string | null
          title: string
          post_text: string
          author_id: string
          subreddit_id: string
          post_image?:string | null
        }
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
  }
}
