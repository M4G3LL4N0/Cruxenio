export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

interface Database {
  public: {
    Tables: Record<string, unknown>;
    Views: Record<string, unknown>;
    Functions: Record<string, unknown>; 
    Enums: Record<string, unknown>;
    CompositeTypes: Record<string, unknown>;
  };
  cruxenio: {
    Tables: {
      waitlist_signups: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          source: string;
          metadata: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          source?: string;
          metadata?: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          source?: string;
          metadata?: Json;
          created_at?: string; 
        };
        Relationships: [];
      };
      moves: {
        Row: {
          id: string;
          slug: string;
          title: string;
          summary: string;
          situation: string;
          action_steps: string[];
          why_it_works: string | null;
          when_not_to_use: string | null;
          tags: string[];
          is_featured: boolean;
          status: 'draft' | 'published';
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          summary: string;
          situation: string;
          action_steps?: string[];
          why_it_works?: string | null;
          when_not_to_use?: string | null;
          tags?: string[];
          is_featured?: boolean;
          status?: 'draft' | 'published';
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          summary?: string;
          situation?: string;
          action_steps?: string[];
          why_it_works?: string | null;
          when_not_to_use?: string | null;
          tags?: string[];
          is_featured?: boolean;
          status?: 'draft' | 'published';
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, unknown>;
    Functions: Record<string, unknown>;
    Enums: Record<string, unknown>;
    CompositeTypes: Record<string, unknown>;
  };
}
